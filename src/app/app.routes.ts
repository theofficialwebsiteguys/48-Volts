import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { GamesComponent } from './games/games.component';
import { ShortFilmsComponent } from './short-films/short-films.component';
import { MoviesComponent } from './movies/movies.component';
import { GamePlayingComponent } from './game-playing/game-playing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent, data: { isLanding: true }  },
    { path: 'home', component: HomeComponent, data: { isHome: true } },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'short-films', component: ShortFilmsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'games', component: GamesComponent },
    { path: 'play', component: GamePlayingComponent }
  ];
  