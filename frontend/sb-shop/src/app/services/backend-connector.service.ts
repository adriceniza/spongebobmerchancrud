import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { spongebobclothesmodel } from '../models/spongebobclothesmodel';
import { spongebobbasket } from '../models/spongebobbasket';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class BackendConnectorService {
  endpointclothes: string = 'http://localhost:8080/SpongebobClothes';
  endpointbasket: string = 'http://localhost:8080/SpongebobBasket';

  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<spongebobclothesmodel[]> {
    return this.httpClient.get<spongebobclothesmodel[]>(this.endpointclothes);
  }
  getByIdProducts(id: number): Observable<spongebobclothesmodel> {
    return this.httpClient.get<spongebobclothesmodel>(
      this.endpointclothes + '/' + id
    );
  }
  addItemToProducts(
    item: spongebobclothesmodel
  ): Observable<spongebobclothesmodel> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append('id', item.id.toString());
    bodyEncoded.append('model', item.model);
    bodyEncoded.append('prize', item.prize.toString());
    bodyEncoded.append('img', item.img);
    const body = bodyEncoded.toString();
    return this.httpClient.post<spongebobclothesmodel>(
      this.endpointclothes,
      body,
      httpOptionsUsingUrlEncoded
    );
  }
  getAllBasket(): Observable<spongebobbasket[]> {
    return this.httpClient.get<spongebobbasket[]>(this.endpointbasket);
  }
  getByIdBasket(id: number): Observable<spongebobbasket> {
    return this.httpClient.get<spongebobbasket>(this.endpointbasket + '/' + id);
  }
  addItemToBasket(item: spongebobbasket): Observable<spongebobbasket> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append('id', item.id.toString());
    bodyEncoded.append('model', item.model);
    bodyEncoded.append('prize', item.prize.toString());
    bodyEncoded.append('size', item.size);
    bodyEncoded.append('img', item.img);
    bodyEncoded.append('units', item.units.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.post<spongebobbasket>(
      this.endpointbasket,
      body,
      httpOptionsUsingUrlEncoded
    );
  }

  updateItem(item: spongebobbasket): Observable<spongebobbasket> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append('id', item.id.toString());
    bodyEncoded.append('model', item.model);
    bodyEncoded.append('prize', item.prize.toString());
    bodyEncoded.append('size', item.size);
    bodyEncoded.append('img', item.img);
    bodyEncoded.append('units', item.units.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.put<spongebobbasket>(
      this.endpointbasket + '/' + item.id,
      body,
      httpOptionsUsingUrlEncoded
    );
  }

  deleteItemFromBasket(id: number): Observable<spongebobbasket> {
    return this.httpClient.delete<spongebobbasket>(
      this.endpointbasket + '/' + id
    );
  }
}
