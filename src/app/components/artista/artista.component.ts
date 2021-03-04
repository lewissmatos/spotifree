import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifreeService } from '../../sercives/spotifree.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {


  artist:any = {}

  tops:any[] = []

  constructor( private router: ActivatedRoute, private spotifree: SpotifreeService) {
    
    this.router.params.subscribe(params => {
      
    this.getArtist(params['id'])
    this.getTops(params['id'])
    })
     

  
  }


  getArtist(id: string){
    this.spotifree.getArtist(id)
      .subscribe(data => {
        this.artist = data
      })
  }

  getTops(id: string) {
    this.spotifree.getTops(id)
      .subscribe(data => {
        console.log(data);
        this.tops = data
      })
  }

  ngOnInit(): void {
  }

}
