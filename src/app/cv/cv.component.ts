import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  name: string = "Roman Portianko";
  position: string = "Front-end Developer";
  phone: string = "+380 99 999 99 99";
  email: string = "example@email.com";
  address: string = "Ukraine, Kyiv";
  experience: string[] = ["2018-2020. Front-end Developer. SoftServe", "2016-2018. Front-end Developer. EPAM"];
  skills: string[] = ["HTML", "CSS", "JavaScript", "Angular", "React", "Vue"];
  education: string = "NAU. Software Engineering";
  languages: string[] = ["English: B2", "Ukrainian: native", "Russian: native"];
  photo: string = "https://www.w3schools.com/howto/img_avatar.png";
}
