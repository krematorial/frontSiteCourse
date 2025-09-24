import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film';


@Component({
  selector: 'app-film-page',
  standalone: false,
  templateUrl: './film-page.html',
  styleUrl: './film-page.css'
})
export class FilmPage implements OnInit {
  public films: Film[] = []
  public film!: Film

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmService: FilmService
  
  ) {
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')

    this.films = this._filmService.getFullFilms

    this._initFim(Number(id))
  }

  private _initFim(id: number) {
    const findFilm = this.films.find(film => film.id === id)

    if (findFilm) {
      this.film = findFilm
    } else {
      this._router.navigate(['/'])
    }
  }
}
