import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatMenuModule,
  MatTooltipModule,
  MatGridListModule,
  MatInputModule,
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { DockerContainerService } from './containers/docker.container.service';
import { DockerImageService } from './images/docker.image.service';
import { DockerSystemService } from './docker.system.service';

import { ContainersComponent } from './containers/containers.component';
import { ContainerSettingsComponent } from './containers/settings/settings.component';
import { ContainerSettingsGeneralComponent } from './containers/settings/general/general.component';
import { ContainerSettingsPortsComponent } from './containers/settings/ports/ports.component';
import { ContainerSettingsVolumesComponent } from './containers/settings/volumes/volumes.component';
import { ContainerSettingsNetworkComponent } from './containers/settings/network/network.component';
import { ContainerSettingsAdvancedComponent } from './containers/settings/advanced/advanced.component';

import { ContainerInfoComponent } from './containers/info/info.component';
import { ContainerInfoLogsComponent } from './containers/info/logs/logs.component';
import { ContainerInfoProcessesComponent } from './containers/info/processes/processes.component';

import { ImagesComponent } from './images/images.component';
import { ImageSearchResultsComponent } from './images/search-results/search-results.component';

import { ConfigureComponent } from './configure/configure.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    ContainersComponent,
    ImagesComponent,
    ContainerSettingsGeneralComponent,
    ContainerSettingsPortsComponent,
    ContainerSettingsVolumesComponent,
    ContainerSettingsNetworkComponent,
    ContainerSettingsAdvancedComponent,
    ContainerInfoLogsComponent,
    ContainerInfoProcessesComponent,
    ContainerSettingsComponent,
    ImageSearchResultsComponent,
    ConfigureComponent,
    DashboardComponent,
    ContainerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatGridListModule,
    MatTooltipModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [DockerContainerService, DockerImageService, DockerSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
