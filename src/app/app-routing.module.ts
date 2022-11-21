import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductsListComponent } from './components/filtered-products-list/filtered-products-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeeRefreshListComponent } from './components/employee-refresh-list/employee-refresh-list.component';
import { CategoriesLoadingComponent } from './components/categories-loading/categories-loading.component';
import { CryptoLoadingComponent } from './components/crypto-loading/crypto-loading.component';
import { HolidaysLoadingComponent } from './components/holidays-loading/holidays-loading.component';
import { CategoriesLoadingCheckComponent } from './components/categories-loading-check/categories-loading-check.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterFormRadioComponent } from './components/register-form-radio/register-form-radio.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { FilteredProductsListComponentModule } from './components/filtered-products-list/filtered-products-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';
import { EmployeesListServiceModule } from './services/employees-list.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { EmployeeRefreshListComponentModule } from './components/employee-refresh-list/employee-refresh-list.component-module';
import { CategoriesLoadingComponentModule } from './components/categories-loading/categories-loading.component-module';
import { CryptoLoadingComponentModule } from './components/crypto-loading/crypto-loading.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidaysLoadingComponentModule } from './components/holidays-loading/holidays-loading.component-module';
import { HolidaysLoadingServiceModule } from './services/holidays-loading.service-module';
import { CategoriesLoadingCheckComponentModule } from './components/categories-loading-check/categories-loading-check.component-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UserServiceModule } from './services/user.service-module';
import { RoleServiceModule } from './services/role.service-module';
import { RegisterFormRadioComponentModule } from './components/register-form-radio/register-form-radio.component-module';
import { BeerListComponentModule } from './components/beer-list/beer-list.component-module';
import { BeerListServiceModule } from './services/beer-list.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductsListComponent }, { path: 'sorted-products', component: SortedProductListComponent }, { path: 'employees', component: EmployeesListComponent }, { path: 'refresh-products', component: ProductListComponent }, { path: 'refresh-employees', component: EmployeeRefreshListComponent }, { path: 'categories', component: CategoriesLoadingComponent }, { path: 'crypto', component: CryptoLoadingComponent }, { path: 'public-holidays', component: HolidaysLoadingComponent }, { path: 'checkbox-categories', component: CategoriesLoadingCheckComponent }, { path: 'create-user-with-role', component: RegisterFormComponent }, { path: 'create-user-with-radio', component: RegisterFormRadioComponent }, { path: 'beers-with-pagination', component: BeerListComponent }]), FilteredProductsListComponentModule, CategoriesServiceModule, ProductServiceModule, SortedProductListComponentModule, EmployeesListComponentModule, EmployeesListServiceModule, ProductListComponentModule, EmployeeRefreshListComponentModule, CategoriesLoadingComponentModule, CryptoLoadingComponentModule, CryptoServiceModule, HolidaysLoadingComponentModule, HolidaysLoadingServiceModule, CategoriesLoadingCheckComponentModule, RegisterFormComponentModule, UserServiceModule, RoleServiceModule, RegisterFormRadioComponentModule, BeerListComponentModule, BeerListServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
