import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  Product:{
    id: number;
    name:string;
    cost:number;
    quantity:number;
    }

  url:string = "http://localhost:3000";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  //sending get req to /products
  public getProducts(){
    return this.http
      .get(this.url + '/products');
  }

  //sending post req to /products
  public createProduct(Product){
    return this.http
      .post(this.url + '/products', Product);
  }

  //sneding get req to /products/:id
  public getProductById(productId:number){
    return this.http
      .get(this.url + '/products/' + productId)
  }

  //sending put req to /products/:id
  /*public updateProduct(product:Product){

  }*/

  //sending del to /products/:id
  public deleteProductById(productId: number){

  }

}
/*export class Product{
  id: number;
  name:string;
  cost:number;
  quantity:number;
  constructor(values: Object = {}){
    Object.assign(this,values);
  }
}*/
