import { Component, OnInit } from '@angular/core';
import { Reg } from './reg'
import { RegService } from './reg.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers:[RegService]
})
export class RegComponent implements OnInit {
  resMsg:string
  states: any;
  nm: string
  tit : string
  de : string
  _id1: string
  constructor(
    private register : RegService,
    private http: HttpClient
  ) {
    this.http.get('http://localhost:3000/user')
    .subscribe(data => {
      console.log(data)
      this.states =data
    });

   }

  ngOnInit() {
    
  }

  onSubmit(name:string,title:string,desc:string){
    console.log(name)
    this.register.insertOne(name,title,desc).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resMsg =" Record Saved..!"
      })
  }

  onEdit(name:string,title:string,desc:string,_id:string){
      this.register.editOne(name,title,desc,_id).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resMsg =" Record Edited..!"
      })
  }

  onDelete(_id:string){
      this.register.deleteOne(_id).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resMsg =" Record Deleted..!"
      })
  }

  onSelect1(_id:string){
    console.log(_id)
    let arr={
      "_id":_id
    }
    this.register.selectData(arr,result=>{
      console.log(result)
      this.nm=result.name
      this.tit=result.title
      this.de=result.desc
      this._id1=result._id
    })
  }

}
