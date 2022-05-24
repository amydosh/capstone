import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public state:any;
  public itemForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private productSrv : ItemService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.itemForm = this.formBuilder.group({
      id : [null, [Validators.required]],
      name: ['', [Validators.required]],
      description:['', Validators.required],
      price:[null, Validators.required]
    });

  }

  ngOnInit(): void {
    this.state = this.activatedRoute.paramMap.pipe(()=>window.history.state);
    console.log(this.state);
    this.itemForm.patchValue(this.state);
    
  }

  public onSubmit(itemForm:any) {
    if(itemForm.valid){
      console.log(this.itemForm.value);

      // Write logic to create a product:
      this.productSrv.updateProduct(this.itemForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl('/items');
        console.log("Item was successfully updated");
        
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


