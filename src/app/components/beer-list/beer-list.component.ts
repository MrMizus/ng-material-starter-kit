import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeerListService } from '../../services/beer-list.service';
import { PageEvent } from '@angular/material/paginator';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent {
  public pagination = [1, 5]
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<BeerModel[]> = this.refresh$.pipe(
    switchMap(data => this._beerListService.getPage(this.pagination[0], this.pagination[1])));

  constructor(private _beerListService: BeerListService) {
  }

  OnPageChange($event: PageEvent) {
    this.pagination[0] = $event.pageIndex + 1
    this.pagination[1] = $event.pageSize
    this._refreshSubject.next();
  }
}
