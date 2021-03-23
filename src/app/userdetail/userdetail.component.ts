import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  show: Boolean = false;
  formGroup: any;
  user: any;

  constructor(private fb:FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.formGroup = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'dob': [null, Validators.required]
    });
  }

  onSubmit(post: any) {
    this.show = !this.show;
    this.user = post;
    this.formGroup.reset();
    this.formGroup.disable();
  }

  onReset(str) {
    this.show = !this.show;
    this.formGroup.enable();
    this.formGroup.reset();
  }

  getErrorFristName() {
    return this.formGroup.get('firstName').hasError('required') ? 'First Name is required':'';
  }

  getErrorLastName() {
    return this.formGroup.get('lastName').hasError('required') ? 'Last Name is required':'';
  }

  getErrorDob() {
    return this.formGroup.get('dob').hasError('required') ? 'Date of Birth is required':'';
  }

}
