import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputArrayService } from '../../services/input-array.service';
import{InputClass} from '../../classes/inputClass';

@Component({
  selector: 'blogInputForm',
  templateUrl: './blog-input-form.component.html',
  styleUrls: ['./blog-input-form.component.css']
})
export class BlogInputFormComponent implements OnInit {

  // Creamos el formulario en código
  blogForm: FormGroup;
  inputCreated: InputClass;

  constructor(private inputsArray: InputArrayService) {}

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title: new FormControl('',[
        Validators.required
      ]),
      content: new FormControl('',[
        Validators.required
      ]),
      creationDate: new FormControl('',[
        Validators.required
      ]),
      createInputBtn: new FormControl('Create New Input')
    })
  }

  createInput(title: string, content: string, creationDate: string){
    this.inputCreated = this.inputsArray.createNewIput(title, content, creationDate);
    this.inputsArray.addInput(this.inputCreated);
  }

}
