import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct, IProductRequest } from '../../models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = [];
  productPayload: IProductRequest = {
    pageSize: 10
  };

  displayedColumns: string[] = ['id', 'title', 'category','actions'];
  dataSource: any;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * `getProducts()`
   * @description to get all products list
   */
  getProducts() {
    this.productsService.getProducts(this.productPayload).subscribe({
      next: (res) => {
        this.products = res;
        this.dataSource = this.products;
      },
      error: () => { }
    })
  }

}

