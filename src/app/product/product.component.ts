import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any[]=[
    {
    "id":1,
    "name":"Nokia 5,1 Plus",
    "price":8999
  },{
    "id":2,
    "name":"Samsung A10s",
    "price":10999
  },{
    "id":3,
    "name":"Redmi Mi note 5 pro",
    "price":12999
  },{
    "id":4,
    "name":"Vivo Y2",
    "price":9500
  }];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails(id:any) {
      this.router.navigate(['productdetails',id])
  }

}
