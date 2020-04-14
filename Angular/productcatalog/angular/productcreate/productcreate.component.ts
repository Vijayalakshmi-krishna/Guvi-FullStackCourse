import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
productsForm;
  constructor() { 
this.productsForm=new FormGroup({
  'productName':new FormControl('',Validators.required),
  'productId':new FormControl('',Validators.required),
  'categoryName':new FormControl('toys',Validators.required),
  'description':new FormControl('',Validators.required),
  'price':new FormControl('',Validators.required),
  'quantity':new FormControl('',Validators.required)

})

  }

  ngOnInit(): void {
  }

  sendData()
  {
    if(this.productsForm.valid)
    {
      console.log(this.productsForm.value);
    }
    
  }

}
