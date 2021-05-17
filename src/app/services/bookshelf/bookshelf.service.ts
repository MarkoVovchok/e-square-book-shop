import { Injectable } from '@angular/core';
import { NetService } from '../net/net.service';
import { map, take, tap } from 'rxjs/operators';
import { BookApiResponse, BookItem } from 'src/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  private cashedBooks: BookItem[] = [];
  private chosenBook!: BookItem;
  private wishList: BehaviorSubject<BookItem[]> = new BehaviorSubject<
    BookItem[]
  >([]);
  constructor(private net: NetService) {}

  getBooksByKeyword(key: string): Observable<BookItem[]> {
    return this.net.fetchBooks(key).pipe(
      map((result: BookApiResponse) =>
        result.items.length > 20 ? result.items.slice(0, 20) : result.items
      ),
      tap((books) => (this.cashedBooks = books))
    );
  }

  getChosenBook() {
    return this.chosenBook;
  }
  // can do an ajax here in the future if more info needed
  setChosenBook(book: BookItem) {
    let searchedBook = this.cashedBooks.find((b) => b.id === book.id);
    if (searchedBook) {
      this.chosenBook = searchedBook;
    }
  }

  addBookToWishList(book: BookItem) {
    let wishListBooks = this.wishList.value;
    wishListBooks.push(book);
    this.wishList.next(wishListBooks);
  }

  getWishList() {
    return this.wishList.asObservable();
  }
  removeBookFromWishlist(book: BookItem) {
    let currentWish = this.wishList.value;
    currentWish = currentWish.filter((b) => b.id !== book.id);
    this.wishList.next(currentWish);
  }
}
