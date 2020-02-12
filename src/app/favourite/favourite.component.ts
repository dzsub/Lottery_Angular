import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Fav } from '../fav';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  faStar = faStar;
  faTrash = faTrash;

  constructor(public connectionService: ConnectionService) { }

  ngOnInit() {
    this.getAllFavourites();
  }

  getAllFavourites(): void {
    this.connectionService.getAllFavourites()
      .subscribe(favourites => this.connectionService.favourites = favourites);
  }

  delete(favourite: Fav) {
    this.connectionService.deleteFavourite(favourite).subscribe();
  }

}
