import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "education", component: EducationComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "work-experience", component: WorkExperienceComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
