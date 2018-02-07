import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
