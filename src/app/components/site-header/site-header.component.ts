import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookshelfService } from 'src/app/services/bookshelf/bookshelf.service';
import { UserService } from 'src/app/services/user/user.service';
import { BookItem, User } from 'src/models';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.less'],
})
export class SiteHeaderComponent implements OnInit {
  stickyHeader: boolean = false;
  bounce = false;
  activeUser!: Observable<User>;
  counter!: Observable<BookItem[]>;
  constructor(
    private userService: UserService,
    private bookShelfService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.activeUser = this.userService.currentUser;
    this.counter = this.bookShelfService.getWishList().pipe(
      tap((_) => {
        this.bounce = true;
        setTimeout(() => {
          this.bounce = !this.bounce;
        }, 2000);
      })
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.scrollY;
    number > 30 ? (this.stickyHeader = true) : (this.stickyHeader = false);
  }
}
