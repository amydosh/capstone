import { ItemsComponent } from './items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './../../service/item.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DataService } from 'src/app/service/data.service';



@NgModule({
  declarations: [
    ItemsComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService, ItemService
  ]
})
export class ItemsModule { }
