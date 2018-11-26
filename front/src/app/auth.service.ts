import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public agent = {
    id: 1,
    nom: 'Jean',
    prenom: 'Dupont'
  };
  constructor() { }
}
