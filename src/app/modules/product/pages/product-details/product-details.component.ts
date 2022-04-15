import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { IProduct } from '../../models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product?: IProduct;
  productId: any;

  constructor(private productsService: ProductsService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id');
      this.getProduct();
    })
  }

  /**
 * `getProduct()`
 * @description to get product by id
 */
  getProduct() {
    this.productsService.getById(this.productId).subscribe({
      next: (res) => {
        this.product = res;
        console.log(this.product);
        
      },
      error: () => { }
    })
  }

}
