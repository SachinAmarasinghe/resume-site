import { Component } from '@angular/core';
import jsondata from '../../../assets/data.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: any[] = jsondata.experience;
}
