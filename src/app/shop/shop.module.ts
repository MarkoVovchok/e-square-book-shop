import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoreInfoComponent } from '../components/more-info/more-info.component';
import { WishlistComponent } from '../components/wishlist/wishlist.component';
import { BookListItemComponent } from '../components/book-list-item/book-list-item.component';

@NgModule({
  declarations: [ShopComponent, MoreInfoComponent, WishlistComponent, BookListItemComponent],
  imports: [CommonModule, ShopRoutingModule, ReactiveFormsModule],
})
export class ShopModule {}
