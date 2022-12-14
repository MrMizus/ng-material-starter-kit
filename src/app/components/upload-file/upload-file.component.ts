import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FileService } from '../../services/file.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-file',
  styleUrls: ['./upload-file.component.scss'],
  templateUrl: './upload-file.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFileComponent {
  readonly uploadFile: FormGroup = new FormGroup({ url: new FormControl() });
  private _imageToUploadSubject: Subject<SafeUrl> = new Subject<SafeUrl>();
  public imageToUpload$: Observable<SafeUrl> = this._imageToUploadSubject.asObservable();
  constructor(private sanitize: DomSanitizer, private _fileService: FileService) {
  }
  onUploadFileSubmitted(uploadFile: FormGroup): void {
    this._fileService.create(uploadFile.get('url')?.value).subscribe();
  }

  onFileChanged(event: any): void {
    const file: File = event.target.files[0]
    if (!file) {
      return;
    }

    let fileReader: FileReader = new FileReader();
    fileReader.onloadend = () => {
      this._imageToUploadSubject.next(this.sanitize.bypassSecurityTrustUrl(fileReader.result as string));
    }
    fileReader.readAsDataURL(file);
    this.upload(file)
  }

  upload(file: File): void {
    this._fileService.upload(file).subscribe(
      (uploadedFile) => this.uploadFile.patchValue({ url: uploadedFile.Url }));
  }
}
