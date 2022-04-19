import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'reactive';
  regForm:FormGroup;
  constructor(private FormBuilder:FormBuilder){
    this.regForm=FormBuilder.group({
      fname:new FormControl(),
      email:new FormControl(),
      cno:new FormControl()
    });
  }
  regdata(){
    console.log(this.regForm.value)
  }
}
