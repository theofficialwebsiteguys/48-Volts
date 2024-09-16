import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SlideshowModalComponent } from '../slideshow-modal/slideshow-modal.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],  // Fixed typo from styleUrl to styleUrls
  animations: [
    trigger('sectionAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.05)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class PortfolioComponent {
  title = 'portfolio-page';
  state = 'inactive';
  currentFile: any = null;
  isPaused = true;

  @ViewChildren('audioPlayer') audioPlayers!: QueryList<ElementRef<HTMLAudioElement>>;

  @ViewChild('beatProductionGallery', { static: false }) beatProductionGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('musicVocalEngineering', { static: false }) musicVocalEngineering!: ElementRef<HTMLDivElement>;
  
  @ViewChild('entertainmentGallery', { static: false }) entertainmentGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('lyricGallery', { static: false }) lyricGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('musicGallery', { static: false }) musicGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('musicVisualizerGallery', { static: false }) musicVisualizerGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('scenicVisualizerGallery', { static: false }) scenicVisualizerGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('stopMotionGallery', { static: false }) stopMotionGallery!: ElementRef<HTMLDivElement>;

  @ViewChild('cartoonGallery', { static: false }) cartoonGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('coverArtGallery', { static: false }) coverArtGallery!: ElementRef<HTMLDivElement>;
  

  @ViewChild('autoGallery', { static: false }) autoGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('basketballGallery', { static: false }) basketballGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('dogsGallery', { static: false }) dogsGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('fashionGallery', { static: false }) fashionGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('headshotsGallery', { static: false }) headshotsGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('musicPhotoGallery', { static: false }) musicPhotoGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('natureGallery', { static: false }) natureGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('neonoirGallery', { static: false }) neonoirGallery!: ElementRef<HTMLDivElement>;
  @ViewChild('trainsGallery', { static: false }) trainsGallery!: ElementRef<HTMLDivElement>;
  categories = [
    {
      name: 'Audio',
      additionalIcon: 'fa-solid fa-music',  // Music icon overlay
      subcategories: ['Podcasts', 'Music', 'Sound Effects']
    },
    {
      name: 'GFX',
      additionalIcon: 'fa-solid fa-palette',  // Palette icon overlay
      subcategories: ['Logos', 'Flyers', 'Banners']
    },
    {
      name: 'Photography',
      additionalIcon: 'fa-solid fa-camera',  // Camera icon overlay
      subcategories: ['Auto', 'Basketball', 'Dogs', 'Etc']
    },
    {
      name: 'Video',
      additionalIcon: 'fa-solid fa-video',  // Video camera icon overlay
      subcategories: ['Movies', 'Short Films', 'Commercials']
    }
  ];

  beatProductionAudioFiles = [
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/Beat%20Production/Michael%20Dorfman_Final%20Project%20-%205_1_19%2C%203.06%20PM.m4a',
      title: 'Beat Sample 1',
      artist: 'Artist 1'
    }
  ];
  
  musicVocalEngineeringAudioFiles = [
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/1-%20Fugazi_mixdown.mp3',
      title: 'Vocal Track 1',
      artist: 'Singer 1'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/10%20-%20All%20On%20Me_mixdown.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/11%20-%20drip%20drop%20fin%20-%2012_4_18%2C%201.49%20PM.m4a',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/12%20-%20Mood_mixdown.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/13%20-%20Body_mixdown.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/14%20-%20ride_mixdown.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/2-%20right%20thing%2C%20wrong%20time_mixdown.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/3%20-%20Break%20Me_mixdown.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/4%20-%20Nvr%20The%20Way_mixdown%202.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/5%20-%20Copy%20of%20wentworth%20full%20song-%2011_13_20%2C%204.59%20PM.m4a',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/6%20-%20Et%20Ta%20Toao_mixdown%20final.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/7%20-%20insane%20..m4a',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/8%20-%20MAN%20i%20TRSUT_final.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/4%20-%20.MP3/MUSIC%20VOCAL%20ENGINEERING/9%20-%20999_test%204mixdown.mp3',
      title: 'Vocal Track 2',
      artist: 'Singer 2'
    }
  ];


  entertainmentVideoFiles: { url: string, thumbnail: string, title: string}[] = [ 
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/ENTERTAINMENT/2%20-%2048%20LATE%20PILOT%20PROMO.mp4',
      thumbnail: 'assets/thumbnails/MP4_ENTERTAINMENT_2 - 48 LATE.png',
      title: 'title'
    },
  ];

  lyricVideoFiles: { url: string, thumbnail: string, title: string }[] = [ 
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/LYRIC%20VIDEOS/1%20-%20JIM%20CARREY%20T4.mp4',
      thumbnail: 'assets/thumbnails/JIM CARR.png',
      title: 'title'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/LYRIC%20VIDEOS/2%20-%20N8%20-%20Tryna%20Get%20a%20Chain%20Lyric%20Video.mp4',
      thumbnail: 'assets/thumbnails/Try.png',
      title: 'title'
    },
  ];

  musicVideoFiles: { url: string, thumbnail: string, title: string }[] = [ 
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/MUSIC%20VIDEOS/wentworth%20final.mp4',
      thumbnail: 'assets/thumbnails/wentworth fi.png',
      title: 'title'
    },
  ];

  musicVisualizerVideoFiles: { url: string, thumbnail: string, title: string }[] = [ 
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/MUSIC%20VISUALIZERS/1-%20Moveee_1.mp4',
      thumbnail: 'assets/thumbnails/Move.png',
      title: 'title'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/MUSIC%20VISUALIZERS/2%20-%20wentworth.index.mp4',
      thumbnail: 'assets/thumbnails/wen.png',
      title: 'title'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/MUSIC%20VISUALIZERS/3%20-%20Mile%24%20-%20Blessed%20(prod.%20AMUELSAY).mp4',
      thumbnail: 'assets/thumbnails/Mil.png',
      title: 'title'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/MUSIC%20VISUALIZERS/4%20-%20insane.index.mp4',
      thumbnail: 'assets/thumbnails/ins.png',
      title: 'title'
    },
  ];

  scenicVisualizerVideoFiles: { url: string, thumbnail: string, title: string  }[] = [ 
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/SCENIC%20VISUALIZERS/1%20-%20Enchanting%20Rainy%20Woods_%20Sunlit%20Showers%20and%20Nature%E2%80%99s%20Symphony%20Visualizer.mp4',
      thumbnail: 'assets/thumbnails/En.png',
      title: 'title'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/SCENIC%20VISUALIZERS/3%20-%20Futuristic%20City%20Visualizer%20_%20Ambient%20Soundscapes%20for%20Relaxation%20_%2048min.mp4',
      thumbnail: 'assets/thumbnails/Fu.png',
      title: 'title'
    },
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/SCENIC%20VISUALIZERS/4%20-%20Immersive%20Visualizer%20Club%20Vibes%20Experience.mp4',
      thumbnail: 'assets/thumbnails/Im.png',
      title: 'title'
    },
  ];

  stopMotionVideoFiles: { url: string, thumbnail: string, title: string  }[] = [ 
    {
      url: 'https://storage.googleapis.com/48volts/Portfolio/D%3A/2%20-%20.MP4/STOP%20MOTION/1.mp4',
      thumbnail: 'assets/thumbnails/MOTION_1.mp4.png',
      title: 'title'
    }
  ];

  
  cartoonGfxFiles: string[] = [ 
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/3%20-%20.GFX/CARTOON/animated%20me.png',
   ];

  coverArtGfxFiles: string[] = [
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/3%20-%20.GFX/COVER%20ART/1%20-%20jayeazywhat%20cover.jpg',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/3%20-%20.GFX/COVER%20ART/2%20-%20MILES%20BILL.jpg',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/3%20-%20.GFX/COVER%20ART/3%20-%20jayycardo%20cover.jpg',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/3%20-%20.GFX/COVER%20ART/4%20-%20DANIEL%20BALUCH%20COVER%20ART.jpg',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/3%20-%20.GFX/COVER%20ART/5%20-%20eli%20bandzo%20cover.jpg',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/3%20-%20.GFX/COVER%20ART/6%20-%20JAHMI%20COVER.jpg'
   ];



  autoPhotographyFiles: string[] = [
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/1%20-%20IMG_1178.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/10%20-%20IMG_1184.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/11%20-%20IMG_1707.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/2%20-%20IMG_1170.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/3-%20IMG_1163.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/4%20-%20IMG_1179.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/5%20-%20IMG_1177.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/6%20-%20IMG_1176.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/7%20-%20IMG_1168.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/8%20-%20IMG_1181.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/AUTO/9%20-%20IMG_1172.JPG',
   ];

  basketballPhotographyFiles: string[] = [ 
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/1%20-%20IMG_2305.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/10%20-%20IMG_2275.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/11%20-%20IMG_2293.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/12%20-%20IMG_2312.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/2%20-%20IMG_1609.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/3%20-%20IMG_2322.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/4%20-%20IMG_1606.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/5%20-%20IMG_2227.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/6%20-%20IMG_2327.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/7%20-%20IMG_2323.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/8%20-%20IMG_2331.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/BASKETBALL/9%20-%20IMG_1628.JPG',
  ];

  dogsPhotographyFiles: string[] = [
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/1%20-%20IMG_1644.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/2%20-%20IMG_1643.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/3%20-%20IMG_1645.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/4%20-%20IMG_1654.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/5%20-%20IMG_1655.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/6%20-%20IMG_1658.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/IMG_1066.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/IMG_1075.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/IMG_1077.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/DOGS/IMG_1084.JPG',
   ];

  fashionPhotographyFiles: string[] = [ 
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/1%20-%20IMG_4316.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/10%20-%20IMG_4509.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/11%20-%20IMG_4264.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/12%20-%20IMG_4537.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/13%20-%20IMG_4231.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/14%20-%20IMG_4484.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/15%20-%20IMG_4183.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/16%20-%20IMG_4201.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/17%20-%20IMG_4282.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/18%20-%20IMG_4245.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/19%20-%20IMG_4250.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/2%20-%20IMG_4502.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/20%20-%20IMG_4187.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/21%20-%20IMG_4304.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/22%20-%20IMG_4324.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/23%20-%20IMG_4284.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/24%20-%20IMG_4216.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/25%20-%20IMG_4229.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/26%20-%20IMG_4326.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/27%20-%20IMG_4159.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/28%20-%20IMG_4293.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/29%20-%20IMG_4214.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/3%20-%20IMG_4268.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/30%20-%20IMG_4297.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/31%20-%20IMG_4218.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/32%20-%20IMG_4323.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/33%20-%20IMG_4185.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/34%20-%20IMG_4162.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/35%20-%20IMG_4217.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/4%20-%20IMG_4485.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/5%20-%20IMG_4286.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/6%20-%20IMG_4560.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/7%20-%20IMG_4223.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/8%20-%20IMG_4528.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/FASHION/9%20-%20IMG_4289.JPG',
  ];

  headshotsPhotographyFiles: string[] = [ 
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/HEADSHOTS/1%20-%20IMG_3723.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/HEADSHOTS/2%20-%20IMG_4458.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/HEADSHOTS/3%20-%20IMG_4033.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/HEADSHOTS/4%20-%20IMG_3763.JPG',
  ];
  
  musicPhotographyFiles: string[] = [ 
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/MUSIC/1-%20IMG_4115.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/MUSIC/2%20-%20IMG_4111.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/MUSIC/3%20-%20IMG_4114.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/MUSIC/4%20-%20IMG_4104.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/MUSIC/5%20-%20IMG_4128.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/MUSIC/6%20-%20IMG_4113.JPG',
  ];

  naturePhotographyFiles: string[] = [
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/1%20-%20IMG_0785.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/10%20-%20IMG_1701.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/11%20-%20IMG_1688.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/12%20-%20IMG_1694.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/13%20-%20IMG_1696.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/14%20-%20IMG_1680.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/15%20-%20IMG_1673.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/16%20-%20IMG_1684.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/17%20-%20IMG_1685.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/18%20-%20IMG_1672.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/19%20-%20IMG_1656.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/2%20-%20IMG_4441.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/20%20-%20IMG_1657.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/21%20-%20IMG_1682.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/22%20-%20IMG_1674.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/23%20-%20IMG_1691.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/24%20-%20IMG_1699.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/25%20-%20IMG_1686.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/26%20-%20IMG_1704.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/27%20-%20IMG_1703.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/28%20-%20IMG_1687.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/29%20-%20IMG_1705.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/3%20-%20IMG_1137.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/30%20-%20IMG_1700.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/31%20-%20IMG_1695.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/32%20-%20IMG_1116.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/33%20-%20IMG_1642.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/34%20-%20IMG_1647.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/35%20-%20IMG_1646.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/36%20-%20IMG_1671.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/37%20-%20IMG_1648.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/38%20-IMG_1676.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/39%20-%20IMG_1649.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/4%20-%20IMG_4453.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/40%20-%20IMG_1659.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/41%20-%20IMG_1652.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/5%20-%20IMG_1698.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/6%20-%20IMG_1134.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/6%20-%20IMG_1677.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/7%20-%20IMG_1678.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/7%20-%20IMG_4445.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/8%20-%20IMG_1156.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/8%20-%20IMG_1697.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/9%20-%20IMG_1706.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/9%20-IMG_4153.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/IMG_0899.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/IMG_1514.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/IMG_1652.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/IMG_1675.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NATURE/IMG_1700.JPG',
   ];

  neonoirPhotographyFiles: string[] = [ 
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/1%20-%20IMG_1482.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/2%20-%20IMG_1679.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/3%20-%20IMG_1660.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/4%20-%20IMG_1453.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/5%20-%20IMG_1661.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/6%20-%20IMG_1670.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1364.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1367.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1455.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1457.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1459.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1460.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1461.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1466.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1469.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1475.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1476.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1477.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1534.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/NEO-NOIR/IMG_1555.JPG',
  ];

  trainsPhotographyFiles: string[] = [ 
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/TRAINS/1%20-%20IMG_1526.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/TRAINS/2%20-%20IMG_1500.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/TRAINS/3%20-%20IMG_1504.JPG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/TRAINS/4%20-%20IMG_1662.PNG',
    'https://storage.googleapis.com/48volts/Portfolio/D%3A/1%20-%20.PNG/TRAINS/5%20-%20IMG_1496.JPG'
  ];


  selectedCategory: any = null;
  visibleItemsCount = 5;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.calculateVisibleItems();
    window.addEventListener('resize', this.calculateVisibleItems.bind(this));
  }

  ngAfterViewInit() {
    this.calculateVisibleItems();
  }

  

  togglePlay(file: any, index: number) {
    const player = this.getPlayerForFile(index);
  
    if (!player) return;
  
    if (this.currentFile !== file) {
      // Pause all other players before playing the new one
      this.pauseAllPlayers();
      this.playAudio(file, player);
    } else {
      // Toggle play/pause for the same file
      this.isPaused ? this.playAudio(file, player) : this.pauseAudio(player);
    }
  }
  
  playAudio(file: any, player: HTMLAudioElement) {
    player.play();
    this.currentFile = file;
    this.isPaused = false;
  }
  
  pauseAudio(player: HTMLAudioElement) {
    player.pause();
    this.isPaused = true;
  }
  
  getPlayerForFile(index: number): HTMLAudioElement | null {
    const player = document.getElementById('audioPlayer' + index) as HTMLAudioElement;
    return player ? player : null;
  }
  
  pauseAllPlayers() {
    this.audioPlayers.forEach(player => {
      player.nativeElement.pause();
    });
    this.isPaused = true;
    this.currentFile = null;
  }
  

  selectCategory(category: any): void {
    this.selectedCategory = category;
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

  calculateVisibleItems() {
    const galleryContainer = document.querySelector('.gallery');
    if (galleryContainer) {
      const containerWidth = galleryContainer.clientWidth;
      let itemWidth = 200;

      if (window.innerWidth <= 767) {
        itemWidth = 150;
      }

      this.visibleItemsCount = Math.floor(containerWidth / itemWidth);
    }
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

 // Method to show the video and hide the thumbnail on hover
 showVideo(event: MouseEvent): void {
  const galleryItem = event.target as HTMLElement;
  const videoElement = galleryItem.querySelector('video') as HTMLVideoElement;
  const thumbnailElement = galleryItem.querySelector('img') as HTMLImageElement;

  if (videoElement && thumbnailElement) {
    thumbnailElement.style.display = 'none'; // Hide the thumbnail
    videoElement.style.display = 'block'; // Show the video
    videoElement.play(); // Start playing the video
  }
}

playVideo(event: any) {
  const video = event.target.querySelector('.video-element');
  if (video) {
    video.play();
  }
}

pauseVideo(event: any) {
  const video = event.target.querySelector('.video-element');
  if (video) {
    video.pause();
    video.currentTime = 0; // Reset video to the start
  }
}

openSlideshowModal(items: any[], itemType: string): void {
  this.dialog.open(SlideshowModalComponent, {
    width: '80%',
    height: 'auto',
    data: { items, itemType }  // Pass items and type (audio, video, image)
  });
}

// Method to hide the video and show the thumbnail when hover ends
hideVideo(event: MouseEvent): void {
  const galleryItem = event.target as HTMLElement;
  const videoElement = galleryItem.querySelector('video') as HTMLVideoElement;
  const thumbnailElement = galleryItem.querySelector('img') as HTMLImageElement;

  if (videoElement && thumbnailElement) {
    videoElement.pause(); // Stop the video
    videoElement.currentTime = 0; // Reset the video to the start
    videoElement.style.display = 'none'; // Hide the video
    thumbnailElement.style.display = 'block'; // Show the thumbnail
  }
}
}

