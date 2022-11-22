import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  constructor(private httpClient: HttpClient) {}
}
