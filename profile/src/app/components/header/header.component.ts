import { Component, OnInit } from '@angular/core';
// import { fab fa-linkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
