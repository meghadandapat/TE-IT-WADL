import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: any = FormGroup;
  id: any = Math.floor(Math.random()) ;
  constructor(private fb: FormBuilder, private router: Router, private commServ:CommonService) {}

  ngOnInit(): void {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  registerSubmit(data: any) {
    console.log(data);
    let dataToPass = {
      name: data.name, email:data.email ,
      id:this.id++ 
    }

    this.commServ.addUser(dataToPass).subscribe((data:any)=>{
      console.log(data);
      alert("User registered")
    })
  }

  gotoLogin() {
    this.router.navigate(['']);
  }


}
