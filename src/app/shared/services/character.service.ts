import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query='',pages=1){
    return this.http.get<Character[]>(
      `${environment.baseURLAPI}/name=${query}&page=${pages}`
    );

  }
getDetails(id:number){
  return this.http.get<Character>(`${environment.baseURLAPI}/${id}`);

}

}
