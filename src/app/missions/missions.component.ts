import { Component } from '@angular/core';
import { MISSIONS } from '../mock-missions';
import { Mission } from '../mission';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent {
  selectedMission?: Mission
  missions = MISSIONS;

  isMissionSelected(mission: Mission) {
    return this.selectedMission == mission;
  }

  onSelect(mission: Mission) {
    this.selectedMission = mission;
  }
}
