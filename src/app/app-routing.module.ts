import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ProjectpageComponent} from './projectpage/projectpage.component';
import {SolvingpageComponent} from './solvingpage/solvingpage.component';
import {ContactpageComponent} from './contactpage/contactpage.component';

const routes: Routes = [
  {path: "", component: HomepageComponent, pathMatch: "full"},
  {path: "projects", component: ProjectpageComponent},
  {path: "problemsolving", component: SolvingpageComponent},
  {path: "contact", component: ContactpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
