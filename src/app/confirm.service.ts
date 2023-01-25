import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EMPTY, Observable } from 'rxjs';
import { DialogConfirmModel } from './confirm.model';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  constructor(public dialog: MatDialog) {}

  public confirm(data: DialogConfirmModel = {}): Observable<boolean> {
    data.title = data.title || 'Confirm';
    data.message = data.message || 'Are you sure?';
    data.showCancel = data.showCancel || true;
    data.showIcon = data.showIcon || true;

    let dialogRef: MatDialogRef<ConfirmComponent>;

    dialogRef = this.dialog.open(ConfirmComponent, {
      width: '480px',
      disableClose: true,
      data,
      backdropClass: 'confirm-backdrop-class',
      panelClass: 'confirm-panel-class'
    });
    return dialogRef.afterClosed();
  }
}
