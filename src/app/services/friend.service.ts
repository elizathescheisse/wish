import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private friendsUrl = 'http://localhost:3000/friends';

  constructor(
    private http: HttpClient
  ) { }

  // GET all friends as Friend[] from mock database
  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.friendsUrl)
      .pipe(
        map(result => {
          return result.map(r => Object.assign(new Friend(r.name, r.birthday), r));
        })
      );
  }

  // GET the selected friend's details as Friend from mock database
  getFriend(id: number): Observable<Friend> {
    return this.http.get<Friend>(`${this.friendsUrl}/${id}`)
      .pipe(
        map(result => Object.assign(new Friend(result.name, result.birthday), result))
      );
  }
}
