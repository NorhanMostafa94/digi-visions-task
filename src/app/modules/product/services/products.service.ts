import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { EApiUrl } from 'src/app/shared/enums';
import { IProduct, IProductRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpService) { }

  getProducts(payload: IProductRequest) {
    const url = EApiUrl.PRODUCT.LIST;
    return this.http.get(`${url}?limit=${payload.pageSize}`).pipe(take(1));
  }

  getById(id: string) {
    const url = EApiUrl.PRODUCT.LIST;
    return this.http.get(`${url}/${id}`).pipe(take(1));
  }

  add(product: IProduct) {
    const url = EApiUrl.PRODUCT.LIST;
    return this.http.post(url,product).pipe(take(1));
  }
}
