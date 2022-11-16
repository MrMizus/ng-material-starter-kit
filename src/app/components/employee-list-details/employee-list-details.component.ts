import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeesListService } from '../../services/employees-list.service';

@Component({
  selector: 'app-employee-list-details',
  templateUrl: './employee-list-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListDetailsComponent {
  readonly employees$: Observable<EmployeesModel[]> = this._employeesListService.getAll();

  private _selectedEmployeeSubject: Subject<string> = new Subject<string>();
  public selectedEmployee$: Observable<string> = this._selectedEmployeeSubject.asObservable();
  readonly details$: Observable<EmployeesModel> = this.selectedEmployee$.pipe(
    switchMap(data => this._employeesListService.getOne(data)));

  constructor(private _employeesListService: EmployeesListService) {
  }

  selectProduct(id: string): void {
    this._selectedEmployeeSubject.next(id)
  }
}
