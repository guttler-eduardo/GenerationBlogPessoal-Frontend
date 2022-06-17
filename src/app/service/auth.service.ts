import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>
    ('https://generation-blogpessoal-backend.herokuapp.com/usuarios/logar', userLogin)
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>
    ('https://generation-blogpessoal-backend.herokuapp.com/usuarios/cadastrar', user) 
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>
    ('https://generation-blogpessoal-backend.herokuapp.com/usuarios', user) 
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`https://generation-blogpessoal-backend.herokuapp.com/usuarios/${id}`)
  }

  loggedin() {
    let ok: boolean = false

    if(environment.token != '') {
      ok = true
    }

    return ok
  }
}
