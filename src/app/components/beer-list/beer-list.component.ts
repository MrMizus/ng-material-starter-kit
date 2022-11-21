import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeerListService } from '../../services/beer-list.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent {
  list$: Observable<BeerModel[]> = this._beerListService.getAll();

  constructor(private _beerListService: BeerListService) {
  }

  OnPageChange($event: PageEvent) {
  }
}
