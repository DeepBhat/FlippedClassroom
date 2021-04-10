import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.profileForm.addControl('score', new FormControl(this.route.snapshot.paramMap.get('score')))
  }

}
