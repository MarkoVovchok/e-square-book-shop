import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookshelfService } from 'src/app/services/bookshelf/bookshelf.service';
import { BookItem } from 'src/models';

@Component({
  selector: 'bookshop-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.less'],
})
export class WishlistComponent implements OnInit {
  wishlistObservable!: Observable<BookItem[]>;
  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.wishlistObservable = this.bookshelfService.getWishList();
  }

  removeFromWishlist(book: BookItem) {
    this.bookshelfService.removeBookFromWishlist(book);
  }
}
