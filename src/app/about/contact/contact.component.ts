import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isOtherSubjectVisible = false;
  subjectList: string[] = [
    'Please Select a Subject...',
    'Membership Query',
    'Membership Card',
    'Signin/Signup Issue',
    'Event Query',
    'Other - Subject is not Listed'
  ];
  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required,this.required.bind(this)]),
      'email': new FormControl('a@a.c', [Validators.required, Validators.email]),
      'subject': new FormControl(this.subjectList[0], [Validators.required, this.invalidSubject.bind(this)]),
      'otherSubject': new FormControl(null, [this.isOtherSubjectValid.bind(this)]),
      'message': new FormControl(null, [Validators.required,,this.required.bind(this)])
    });
    this.contactForm.valueChanges.subscribe(
      (value) => {
        this.isOtherSubjectVisible = this.contactForm.get('subject').value == 'Other - Subject is not Listed';
      });
  }

  required(control: FormControl): { [s: string]: boolean } {
    if (control.value == null || control.value.trim() === '') {
      return { 'required': true };
    }
    return null;
  }

  isOtherSubjectValid(control: FormControl): { [s: string]: boolean } {
    if (this.isOtherSubjectVisible && (control.value == null || control.value.trim() === '')) {
      return { 'isInvalidSubject': true };
    }
    return null;
  }

  invalidSubject(control: FormControl): { [s: string]: boolean } {
    if (this.subjectList.indexOf(control.value) == 0) {
      return { 'isInvalidSubject': true };
    }
    else if (this.subjectList.indexOf(control.value) == this.subjectList.length - 1 && (this.contactForm.get('otherSubject').value == null || this.contactForm.get('otherSubject').value.trim() === '')) {
      return { 'isInvalidSubject': true };
    }
    return null;
  }

}
