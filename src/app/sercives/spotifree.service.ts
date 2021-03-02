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
      'Authorization': 'Bearer BQBkq42SkorJd5Yn_v_9nawRNAalnwM5hbGROzpwrtYDYj8m4fVbWJHsiWHf0gQLgUNZODC0UyU1m7AgeVE'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers })
  }
}
