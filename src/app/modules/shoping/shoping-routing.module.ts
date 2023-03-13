import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoppingComponent } from './components/add-shopping/add-shopping.component';
import { EditShoppingComponent } from './components/edit-shopping/edit-shopping.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';

const routes: Routes = [
  {
    path: '', 
    component: ShoppingPageComponent,
    children: [
      { path: 'add',   component: AddShoppingComponent },
      { path: 'edit',  component: EditShoppingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopingRoutingModule { }
