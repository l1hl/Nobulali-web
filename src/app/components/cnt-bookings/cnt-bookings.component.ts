import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cnt-bookings',
  templateUrl: './cnt-bookings.component.html',
  styleUrls: ['./cnt-bookings.component.scss']
})
export class CntBookingsComponent implements OnInit {
  contactForm: FormGroup
  messageHeader: string
  messageLast: string
  userName: string



  showDialog: boolean = false;
  constructor(private api: ApiService, public formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  //Open Notice Dialog
  toggleDialog() {
    const body = document.querySelector("body")
    if (this.showDialog) {
      body.style.overflow = "auto"
      this.showDialog = false;
    } else {
      this.showDialog = true;
      body.style.overflow = "hidden"
    }
  }

  async sendMessage() {
    //this.showLoader = true

    const body = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message
    }

    const result = Object.assign({}, body);

    await this.api.postHttp('mail/contact', result).then((data: any) => {
      if (data.success) {
        // alert(data)
        //console.log(data)
        //this.showLoader = false
        //Swal.fire('', data.success.message, 'success')
        this.messageHeader = "Thank You"
        this.messageLast = "for reaching out to us, we will be in contact shortly."
        this.userName = data.success.name

        this.toggleDialog()
      } else {
        //this.showLoader = false
        //Swal.fire('', data.error.message, 'error')
        //alert(data)
        console.log(data)
        this.toggleDialog()

      }
    }, error => {
      //this.showLoader = false
      //Swal.fire('', error.success.message, 'error')
    });

  }


}
