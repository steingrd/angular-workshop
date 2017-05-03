import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { IMission } from "../../models";

@Component({
  selector: 'app-mission-summary',
  templateUrl: './mission-summary.component.html',
  styleUrls: ['./mission-summary.component.scss']
})
export class MissionSummaryComponent implements OnInit {

  @Input()
  mission: IMission;

  @Output()
  missionRemove: EventEmitter<IMission> = new EventEmitter<IMission>();

  editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.missionRemove.emit(this.mission);
  }

  onToggleEdit() {
    this.editing = !this.editing;
  }

  onSummaryChanged(value: string) {
    this.mission.summary = value;
  }

}
