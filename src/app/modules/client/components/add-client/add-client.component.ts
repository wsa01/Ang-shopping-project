import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
declare var bootstrap:any;


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements AfterViewInit {


  @ViewChild("modalAdd") modal!: ElementRef;
  

  constructor() { }
  
  ngAfterViewInit(): void {
    var myModal = new bootstrap.Modal(this.modal.nativeElement);
    myModal.show();
  }



}
