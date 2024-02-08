import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SanityDataComponent } from './sanity-data/sanity-data.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SanityDataComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
