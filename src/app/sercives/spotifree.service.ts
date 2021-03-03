import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifreeService {

  constructor(private http: HttpClient) {
  }


  getQuery(query: string ) {
    const url: string = `https://api.spotify.com/v1/${ query }`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC1uKfLykVSN4gvkn9VbvAWV4SVMoTbIepKZ3FDz2CjsZmFv7cQ0D-oNuZXgfy9RcWaJ0YH-guL_HX_mHk'
    })
    return this.http.get(url, { headers })
  }

  getNewReleases() {
  return this.getQuery('browse/new-releases?limit=10').pipe(map((data: any) => data['albums'].items))            
  }

  getArtist(termino: string) {    
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map((data: any) => data['artists'].items))
  }
}
