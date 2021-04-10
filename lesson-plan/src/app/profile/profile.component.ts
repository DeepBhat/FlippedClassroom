import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = new FormGroup({
    age: new FormControl('', Validators.required),
    knowledge: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
    experiment: new FormControl(environment.isExperimentGroup),
    production: new FormControl(environment.production),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
