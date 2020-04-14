import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
toys_array=[
  {
    id:1,
  name:'camel',
  price:'Rs.50',
  description:'Let your kid enjoy this brightly colored friction doggy toy. Freewheel action to race them around',
  imgsrc:"camel_toy"
  },
  {
    id:2,
    name:'caterpillar',
    price:'Rs.200',
    description:'Delight your little ones by presenting them with this adorable toy.',
    imgsrc:"caterpillar"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
