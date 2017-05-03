import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionService } from './mission.service';
import { MissionSummaryComponent } from './mission-summary/mission-summary.component';
import { MissionViewerComponent } from './mission-viewer/mission-viewer.component';

@NgModule({
  imports: [
    CommonModule
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
