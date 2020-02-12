import { Component, OnInit } from '@angular/core';
import { GeneratingNumberService } from './generating-number.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ConnectionService } from '../connection.service';
import { Fav } from '../fav';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-generating',
  templateUrl: './generating.component.html',
  styleUrls: ['./generating.component.css']
})
export class GeneratingComponent implements OnInit {
  faStar = faStar;

  constructor(public generatingNumberService: GeneratingNumberService,
              private connectionService: ConnectionService) { }

  ngOnInit() {
  }

  add(nums: number[]): void {
    this.connectionService.addFavourite({ nums } as Fav).subscribe(favNums => this.connectionService.favourites.push(favNums));
  }
  
}
