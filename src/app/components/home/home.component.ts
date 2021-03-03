import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifreeService } from '../../sercives/spotifree.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  nuevasCanciones: any[]=[]

  constructor(private http: HttpClient, private spotifree: SpotifreeService) {
    this.spotifree.getNewReleases()
      .subscribe((data:any) => {
        this.nuevasCanciones = data
      }
    )
  }



  ngOnInit(): void {
  }

}
