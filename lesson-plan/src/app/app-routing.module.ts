import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestQuestionsComponent},
  {path: 'test/pretest', component: TestQuestionsComponent},
  {path: 'lesson', component: LessonComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
