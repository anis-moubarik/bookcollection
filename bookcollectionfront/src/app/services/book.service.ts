import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  protected baseUrl = environment.apiUrl;

  private subject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }


  public getBooks(queryParams?: Map<string, number>): Observable<any>;
  public getBooks( ...args: Map<string, number>[]): Observable<any> {
    let queryParams = new HttpParams();
    args.forEach((a) => {
      queryParams = queryParams.append('limit', a.get('limit') ?? 20);
      queryParams = queryParams.append('offset', a.get('offset') ?? 0);
    });
    return this.httpClient.get(this.baseUrl, {params: queryParams});
  }

  public saveBook(values: object) {
    return this.httpClient.post(this.baseUrl, values);
  }

  sendClickEvent(){
    this.subject.next('');
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
