import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgProfile: string = "../../../assets/profileImg.jpg";
  imgHi: string =  "../../../assets/hi.JPG";
  showImg: string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.showImg = this.imgProfile;
  }

  // Byta bild vid hover på bilden
  changeImg() {
    if (this.showImg == this.imgProfile) {
      this.showImg = this.imgHi;
    } else {
      this.showImg = this.imgProfile
    }
  }

}
