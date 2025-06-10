import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.html',
})
export class RowItem {

  @Input() item!: Item;

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id:number): void {
    this.removeEventEmitter.emit(id);
  }
}
