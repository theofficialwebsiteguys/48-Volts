import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

interface Movie {
  title: string;
  description: string;
  posterUrl: string;
}

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  movies: Movie[] = [
    {
      title: 'Movie 1',
      description: 'Description of Movie 1',
      posterUrl: 'https://via.placeholder.com/600x400?text=Movie+1'
    },
    {
      title: 'Movie 2',
      description: 'Description of Movie 2',
      posterUrl: 'https://via.placeholder.com/600x400?text=Movie+2'
    },
    {
      title: 'Movie 3',
      description: 'Description of Movie 3',
      posterUrl: 'https://via.placeholder.com/600x400?text=Movie+3'
    },
    {
      title: 'Movie 4',
      description: 'Description of Movie 4',
      posterUrl: 'https://via.placeholder.com/600x400?text=Movie+4'
    },
    {
      title: 'Movie 5',
      description: 'Description of Movie 5',
      posterUrl: 'https://via.placeholder.com/600x400?text=Movie+5'
    },
    {
      title: 'Movie 6',
      description: 'Description of Movie 6',
      posterUrl: 'https://via.placeholder.com/600x400?text=Movie+6'
    }
  ];
  groupedMovies: Movie[][] = [];

  ngOnInit() {
    this.groupMovies();
  }

  groupMovies() {
    for (let i = 0; i < this.movies.length; i += 3) {
      this.groupedMovies.push(this.movies.slice(i, i + 3));
    }
  }

  
}
