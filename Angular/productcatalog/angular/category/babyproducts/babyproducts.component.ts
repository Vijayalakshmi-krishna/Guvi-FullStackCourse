import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babyproducts',
  templateUrl: './babyproducts.component.html',
  styleUrls: ['./babyproducts.component.css']
})
export class BabyproductsComponent implements OnInit {

  babyproducts_array=[
    {
      id:5,
      name:'ChildCare Spout Cup',
      price:'Rs.400',
      description:'0% BPA Easy to hold for little ones and sip Easy to clean.Prefect fro feeding while on the go Very convenient to use.',
      imgsrc:"babysipper"
    },
    {
      id:6,
      name:'Born Baby Multipurpose Mother Bag',
      price:'Rs.1000',
      description:'Baby Boys Clothing Sets Summer Kids Clothes For boys Lion Shirt + Shorts Kids Cartoon Children Clothes Suits',
      imgsrc:"baby_motherbag"
    }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
