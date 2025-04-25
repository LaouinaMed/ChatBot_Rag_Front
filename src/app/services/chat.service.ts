
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8080/chat/ask';

  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<string> {
    const params = new HttpParams().set('question', question);
    return this.http.get(this.apiUrl, { params, responseType: 'text' });
  }
}
