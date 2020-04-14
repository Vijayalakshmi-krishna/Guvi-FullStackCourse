import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  @Input() ItemData;
  constructor(private activatedroute:ActivatedRoute) { 

    console.log(this.activatedroute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

}
