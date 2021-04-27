import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styles: [
  ]
})
export class NewuserComponent implements OnInit {

  constructor(private myService:UsersService) { }

  ngOnInit(): void {
  }
//   ourValidation = new FormGroup({
//     name: new FormControl("KOKO",Validators.required),
//     age: new FormControl(20,[Validators.min(18), Validators.max(40)])
//   });
//   get Name(){
//     return this.ourValidation.controls.name.valid;
//   }

//   get Age(){
//     return this.ourValidation.controls.age.valid;
//   }
//   Add(name:any,phone:any){
//     console.log(this.ourValidation)
//     // if(this.Phone && this.Name){
//     //   // this.flag=true;
//       console.log("Done")
//   // }
// }
  id:any;
  name:any;
  phone:any;
  email:any;

Add(){
  let user={
    id:this.id,
    name:this.name,
    phone:this.phone,
    email:this.email
  };

  this.myService.AddNewUser(user).subscribe();


}
}
