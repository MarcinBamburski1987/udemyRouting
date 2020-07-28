import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css'],
})
export class MoviesInCategoryComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    //ten kod powoduje pewien problem ze ścieżką routingu, gdy przekazuje się przez param
     // const category = this.route.snapshot.paramMap.get('category');
     // this.movies = this.http.getMoviesFromCategory(category);

    //ten kod to naprawia, tutaj musi być subskrypcja dodana przez pipe async - observable
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.http.getMoviesFromCategory(params.get('category'))
      )
    );

  }
}
