import { Component,OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  //variable array for holding semester and displaying radio button
  Semesters:string[]=['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth'];

  //varable holding Default gender
  DefaultGender="Female";
  
/*receive local referenedirectlyby using viewchildassign it in  signupForm:oftype(NgForm) and */
@ViewChild('f') signupForm:NgForm;
  
OnSubmit(){
console.log(this.signupForm);
}
  /*secondway receive local from method form ie: (ngSubmit)="OnSubmit(f)" #f="ngForm"
  OnSubmit(form:NgForm){
console.log(form);
  }*/
  ngOnInit(): void {
    
  }
}
