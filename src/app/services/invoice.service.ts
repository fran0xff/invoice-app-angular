import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Total } from '../components/total/total';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData
  
  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {... this.invoice, total: total};
  }

  remove(id: number ) {
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
    const total = this.calculateTotal();
    
    return {... this.invoice, total};
  }

  save(item: Item): Invoice {
    this.invoice.items = [...this.invoice.items, item];
    const total = this.calculateTotal();
    return {...this.invoice, total};

  }

  calculateTotal() {
    // let total = 0;
    
    // this.invoice.items.forEach(item => {
    //   //total += item.quantity * item.price;
    //   total += item.total();
    // });
    // return total;

    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
