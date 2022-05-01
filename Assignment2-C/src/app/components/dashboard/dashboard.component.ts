import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList: any = []
  constructor(private commServ:CommonService, private router: Router) { }

  ngOnInit(): void {
    this.userList = [localStorage.getItem("name"), localStorage.getItem("email")] ;
    console.log(this.userList);
    
  }
  logout(){
    localStorage.clear() ;
    this.router.navigate(['login']) ;
  }

}
