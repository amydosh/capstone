import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public itemForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private productSrv : ItemService,
    private router:Router
    ) {
    this.itemForm = this.formBuilder.group({
      id : [null, [Validators.required]],
      name: ['', [Validators.required]],
      quantity: ['', Validators.required],
      price: [null, Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(itemForm:any) {
    if(itemForm.valid){
      console.log(this.itemForm.value);

      // Write logic to create a product:
      this.productSrv.addProduct(this.itemForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/items");
        console.log("Item was successfully created");
        
      });


    } else{
      console.log("Invalid Form !");
      this.validate(this.itemForm);
    }
  }

  public validate(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  hasError(fieldName:string) {
    let field = this.itemForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.itemForm.controls;
  }

  get id() {
    return this.form['id'];
  }

  get name() {
    return this.form['name'];
  }

  get price() {
    return this.form['price'];
  }

  get quantity() {
    return this.form['quantity'];
  }
}


