import { Component, Input } from '@angular/core';
import { Mission } from '../mission';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent {
  @Input() mission?: Mission;
}
