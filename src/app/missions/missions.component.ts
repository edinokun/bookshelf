import { Component } from '@angular/core';
import { MISSIONS } from '../../assets/mock-missions';
import { Mission } from '../../domain/mission';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent {
  isAMissionSelected: boolean = false;
  selectedMission?: Mission;
  missions = MISSIONS;

  isMissionSelected(mission: Mission) {
    return this.selectedMission == mission;
  }

  onSelect(mission: Mission) {
    if (!this.isAMissionSelected) {
      this.selectedMission = mission;
    } else {
      this.selectedMission = undefined;
    }

    this.isAMissionSelected = !this.isAMissionSelected;
  }
}
