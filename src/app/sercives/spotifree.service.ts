import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifreeService {

  constructor(private http:HttpClient) {
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBz83aW-aVZLrJkeCBbv380-_YKYkzuKEuwZgQ81YqKFoFUcsPt7Dr8VLyqm3LzhuKA7hRUAYwig0KTyVs'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers })
  }
}
