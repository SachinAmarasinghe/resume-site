import { Component } from '@angular/core';
import jsondata from '../../../assets/data.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educations: any[] = jsondata.education;
}
