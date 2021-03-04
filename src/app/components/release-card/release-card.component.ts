import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifreeService } from '../../sercives/spotifree.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html',
  styleUrls: ['./release-card.component.css']
})
  
export class ReleaseCardComponent implements OnInit {

  @Input() items:any[]=[]
  
  constructor( private router: Router) { }

  verArtista(item: any) {
    let artistId;

    if (item.type === 'artist') {
      artistId = item.id
    }
    else {
      artistId = item.artists[0].id
    }

    this.router.navigate(['/artista', artistId])
  }
  ngOnInit(): void {
  }

}
