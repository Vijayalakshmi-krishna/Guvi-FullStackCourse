import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  categoryArray=[
    {catName:"Toys",routename:"toys"},
    {catName:"Kids Fashion",routename:"textile"},
    {catName:"Baby Products",routename:"babyproducts"}
  ]

}
