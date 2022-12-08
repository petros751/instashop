import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandmarksPage } from './landmarks/landmarks.page';

const routes: Routes = [
  {
    path: "landmarks",
    component: LandmarksPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
