import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textiles',
  templateUrl: './textiles.component.html',
  styleUrls: ['./textiles.component.css']
})
export class TextilesComponent implements OnInit {

  textiles_array=[
    {
      id:3,
      name:'Girls Cinderella Dress',
      price:'Rs.1000',
      description:'Girl Sofia Cosplay Costumes Sequin Bow Lace Purple Frock Kids Ankle Length Party Clothing Princess Dress Up Dresses For Girls',
      imgsrc:"girl_frock"
     
    },
    {
      id:4,
      name:'Boys Lion Dress',
      price:'Rs.650',
      description:'Baby Boys Clothing Sets Summer Kids Clothes For boys Lion Shirt + Shorts Kids Cartoon Children Clothes Suits',
      imgsrc:"lion_set_dress"
    }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
