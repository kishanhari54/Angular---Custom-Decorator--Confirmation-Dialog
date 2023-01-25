import { Component, Inject } from '@angular/core';
import { filter, take, tap } from 'rxjs';
import { Confirmable } from './confirm.decotator';
import { ConfirmService } from './confirm.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Use custom confirm dialog';

  constructor(private confirmService: ConfirmService) {
    console.log('AppComponent created after decorator');
  }
  showConfirm() {
    this.confirmService
      .confirm()
      .pipe(
        take(1),
        filter(v => !!v),
        tap(val => alert('Confirmed'))
      )
      .subscribe();
  }

  @Confirmable({ message: 'Confirm Action with custom message' })
  showConfirmWithDecorator(data) {
    alert('confirmed with decorator');
  }
}
