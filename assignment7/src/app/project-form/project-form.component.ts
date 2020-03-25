import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
   'name': new FormControl('', [Validators.required, this.validateProjectName], this.validateProjectNameAsync),
   'email': new FormControl('', [Validators.required, Validators.email]),
   'status': new FormControl('New')
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  validateProjectName(control: FormControl){
    if(control.value === 'Test'){
      return {'NameNotAllowed': true};
    }
  }

  validateProjectNameAsync(control: FormControl): Promise<any> {
    const result = new Promise<any>((resolve, reject) =>{
      setTimeout(()=>{
        if(control.value === "Async"){
          resolve({"NameNotAllowedAsync": true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return result;
  }
}
