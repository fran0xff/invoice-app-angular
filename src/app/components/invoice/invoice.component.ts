import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceView } from '../invoice-view/invoice-view';
import { ClientView } from '../client-view/client-view';
import { CompanyView } from '../company-view/company-view';
import { ListItems } from '../list-items/list-items';
import { RowItem } from '../row-item/row-item';
import { Total } from '../total/total';
import { FormItem } from '../form-item/form-item';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceView,
    ClientView, 
    CompanyView, 
    ListItems,
    Total,
    FormItem],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private service: InvoiceService)  { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice(); 
  }

  removeItem(id: number){
    this.invoice = this.service.remove(id);
  }
  addItem(item: Item){
    this.invoice = this.service.save(item);
  }
  

}
