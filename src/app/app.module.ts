import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

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
  MatTableModule,
  MatDialogModule,
  MatExpansionModule,
  MatSlideToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { DockerContainerService } from './containers/docker.container.service';
import { DockerImageService } from './images/docker.image.service';
import { DockerSystemService } from './system/docker.system.service';

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
import { MessageBoxComponent } from './dialogs/message-box/message-box.component';
import { ScrollDownDirective } from './directives/scroll-down.directive';
import { SystemComponent } from './system/system.component';



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
    ContainerInfoComponent,
    MessageBoxComponent,
    ScrollDownDirective,
    SystemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    FlexLayoutModule,
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
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    AppRoutingModule
  ],
  providers: [DockerContainerService, DockerImageService, DockerSystemService],
  bootstrap: [AppComponent],
  entryComponents:[MessageBoxComponent]
})
export class AppModule { }
