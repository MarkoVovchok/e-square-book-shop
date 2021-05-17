import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookApiResponse } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class NetService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches books from google API by provided search query
   *
   * @memberof NetService
   */
  fetchBooks(query: string): Observable<BookApiResponse> {
    return this.http.get<BookApiResponse>(
      //added maxResults to show that i slice an array up to 20 as in requirements. but it's better to cut to 20 here
      `https://www.googleapis.com/books/v1/volumes?q=${query}}&maxResults=40&key=${environment.google_API_key}`
    );
  }
}
