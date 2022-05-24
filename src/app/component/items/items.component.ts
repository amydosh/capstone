import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // Declare your variable:
  public items:any;

  // 1a. Inject the data service to load the data:
  // constructor(private dataSrv:DataService) { }

  // 1b. Use your Product Service --> springboot
  constructor(
    private productSrv:ItemService,
    private router:Router
    ){}

  // 2. Load the data oninit
  ngOnInit(): void {
    
    // For 1a:
    // this.products = this.dataSrv.products;

    // For 1b:
    this.items = this.productSrv.getProducts().subscribe(data=>{
      console.log(data);
      // Put your data into the products array which is used to render the cards in your html
      this.items = data;
    }, errors=>{
      console.log(errors);
    });

    // For both:
    console.log(this.items);
    
  }

  onEdit(item:any){
    console.log("Edit triggered for : "+item);
    this.router.navigateByUrl('/items/update', {state: item})
  }


  onDelete(id:number){
    console.log("Delete triggered for : "+id);
    this.productSrv.deleteProduct(id).subscribe(res=>{
      console.log("Product has been successfully deleted");
      
    })
  }

}



