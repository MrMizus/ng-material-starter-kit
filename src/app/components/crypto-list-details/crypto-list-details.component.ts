import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list-details',
  templateUrl: './crypto-list-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListDetailsComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  private _detailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public details$: Observable<CryptoModel> = this._detailsSubject.asObservable();

  constructor(private _cryptoService: CryptoService) {
  }

  selectCrypto(crypto: CryptoModel): void {
    this._detailsSubject.next(crypto)
  }
}
