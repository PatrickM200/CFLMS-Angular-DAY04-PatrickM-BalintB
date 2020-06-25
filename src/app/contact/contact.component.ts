import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  availableGenders = [
    {
      display: 'None', value: 'none'
    },
    {
      display: 'Women', value: 'women'
    },
    {
      display: 'Men', value: 'men'
    }
  ]

  formData

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return
    }
    console.log(submittedForm)

    this.formData = submittedForm.value
  }

  sendData() {
    this.formData = ''
  }

}
