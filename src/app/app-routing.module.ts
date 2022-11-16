import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductsListComponent } from './components/filtered-products-list/filtered-products-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeeRefreshListComponent } from './components/employee-refresh-list/employee-refresh-list.component';
import { ProductListDetailsComponent } from './components/product-list-details/product-list-details.component';
import { EmployeeListDetailsComponent } from './components/employee-list-details/employee-list-details.component';
import { FilteredProductsListComponentModule } from './components/filtered-products-list/filtered-products-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';
import { EmployeesListServiceModule } from './services/employees-list.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { EmployeeRefreshListComponentModule } from './components/employee-refresh-list/employee-refresh-list.component-module';
import { ProductListDetailsComponentModule } from './components/product-list-details/product-list-details.component-module';
import { EmployeeListDetailsComponentModule } from './components/employee-list-details/employee-list-details.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductsListComponent }, { path: 'sorted-products', component: SortedProductListComponent }, { path: 'employees', component: EmployeesListComponent }, { path: 'refresh-products', component: ProductListComponent }, { path: 'refresh-employees', component: EmployeeRefreshListComponent }, { path: 'products-master-details', component: ProductListDetailsComponent }, { path: 'employees-master-details', component: EmployeeListDetailsComponent }]), FilteredProductsListComponentModule, CategoriesServiceModule, ProductServiceModule, SortedProductListComponentModule, EmployeesListComponentModule, EmployeesListServiceModule, ProductListComponentModule, EmployeeRefreshListComponentModule, ProductListDetailsComponentModule, EmployeeListDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
