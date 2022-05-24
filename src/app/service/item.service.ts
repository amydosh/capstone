import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // 1. Create http client dependency
  constructor(private httpClient: HttpClient) { }

  // 2. Define webservice URI
  private url:string = "http://localhost:3000/items";

  // Get all products
  public getProducts(){
    return this.httpClient.get(this.url);
  }

  // Get one product
  // public getProduct(id:number){
  //   this.httpClient.get(this.url);
  // }

  // Add product
  public addProduct(item:any){
    return this.httpClient.post(this.url,item);
  }

  // Update product
  public updateProduct(item:any){
    return this.httpClient.put(`${this.url}/${item.id}`,item);
  }

  // Delete product
  public deleteProduct(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
