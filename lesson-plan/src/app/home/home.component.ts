import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route = ""
  isExperiment = (Math.random() < 0.5)

  constructor() { }

  ngOnInit(): void {

    if (this.isExperiment)
      this.route = "/test/pretest"
    else
      this.route = "/lesson"
  }

}
