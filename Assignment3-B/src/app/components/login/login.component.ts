import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  users:any = [] ;
  constructor(private fb: FormBuilder, private router: Router, private commserv: CommonService) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
 
    this.commserv.getUser().subscribe((data:any)=>{
      this.users = data ;
      
    })
  }

 
  loginSubmit(data:any){
    let flag = 1 ;
    console.log(data)
    if(data.name){
      this.users.forEach((item:any) => {
        if(item.name === data.name && item.email === data.email){          
          localStorage.setItem("isLoggedIn","true");
          localStorage.setItem("name",data.name);
          localStorage.setItem("email",data.email);
          flag = 1 ;
          this.router.navigate(['home']);
          
        }
        else{
          localStorage.clear();
          flag = 0 ;
        }
        
      });
    }

    if(flag === 0){
      alert("Invalid") ;
    }
  }

  gotoSignup() {
    this.router.navigate(['register']);
  }
}
