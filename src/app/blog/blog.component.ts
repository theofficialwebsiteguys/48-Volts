import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  newestArticles = [
    {
      image: 'https://via.placeholder.com/300x200.png?text=Article+1',
      title: 'None of Your Business - [Teezo Touchdown]',
      author: 'Elliot Martinez',
      date: 'June 28, 2024'
    },
    {
      image: 'https://via.placeholder.com/300x200.png?text=Article+2',
      title: 'Ranking The Greatest TV Shows',
      author: 'Elliot Martinez',
      date: 'June 26, 2024'
    },
    {
      image: 'https://via.placeholder.com/300x200.png?text=Article+3',
      title: 'Chicago Cubs x Lyrical Lemonade Commercial (2024)',
      author: 'Elliot Martinez',
      date: 'June 25, 2024'
    }
  ];

  featuredArticle = {
    title: 'None of Your Business - [Teezo Touchdown]',
    description: 'The brand new music video for "None of Your Business"...',
    image: 'https://via.placeholder.com/600x400.png?text=Featured+Article'
  };

  latestInterviews = [
    {
      image: 'https://via.placeholder.com/300x200.png?text=Interview+1',
      title: 'Audrey Nuna: The Lemonade Stand Interview',
      author: 'Elliot Martinez',
      date: 'May 6, 2024'
    },
    {
      image: 'https://via.placeholder.com/300x200.png?text=Interview+2',
      title: 'Mick Jenkins: The Lemonade Stand Interview',
      author: 'Elliot Martinez',
      date: 'March 5, 2024'
    },
    {
      image: 'https://via.placeholder.com/300x200.png?text=Interview+3',
      title: 'Draft Day: The Lemonade Stand Interview',
      author: 'Elliot Martinez',
      date: 'December 12, 2023'
    }
  ];


}
