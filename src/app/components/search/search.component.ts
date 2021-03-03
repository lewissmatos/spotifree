import { Component, OnInit } from '@angular/core';
import { SpotifreeService } from '../../sercives/spotifree.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 artists:any[]=[]
  
  constructor(private spotifree: SpotifreeService) { }
  


  buscar(termino : string){
    console.log(termino)
    this.spotifree.getArtist(termino)
      .subscribe((data:any) => {
        this.artists = data;
    })

  }

  ngOnInit(): void {
  }

}
