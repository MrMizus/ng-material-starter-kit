import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeesListService } from '../../services/employees-list.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  public orders: Observable<string[]> = of(['asc', 'desc']);
  private _rangeSubject: BehaviorSubject<string> = new BehaviorSubject<string>("range");
  public range$: Observable<string> = this._rangeSubject.asObservable();
  public ranges: Observable<string[]> = of(['all', '0-20', '21-30', '31-40', '41-50', '51-100']);
  readonly employees$: Observable<EmployeesModel[]> = combineLatest([
    this._employeesListService.getAll(),
    this.order$,
    this.range$
  ]).pipe(
    map(([employees, order, range]: [EmployeesModel[], string, string]) => {
      return employees.sort((a, b) => {
        if(a.salary > b.salary) return order === 'asc' ? 1 : -1;
        if(a.salary < b.salary) return order === "asc" ? -1 : 1;
        return 0;
      }).filter((employee) => {
        if (range === "0-20" && parseInt(employee.age) <= 20) {
          return employee
        }else if (range === "21-30" && parseInt(employee.age) <= 30 && parseInt(employee.age) >= 21){
          return employee
        }else if (range === "31-40" && parseInt(employee.age) <= 40 && parseInt(employee.age) >= 31){
          return employee
        }else if (range === "41-50" && parseInt(employee.age) <= 50 && parseInt(employee.age) >= 41){
          return employee
        }else if (range === "51-100" && parseInt(employee.age) <= 100 && parseInt(employee.age) >= 51){
          return employee
        }else if (range === "all") {
          return employee
        }else return
      })
    })
  )

  constructor(private _employeesListService: EmployeesListService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
  selectRange(range: string): void {
    this._rangeSubject.next(range);
  }
}
