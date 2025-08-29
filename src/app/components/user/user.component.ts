import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserDto } from '../../models/user.model';
import {MatError, MatFormField} from '@angular/material/form-field';
import {MatCheckbox} from '@angular/material/checkbox';
import {SectorComponent} from '../sector/sector.component';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatCheckbox,
    MatError,
    SectorComponent,
    MatInput,
    MatButton,
    NgIf,
    MatLabel,
    MatCard,
    MatCardHeader,
    MatCardTitle,
  ],
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      id: [null],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      consent: [false, Validators.requiredTrue],
      sectorIds: [[], Validators.required]
    });

    this.userService.getUser().subscribe({
      next: (user: UserDto) => this.userForm.patchValue(user),
      error: () => console.log("No user in session yet")
    });
  }


  save() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user: UserDto = this.userForm.value;
    console.log("Saving user", user);

    if (user.id) {
      this.userService.updateUser(user).subscribe(updated => {
        console.log("User updated", updated);
        this.userForm.patchValue(updated);
      });
    } else {
      this.userService.addUser(user).subscribe(created => {
        console.log("User created", created);
        this.userForm.patchValue(created);
      });
    }
  }
}
