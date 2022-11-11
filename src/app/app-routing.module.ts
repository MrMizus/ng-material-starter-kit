import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductsListComponent } from './components/filtered-products-list/filtered-products-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { FilteredProductsListComponentModule } from './components/filtered-products-list/filtered-products-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';
import { EmployeesListServiceModule } from './services/employees-list.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductsListComponent }, { path: 'sorted-products', component: SortedProductListComponent }, { path: 'employees', component: EmployeesListComponent }]), FilteredProductsListComponentModule, CategoriesServiceModule, ProductServiceModule, SortedProductListComponentModule, EmployeesListComponentModule, EmployeesListServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
