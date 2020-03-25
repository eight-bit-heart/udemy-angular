import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
//   <!-- Add a Form with the following Inputs (and Validators)
//   1) Mail address (should not be empty and should be an email address)
//   2) A Dropdown which allows the user to select from three different Subscriptions ("Basic", "Advanced", "Pro")
//      Set "Advanced" as Default
//   3) A Password field (should not be empty)
//   4) A Submit Button

//   Display a warning message if the Form is invalid AND was touched. Display a warning message below each input if it's invalid.

//   Upon submitting the form, you should simply print the Value of the Form to the Console.
//   Optionally, display it in your template.
// -->
  @ViewChild('infoForm',{static:false}) infoForm: NgForm;

  subscriptionDefault: string = "Advanced";
  subscriptionOptions: string[] = ["Basic", "Advanced", "Pro"];
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.infoForm.value);
  }
}
