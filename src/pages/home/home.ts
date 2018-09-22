import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  product:any;

  Product:{
    id: number;
    name:string;
    cost:number;
    quantity:number;
    }

  constructor(public navCtrl: NavController,
    private restProvider:RestProvider) {

  }

  ionViewWillEnter(){
    this.restProvider.getProducts().subscribe((product) =>{
      console.log(product);
      this.product = product;
    })
    this.Product = {
        id: 223,
        name: 'nickprod2',
        cost: 400,
        quantity: 47
    }
    this.onCreateProduct(this.Product);
  }

  onCreateProduct(Product){
    this.restProvider
      .createProduct(Product)
      .subscribe((newProduct) => {
        this.product = this.product.concat(newProduct);
      })
  }

}
