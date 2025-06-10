import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.html',
})
export class FormItem {

  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 6;

  item: any = {
    product: '',
    price: '',
    quantity: ''
  }

  onSubmit(itemForm: NgForm): void {
    if (itemForm.invalid) {
      this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId++;
  
      this.item = {
        product: '',
        price: '',
        quantity: ''
      };
      itemForm.reset();
      itemForm.resetForm();

    }

  }
}
