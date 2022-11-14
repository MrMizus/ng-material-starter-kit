import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeesListService } from '../../services/employees-list.service';

@Component({
  selector: 'app-employee-refresh-list',
  templateUrl: './employee-refresh-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeRefreshListComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<EmployeesModel[]> = this.refresh$.pipe(
    switchMap(data => this._employeesListService.getAll()));

  constructor(private _employeesListService: EmployeesListService) {
  }

  remove(id: string): void {
    this._employeesListService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
