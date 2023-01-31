import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this._httpClient.get(`https://my-json-server.typicode.com/Shkene/fake-api/posts`);
  }

  getComments(): Observable<any> {
    return this._httpClient.get(`https://my-json-server.typicode.com/Shkene/fake-api/comments`);
  }

  getPost(id: number): Observable<any> {
    return this._httpClient.get(`https://my-json-server.typicode.com/Shkene/fake-api/posts/${id}`);
  }
}
