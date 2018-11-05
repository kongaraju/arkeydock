import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainersComponent } from './containers/containers.component';
import { ImagesComponent } from './images/images.component';
import { ConfigureComponent } from './configure/configure.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { path: '', redirectTo: '/containers', pathMatch: 'full' },
  { path: 'containers', component: ContainersComponent },
  { path: 'container/:id', component: ContainersComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'configure', component: ConfigureComponent },
  { path: 'system', component: SystemComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
