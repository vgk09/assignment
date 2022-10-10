import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})

export class Q3Component implements OnInit {
phNum:number
ngOnInit(): void {
}
  productForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.productForm = this.fb.group({
      numbers: this.fb.array([]) ,
    });
  }

  numbers() : FormArray {
    return this.productForm.get("numbers") as FormArray
  }

  newNumbers(): FormGroup {
    return this.fb.group({
      numbers: '',
      })
  }

  addNumbers() {
    this.numbers().push(this.newNumbers());
  }

  removeNumbers(i:number) {
    this.numbers().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
