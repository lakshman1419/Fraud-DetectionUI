import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  protected loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    this.submitted = false;
  }


  onSubmit() {
    this.submitted = true;
    this.router.navigateByUrl('/ViewTransaction');
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // this.authService.login(this.loginForm.value)
      // .subscribe((data: any) => {
      //   if(this.authService.isLoggedIn()){
      //     this.router.navigate(['/admin']);
      //   }
      //   console.log(data);
      // });

    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  // constructor()
  // {
  //   this.error = "";
  // }
  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();
}
