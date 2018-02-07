import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
  
})
export class PaymentComponent implements OnInit {
 
  merchant_key: string
  payu_base_url : string
  salt : string
  hash :string
  hashSequence : string
  
  a :any
  constructor() {
    this.merchant_key = "gtKFFx"
    this.salt          = "eCwWELxi"
    this.payu_base_url = "https://test.payu.in";
    this.hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";

   }

  


  ngOnInit() {
   
   
  }

  onSubmit(frm: any) {
    frm.key=this.merchant_key
    console.log(frm)
  }

}
