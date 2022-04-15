import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { EApiUrl } from 'src/app/shared/enums';
import { IProductRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpService) { }

  getProducts(payload: IProductRequest) {
    const url = EApiUrl.PRODUCT.LIST;
    return this.http.get(`${url}?limit=${payload.pageSize}`).pipe(take(1));
  }
}
