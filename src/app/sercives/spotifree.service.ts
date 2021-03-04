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
      'Authorization': 'Bearer BQD5Oo-DiiUun_uLWHzcaOOCO4BiPUlS6mt2KETN-ViLmaGkuRyjuMQ1-pUesvLI4XtH2r8FYVNTdBtMpBU'
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
