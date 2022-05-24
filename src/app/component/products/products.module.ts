import { ItemsComponent } from './../items/items.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { DataService } from 'src/app/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from 'src/app/service/product.service';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[DataService, ProductService]
})
export class ProductsModule { }
