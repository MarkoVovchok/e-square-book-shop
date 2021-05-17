import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BookshelfService } from 'src/app/services/bookshelf/bookshelf.service';
import { BookItem } from 'src/models';

@Component({
  selector: 'bookshop-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.less'],
})
export class MoreInfoComponent implements OnInit {
  book!: BookItem;
  @Output() closedModal: EventEmitter<void> = new EventEmitter<void>();
  constructor(private bookService: BookshelfService) {}

  ngOnInit(): void {
    this.book = this.bookService.getChosenBook();
  }
  closeModal() {
    this.closedModal.emit();
  }
  addToWishList() {
    this.bookService.addBookToWishList(this.book);
    this.closeModal();
  }
}
