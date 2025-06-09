import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [InvoiceComponent, CommonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'invoice-app';
}
