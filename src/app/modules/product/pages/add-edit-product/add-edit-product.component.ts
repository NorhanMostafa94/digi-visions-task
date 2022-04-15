import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  form!: FormGroup;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.initiateForm();
  }

  /**
   * `addProduct()` 
   * @description add product
   */
  initiateForm() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  /**
   * `initiateForm()` 
   * @description initiate form
   */
  addProduct(){
    const formValues = this.form.value;
    this.productsService.add(formValues).subscribe({
      next: (res)=>{
        console.log(res);
      },
      error: (err)=>{}
    })
  }

}
