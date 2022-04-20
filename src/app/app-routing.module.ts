import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhRepoComponent } from './Components/gh-repo/gh-repo.component';
import { GhUserComponent } from './Components/gh-user/gh-user.component';

const routes: Routes = [
  { path: 'gh-user', component: GhUserComponent},
  { path: 'gh-repo', component: GhRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
