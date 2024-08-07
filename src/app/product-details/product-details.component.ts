import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetails:any[]=[{
    "id":1,
    "name":"Nokia 5,1 Plus",
    "price":8999,
    "description":"Nokia 3GB/32GB",
    "image":"./assets/nokia.jpg",
    "display":false
  },{
    "id":2,
    "name":"Samsung A10s",
    "price":10999,
    "description":"Samsung good quality camera",
    "image":"./assets/samsung.jpg",
    "display":false
  },{
    "id":3,
    "name":"Redmi Mi note 5 pro",
    "price":12999,
    "description":"Redmi note pro with high storage",
    "image":"./assets/redmi.jpg",
    "display":false
  },{
    "id":4,
    "name":"Vivo Y2",
    "price":9500,
    "description":"Vivo Y2 fast processing",
    "image":"./assets/vivo.jpg",
    "display":false
  }];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   let id = this.route.snapshot.paramMap.get('id');
   this.productDetails.forEach((x:any)=>{
        if(x.id==id) {
            x.display=true;
        }
   })
  }

}
