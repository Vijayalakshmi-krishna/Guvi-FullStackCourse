import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricingtable';
  card_free={
    card_type:'Free',
    price:'$0',
  options:[{name :'Single User',disable:false},
  {name:'5GB Storage',disable:false},
  {name:'Unlimited Public Projects',disable:false},
  {name:'Community Access',disable:false},
  {name:'Unlimited Private Projects',disable:true},
  {name:'Dedicated Phone Support',disable:true},
  {name:'Free Subdomain',disable:true},
  {name:'Monthly Status Reports',disable:true},
]

};
  card_plus={
    'card_type':'Plus',
  'price':'$9',
  options:[{name :'5 Users',disable:false,isStrong:true},
  {name:'50GB Storage',disable:false},
  {name:'Unlimited Public Projects',disable:false},
  {name:'Community Access',disable:false},
  {name:'Unlimited Private Projects',disable:false},
  {name:'Dedicated Phone Support',disable:false},
  {name:'Free Subdomain',disable:false},
  {name:'Monthly Status Reports',disable:true},
]
};
  card_pro={
    'card_type':'Pro',
    'price':'$49',
    options:[{name :'Unlimited Users',disable:false,isStrong:true},
    {name:'150GB Storage',disable:false},
    {name:'Unlimited Public Projects',disable:false},
    {name:'Community Access',disable:false},
    {name:'Unlimited Private Projects',disable:false},
    {name:'Dedicated Phone Support',disable:false},
    {name:'Free Subdomain',disable:false},
    {name:'Monthly Status Reports',disable:false},
  ]
  };
}
