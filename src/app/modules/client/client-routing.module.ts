import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';

const routes: Routes = [
  {
    path: '', 
    component: ClientPageComponent,
    children: [
      { path: 'add',  component: AddClientComponent },
      { path: 'edit', component: EditClientComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
