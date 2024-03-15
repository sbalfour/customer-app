import { Component, Input } from '@angular/core';
import { Actions } from '../../models';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  @Input() actions: Actions[] = [];
  public displayedColumns: string[] = ['date', 'action'];
}
