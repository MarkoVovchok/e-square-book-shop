import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { BookItem } from 'src/models';
import { BookshelfService } from '../services/bookshelf/bookshelf.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less'],
})
export class ShopComponent implements OnInit {
  searchCtrl!: FormControl;
  results: BookItem[] = [];
  openModal = false;
  constructor(private bookService: BookshelfService) {}

  ngOnInit(): void {
    this.searchCtrl = new FormControl();
    this.subscribeToSearch();
  }

  private subscribeToSearch() {
    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((value) => this.populateResults(value))
      )
      .subscribe();
  }
  private populateResults(value: string) {
    return this.bookService
      .getBooksByKeyword(value)
      .pipe(tap((results) => (this.results = results)));
  }

  trackByFn(index: number) {
    return index;
  }

  showMoreInfo(book: BookItem) {
    this.bookService.setChosenBook(book);
    this.openModal = !this.openModal;
  }
}
