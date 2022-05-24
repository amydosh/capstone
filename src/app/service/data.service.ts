import { Injectable } from "@angular/core";
import { QuizzesComponent } from "../component/quizzes/quizzes.component";
import { Item } from "../model/item.model";
import { Product } from "../model/product.model";
import { Quiz } from "../model/quizzes.model";

@Injectable()
export class DataService{
    public products:Product[] = [
        {
            id:101,
            name:"apple macbook",
            description:"2022 apple macbook air pink",
            price:1005.21
        },
        {
            id:102,
            name:"dell book",
            description:"2022 dell book laptop black",
            price:957.21
        },
        {
            id:103,
            name:"lenovo slimbook",
            description:"2022 lenovo slimbook silver",
            price:845.21
        },
        {
            id:104,
            name:"samsung chromebook",
            description:"2022 samsung chromebook white",
            price:305.21
        }
    ]
    public items:Item[] = [
        {
            id:101,
            img:"",
            name:"Banana",
            price:1.00,
            quantity:49
          },
          {
            id:102,
            img:"",
            name:"Apple",
            price:0.89,
            quantity:112
          },
          {
            id:103,
            img:"",
            name:"Pear",
            price:0.97,
            quantity:84
          },
          {
            id:104,
            img:"",
            name:"Plum",
            price:0.54,
            quantity:117
          },
          {
            id:105,
            img:"",
            name:"Peach",
            price:0.93,
            quantity:72
          },
          {
            id:106,
            img:"",
            name:"Milk",
            price:3.12,
            quantity:32
          },
          {
            id:107,
            img:"",
            name:"Eggs",
            price:2.28,
            quantity:108
          },
          {
            id:108,
            img:"",
            name:"Bread",
            price:2.99,
            quantity:76
          },
          {
            id:109,
            img:"",
            name:"Butter",
            price:2.57,
            quantity:26
          },
          {
            id:110,
            img:"",
            name:"Banana",
            price:1.00,
            quantity:49
          },
          {
            id:111,
            img:"",
            name:"Banana",
            price:1.00,
            quantity:49
          },
          {
            id:112,
            img:"",
            name:"Banana",
            price:1.00,
            quantity:49
          }
    ]
}

