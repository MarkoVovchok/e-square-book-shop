import { Component, Input, OnInit } from '@angular/core';
import { BookItem } from 'src/models';

@Component({
  selector: 'bookshop-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.less'],
})
export class BookListItemComponent implements OnInit {
  @Input() book!: BookItem;
  constructor() {}

  ngOnInit(): void {}
}
