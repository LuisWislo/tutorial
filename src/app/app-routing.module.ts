import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AnotherComponent } from './another/another.component';

const routes: Routes = [
  { path: '', component: TutorialComponent},
  { path: 'another', component: AnotherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
