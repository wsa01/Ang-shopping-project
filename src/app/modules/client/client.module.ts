import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

import { ClientRoutingModule } from './client-routing.module';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { TableClientComponent } from './components/table-client/table-client.component';
import { RouterModule } from '@angular/router';
import { ClientService } from './services/client.service';


@NgModule({
  declarations: [
    ClientPageComponent,
    AddClientComponent,
    EditClientComponent,
    TableClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
  ],providers:[
    ClientService
  ]
})
export class ClientModule { }
