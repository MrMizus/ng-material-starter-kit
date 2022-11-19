import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {RoleModel} from '../../models/role.model';
import {RoleService} from '../../services/role.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register-form-radio',
  templateUrl: './register-form-radio.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormRadioComponent {
  readonly registerForm: FormGroup = new FormGroup({email: new FormControl(), roleId: new FormControl()});
  readonly role$: Observable<RoleModel[]> = this._roleService.getAll();

  constructor(private _roleService: RoleService, private _userService: UserService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._userService.create({
      email: registerForm.get('email')?.value,
      roleId: registerForm.get('roleId')?.value
    }).subscribe();
  }
}
