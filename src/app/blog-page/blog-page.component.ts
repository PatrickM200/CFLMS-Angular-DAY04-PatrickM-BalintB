import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  windowScroll() {

    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

  }

}
