import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private clientSrv:ClientService
  ) { }

  ngOnInit(): void {
  
    this.clientSrv.getClient().subscribe(resp=>{
      console.log(resp);
      this.clients=resp;
      console.log(this.clients);
    })
  }

}
