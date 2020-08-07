import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../models/movie';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-years',
  templateUrl: './movie-years.component.html',
  styleUrls: ['./movie-years.component.css']
})
export class MovieYearsComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const year = this.route.snapshot.paramMap.get('year');
    this.movies = this.http.getMoviesFromYear(year);
  }

}
