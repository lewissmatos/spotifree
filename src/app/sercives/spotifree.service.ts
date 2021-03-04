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
      'Authorization': 'Bearer BQAA61vg0RaLZHNZJ3aPG5TMTOoqiqzSvujBIPSi7A0Jwa7u6DPq0SaK5cFMVbifxUXqVVinPKvxSaqzafE'
    })
    return this.http.get(url, { headers })
  }

  getNewReleases() {
  return this.getQuery('browse/new-releases?limit=10').pipe(map((data: any) => data['albums'].items))            
  }

  getArtists(termino: string) {    
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map((data: any) => data['artists'].items))
  }
  getArtist(id: string) {    
    return this.getQuery(`artists/${id}`)
  }
  getTops(id: string) {    
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data['tracks']))
  }
}
