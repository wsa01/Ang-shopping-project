import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingRoutingModule } from './shoping-routing.module';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { AddShoppingComponent } from './components/add-shopping/add-shopping.component';
import { EditShoppingComponent } from './components/edit-shopping/edit-shopping.component';


@NgModule({
  declarations: [
    ShoppingPageComponent,
    AddShoppingComponent,
    EditShoppingComponent
  ],
  imports: [
    CommonModule,
    ShopingRoutingModule
  ]
})
export class ShopingModule { }
