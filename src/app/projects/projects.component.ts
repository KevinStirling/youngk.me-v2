import { Component, OnInit } from '@angular/core';
import { Project } from './project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        Image: '../assets/project-images/nycbike.png',
        Name: 'NYC Bike',
        Description: 'NYC Bike is a tool to view the status of Citi bike stations in NYC, built using d3 and SVG. ' +
        'Built initially to learn the basics of d3, but there are plans to expand on this concept in the future!',
        Link: 'https://kevinstirling.github.io/NewYorkCitiBikeTracker/'
      },
      {
        Image: '../assets/project-images/meta-jersey.png',
        Name: 'Meta-Jersey',
        Description: 'Meta-Jersey provides a tool for journalists that can aid them in understanding what is causing ' +
        'shifts in the New Jersey census. ' +
        'This project was built during the Hack Jersey 2.0, with a team made up of both coders and journalists, ' +
        'where we won the "Best Overall" award.',
        Link: 'http://pranavrele.com/meta-jersey-hosting/'
      },
      {
        Image: '../assets/project-images/omnia.png',
        Name: 'Omnia',
        Description: 'Omnia Labs is a small group of friends who met while attending Montclair State University,'+
        'who decided to create apps and programs, both for practice, and fun.',
        Link: 'https://omnialabs.io/'
      }
    ];
  }

  ngOnInit() {
  }

}
