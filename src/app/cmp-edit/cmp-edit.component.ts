import { Component, OnInit, Input } from '@angular/core';
import { ReactiveContainerService } from "../reactive-container.service"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cmp-edit',
  templateUrl: './cmp-edit.component.html',
  styleUrls: ['./cmp-edit.component.scss']
})
export class CmpEditComponent implements OnInit {
  data:any
  validateForm: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
  constructor(
    public reactiveContainerService:ReactiveContainerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.reactiveContainerService.updateData.subscribe(instance=>{
      this.updateData(instance)
    })
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }
  updateData(instance){
    this.data = instance.data
    // this.data = this.reactiveContainerService.selectCmpInstance && this.reactiveContainerService.selectCmpInstance.data
    // this.id = this.reactiveContainerService.selectCmpInstance&&this.reactiveContainerService.selectCmpInstance.id
  }

}
