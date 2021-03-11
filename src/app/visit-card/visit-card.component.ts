import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.css']
})
export class VisitCardComponent implements OnInit {

  name = 'benlalam';
  firstName = 'issam';
  job = 'web developer';
  image ='issam.jpg';
  citation = 'tant que ya de vie ya de lespoire';

  entete = 'Voila un exemple entete';
  description = 'developemen web front with angular';
  followers = '214';
  following ='378';
  projects = '25';

  constructor() { }

  ngOnInit(): void {
  }

}
