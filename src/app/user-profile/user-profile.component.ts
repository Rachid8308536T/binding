import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user = {

    name : 'Doe',
  
    firstName : 'John',
  
    age : 25,
  
    quote : '',
  
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',

    hidden : false, 

  };

  test() {
   if(this.user.hidden === false){
    this.user.hidden = true;
   }else{
    (this.user.hidden === true)
      this.user.hidden = false;
   }
  }
}
