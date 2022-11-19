import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({ email: new FormControl(), roleId: new FormControl() });
  readonly role$: Observable<RoleModel[]> = this._roleService.getAll();

  constructor(private _userService: UserService, private _roleService: RoleService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._userService.create({
      email: registerForm.get('email')?.value,
      roleId: registerForm.get('roleId')?.value
    }).subscribe();
  }
}
