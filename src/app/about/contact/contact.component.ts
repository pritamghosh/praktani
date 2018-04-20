import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isOtherSubjectVisible = false;
  attachment : File;
  subjectList: string[] = [
    'Please Select a Subject...',
    'Membership Query',
    'Membership Card',
    'Signin/Signup Issue',
    'Event Query',
    'Other - Subject is not Listed'
  ];
  constructor(private http:Http) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required,this.required.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(this.subjectList[0], [Validators.required, this.invalidSubject.bind(this)]),
      'otherSubject': new FormControl(null, [this.isOtherSubjectValid.bind(this)]),
      'message': new FormControl(null, [Validators.required,,this.required.bind(this)]),
      'attachment': new FormControl(null)
    });
    this.contactForm.valueChanges.subscribe(
      (value) => {
        console.log(this.contactForm.value);
        
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

  fileChange(event:any){
    let file = event.target.files[0]; // <--- File Object for future use.
    this.contactForm.controls['attachment'].setValue(file ? file : '');
    this.attachment=event.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
     fileReader.onload = function(e) {
		 //	console.log(fileReader.result);
			

		 }
    
  }
  onSubmit(){
    console.log(this.contactForm.value);
    
  //   var data = new Blob(["gh"], { type: 'text/plain;charset=utf-8' });
  //   saveAs(data, 'text.txt');
  //   this.http.post('assets/test.txt','dd').subscribe(date=>{
  //     console.log(data);
  //   })
  //   this.http.get('assets/test.txt').subscribe(data => {
  //     console.log(data.text());
  // })
  }


}
