import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _currentUser: Subject<User> = new Subject<User>();
  constructor() {}

  get currentUser(): Observable<User> {
    return this._currentUser.asObservable();
  }

  setCurrentUser(user: User) {
    this._currentUser.next(user);
  }
}
