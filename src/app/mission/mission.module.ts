import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionService } from './mission.service';
import { MissionSummaryComponent } from './mission-summary/mission-summary.component';
import { MissionViewerComponent } from './mission-viewer/mission-viewer.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ 
    path: 'missions', children: [
      { path: '', component: MissionListComponent},
      { path: ':missionId', component: MissionViewerComponent}
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MissionListComponent,
    MissionSummaryComponent,
    MissionViewerComponent
  ],
  exports: [
    MissionListComponent
  ],
  providers: [
    MissionService
  ]
})
export class MissionModule { }
