import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

interface Movie {
  title: string;
  category: string;
  posterUrl: string;
  movieUrl: string;
}

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {


  comedyRomance: Movie[] = [
    {
      title: 'McLintock (1963)',
      category: 'class-comedies-romance',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20COMEDIES%20and%20ROMANCE/McLintock-1963-.mp4'
    },
    {
      title: 'Royal Wedding (1951)',
      category: 'class-comedies-romance',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20COMEDIES%20and%20ROMANCE/Royal%20Wedding%20(1951).ia.mp4'
    },
    {
      title: 'Angel And The Badman',
      category: 'class-comedies-romance',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20COMEDIES%20and%20ROMANCE/angel_and_the_badman.mp4'
    },
    {
      title: 'His Girl Friday',
      category: 'class-comedies-romance',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20COMEDIES%20and%20ROMANCE/seqhisgirlfridayfull1d.mp4'
    }
  ];

  horror: Movie[] = [
    {
      title: 'Carnival Of Souls',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/CarnivalOfSouls_512kb.mp4'
    },
    {
      title: 'Dementia',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/Dementia4K.mp4'
    },
    {
      title: 'Last Man On Earth',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/LastManOnEarth4K.ia.mp4'
    },
    {
      title: 'The Little Shop of Horrors',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/The-Little-Shop-of-Horrors.mp4'
    },
    {
      title: 'The Brain That Wouldn\'t Die',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/TheBrainThatWouldntDie-Ext.Ver.1962_512kb.mp4'
    },
    {
      title: 'The Invisible Ghost',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/TheInvisibleGhost.mp4'
    },
    {
      title: 'The Bat',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/The_Bat_24fps_512kb.mp4'
    },
    {
      title: 'The Killer Shrews',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/The_Killer_Shrews.mp4'
    },
    {
      title: 'White Zombie',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/White%20Zombie%20-%20(1932).mp4'
    },
    {
      title: 'Bloodlust',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/bloodlust.mp4'
    },
    {
      title: 'Night of the Living Dead',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/night_of_the_living_dead_512kb.mp4'
    },
    {
      title: 'The Vampire Bat',
      category: 'classic-horror',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CLASSIC%20HORROR/the-vampire-bat-1933.mp4'
    }
  ];

  culturalExperimental: Movie[] = [
    {
      title: 'Army Pictorial San Pietro',
      category: 'cultural-experimental',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CULTURAL%20and%20EXPERIMENTAL/80824%2BArmy%2BPictorial%2BSan%2BPietro.mp4'
    },
    {
      title: 'The Amazing Mr X',
      category: 'cultural-experimental',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CULTURAL%20and%20EXPERIMENTAL/PhantasmagoriaTheater-TheAmazingMrX1948316_512kb.mp4'
    },
    {
      title: 'Reefer Madness (1938)',
      category: 'cultural-experimental',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/CULTURAL%20and%20EXPERIMENTAL/reefer_madness1938.mp4'
    }
  ];

  dramas: Movie[] = [
    {
      title: 'Of Human Bondage (1934)',
      category: 'iconic-dramas',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/ICONIC%20DRAMAS/Of%20Human%20Bondage%20(1934).ia.mp4'
    },
    {
      title: 'One Eyed Jacks (1961)',
      category: 'iconic-dramas',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/ICONIC%20DRAMAS/One-Eyed.Jacks.1961.REMASTERED.1080p.BluRay.x264-DEPTH.mp4'
    },
    {
      title: 'The Great Dictator (1940)',
      category: 'iconic-dramas',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/ICONIC%20DRAMAS/The.Great.Dictator.1940.720p.BrRip.x264.YIFY.mp4'
    },
    {
      title: 'The Boy In The Plastic Bubble',
      category: 'iconic-dramas',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/ICONIC%20DRAMAS/TheBoyInThePlasticBubble.mp4'
    },
    {
      title: 'Meet John Doe',
      category: 'iconic-dramas',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/ICONIC%20DRAMAS/meet_john_doe.mp4'
    }
  ];

  sciFiFantasy: Movie[] = [
    {
      title: 'Hercules Unchained (1959)',
      category: 'sci-fi-fantasy',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SCI-FI%20and%20FANTASY%20ADVENTURES/Hercules%20Unchained%20(1959).mp4'
    },
    {
      title: 'Plan 9 from outer Space',
      category: 'sci-fi-fantasy',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SCI-FI%20and%20FANTASY%20ADVENTURES/Plan%209%20from%20Outer%20Space.mp4'
    },
    {
      title: 'The Fast And The Furious (1955)',
      category: 'sci-fi-fantasy',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SCI-FI%20and%20FANTASY%20ADVENTURES/The%20Fast%20And%20The%20Furious%20(1955).mp4'
    },
    {
      title: 'Gullivers Travels (1939)',
      category: 'sci-fi-fantasy',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SCI-FI%20and%20FANTASY%20ADVENTURES/gullivers_travels1939_512kb.mp4'
    }
  ];

  silent: Movie[] = [
    {
      title: 'A Trip to the Moon',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/A%20Trip%20to%20the%20Moon-George%20M%C3%A9li%C3%A8s.mp4'
    },
    {
      title: 'Metropolis (1927)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/Metropolis_1927_English_Version.mp4'
    },
    {
      title: 'Nosferatu',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/Nosferatu.mp4'
    },
    {
      title: 'Phantom of the Opera (1925)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/Phantom%20of%20the%20Opera%20(Silent%201925).mp4'
    },
    {
      title: 'Sherlock Holmmes Baffled (1903)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/Sherlock_Holmes_Baffled_1903.mp4'
    },
    {
      title: 'The Cabinet of Dr. Caligari (1920)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/The%20Cabinet%20of%20Dr.%20Caligari%20(1920)%201080p.mp4'
    },
    {
      title: 'The Lost World (1925)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/TheLostWorld1925_256.mp4'
    },
    {
      title: 'The General (1926)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/The_General_1926_720p.mp4'
    },
    {
      title: 'The Hunchback of Notre Dame (1923)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/The_Hunchback_of_Notre_Dame_1923.mp4'
    },
    {
      title: 'The Gold Rush (1925)',
      category: 'silent-cinema',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/SILENT%20CINEMA%20CLASSICS/the_gold_rush_1925_1080p.mp4'
    },
  ];

  thrillersNoir: Movie[] = [
    {
      title: 'Big Combo (1955)',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/Big_Combo_1955.mp4'
    },
    {
      title: 'Detour (1945)',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/Detour.1945.1080p.BluRay.x264-%5BYTS.AM%5D.mp4'
    },
    {
      title: 'Kansas City Confidential (1952)',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/Kansas_City_Confidential_1952.mp4'
    },
    {
      title: 'The Lady Vanishes (1938)',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/The%20Lady%20Vanishes%20(1938).m4v'
    },
    {
      title: 'The Man Who Knew Too Much (1934)',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/The%20Man%20Who%20Knew%20Too%20Much%20(1934).ia.mp4'
    },
    {
      title: 'The Stranger (1946)',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/The%20Stranger%20(1946).mp4'
    },
    {
      title: 'The Most Dangerous Game',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/TheMostDangerousGame.mp4'
    },
    {
      title: 'The Terror',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/TheTerror.mp4'
    },
    {
      title: 'Topper Returns',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/Topper_Returns_41.mp4'
    },
    {
      title: 'Scarlet Street Promo',
      category: 'thriller-noir',
      posterUrl: 'assets/default.jpg',
      movieUrl: 'https://storage.googleapis.com/48volts/STREAMING/MOVIES/THRILLERS%20and%20NOIR/yt1s.com%20-%20Scarlet%20Street%20Promo_360p.mp4'
    }
  ];

  visibleItemsCount = 3;

  constructor(public dialog: MatDialog){
    
  }

  openMediaModal(fileUrl: string, fileType: string, title: string) {
    this.dialog.open(ModalComponent, {
      width: '80%',
      height: 'auto',
      maxHeight: '90vh',
      maxWidth: '90vw',
      data: {
        mediaUrl: fileUrl,
        mediaType: fileType,
        title: title,
      },
    });
  }

  scrollRight(gallery: HTMLDivElement) {
    const itemWidth = gallery.firstElementChild?.clientWidth || 0;
    const gap = 20;
    gallery.scrollBy({ left: itemWidth + gap, behavior: 'smooth' });
  }

  scrollLeft(gallery: HTMLDivElement) {
    const itemWidth = gallery.firstElementChild?.clientWidth || 0;
    const gap = 20;
    gallery.scrollBy({ left: -(itemWidth + gap), behavior: 'smooth' });
  }

  canSlide(items: any[]): boolean {
    return items.length > this.visibleItemsCount;
  }

}
