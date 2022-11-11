import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesModel } from '../models/employees.model';
import {ApiResponse} from "./api.response";
import {EmployeesResponse} from "./employees.response";
import {map} from "rxjs/operators";

@Injectable()
export class EmployeesListService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeesModel[]> {
    return this._httpClient.get<ApiResponse<EmployeesResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        map((response: ApiResponse<EmployeesResponse[]>) => {
          return response.data.map((employeeResponse: EmployeesResponse) => {
            return {
              id: employeeResponse.id,
              name: employeeResponse.employee_name,
              salary: employeeResponse.employee_salary,
              age: employeeResponse.employee_age,
            }
          });
        })
      )
  }
}
