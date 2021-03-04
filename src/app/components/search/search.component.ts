import { Component, Input, OnInit } from '@angular/core';
import { SpotifreeService } from '../../sercives/spotifree.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 artists:any[]=[]
  
  constructor(private spotifree: SpotifreeService) { }
  
  @Input() items:any[]=[]


  buscar(termino : string){
    this.spotifree.getArtists(termino)
      .subscribe((data:any) => {
        this.artists = data;
    })

  }

  ngOnInit(): void {
  }

}
