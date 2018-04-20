import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  genders = ['Male', "Female"];
  degreeList = ['Secondary', 'Higher Secondary'];
  departmentList = ['Science', 'Arts', 'Commerce'];
  occupationList = ['Govt. Employee', 'Private Sector Employee', 'Self Employeed', 'Other']
  picture:File;
  doucument:File;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.required.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('Male', [Validators.required]),
      'dob': new FormControl(null, [Validators.required]),
      'contact': new FormControl(null, [Validators.required, Validators.pattern("[0-9-]{8,}")]),
      'addresses': new FormGroup({
        'permanentAddress': new FormGroup({
          'line1': new FormControl(null, [this.required.bind(this)]),
          'line2': new FormControl(null),
          'city': new FormControl(null, [this.required.bind(this)]),
          'state': new FormControl(null, [this.required.bind(this)]),
          'zipCode': new FormControl(null, [Validators.pattern("[0-9]{6}")])
        }),
        'currentAddress': new FormGroup({
          'line1': new FormControl(null, [this.required.bind(this)]),
          'line2': new FormControl(null),
          'city': new FormControl(null, [this.required.bind(this)]),
          'state': new FormControl(null, [this.required.bind(this)]),
          'zipCode': new FormControl(null, [Validators.pattern("[0-9]{6}")])
        }),
        'sameAsPermanent': new FormControl(false)
      }),
      'school': new FormGroup({
        'joiningYear': new FormControl('1900', [Validators.pattern("[0-9]{4}")]),
        'passingYear': new FormControl(2000, [Validators.pattern("[0-9]{4}")]),
        'degree': new FormControl('Higher Secondary', [Validators.required,]),
        'department': new FormControl('Science', [Validators.required,]),
      }),
      'proffesion': new FormGroup({
        'occupation': new FormControl(this.occupationList[0]),
        'profile': new FormControl(null),
        'description': new FormControl(null)
      }),
      'attachments': new FormGroup({
        'picture': new FormControl(),
        'document': new FormControl(null, this.required.bind(this))
      })
      
    });


    this.registrationForm.valueChanges.subscribe(
      (value) => {
      //  console.log(this.registrationForm);


      });


  }

  uploadFle(event: any,formControlName:string){
    if (event.target.files[0] != null) {
      this.registrationForm.get('attachments').get(formControlName).setValue(event.target.files[0].name);
  } else {
    this.registrationForm.get('attachments').get(formControlName).setValue(null);
  }
  }


  uploadDocument(event: any) {
    
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.registrationForm.get('attachments').get('document').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      }
        console.log(this.registrationForm);
        
    }
    else{
      this.registrationForm.get('attachments').get('picture').setValue(null);
    }


  }

  uploadPicture(event: any) {
    
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.registrationForm.get('attachments').get('picture').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      }
        
    }
    else{
      this.registrationForm.get('attachments').get('picture').setValue('');
    }


  }

  onChangeDegree(event) {
    if (event.target.value == 'Higher Secondary') {
      this.registrationForm.get('school').get('department').enable();
    }
    else {
      this.registrationForm.get('school').get('department').disable();
    }
  }

  isSameAsPermAddress(event) {
    let currentAddress = this.registrationForm.get('addresses').get('currentAddress');

    if (event.target.checked) {
      currentAddress.patchValue(this.registrationForm.get('addresses').get('permanentAddress').value);
      currentAddress.disable();
    }
    else {

      currentAddress.enable();
      currentAddress.reset();
    }
  }

  required(control: FormControl): { [s: string]: boolean } {
    if (control.value == null || control.value.trim() === '') {
      return { 'required': true };
    }
    return null;
  }

  validateCurrentAddress(control: FormControl): { [s: string]: boolean } {
    if (this.registrationForm != null && !this.registrationForm.get('addresses').get('sameAsPermanent').value && (control.value == null || control.value.trim() === '')) {
      return { 'required': true };
    }
    return null;
  }

  validateCurrentAddressZip(control: FormControl): { [s: string]: boolean } {
    if (this.registrationForm != null && !this.registrationForm.get('addresses').get('sameAsPermanent').value && !/([0-9]{6})/.test(control.value)) {
      return { 'required': true };
    }
    return null;
  }
}
