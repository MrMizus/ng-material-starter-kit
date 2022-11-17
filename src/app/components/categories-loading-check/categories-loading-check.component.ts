import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-categories-loading-check',
  templateUrl: './categories-loading-check.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesLoadingCheckComponent {
  readonly list$: Observable<string[]> = this._categoriesService.getAll().pipe(
    map( () => [])
  );

  constructor(private _categoriesService: CategoriesService) {
  }
}
