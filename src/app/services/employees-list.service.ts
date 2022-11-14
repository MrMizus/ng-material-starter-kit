import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeesModel } from '../models/employees.model';
import { ApiResponse } from './api.response';
import { EmployeesResponse } from './employees.response';

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

  delete(id: string): Observable<EmployeesModel> {
    return this._httpClient.delete<EmployeesModel>(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }
}
