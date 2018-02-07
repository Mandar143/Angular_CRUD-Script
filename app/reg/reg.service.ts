import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Reg } from './reg';

@Injectable()
export class RegService {

  constructor(
    private http: HttpClient
  ) { }

insertOne(name:string,title:string,desc:string){
  let reg=new Reg()
  reg.name=name
  reg.title=title
  reg.desc=desc

 return this.http.post('http://localhost:3000/user',reg,{
    
      headers :new HttpHeaders({
          'Content-Type':'application/json'
      })
  })

}

editOne(name:string,title:string,desc:string,_id:string){
  let reg=new Reg()
  reg.name=name
  reg.title=title
  reg.desc=desc
  reg._id=_id

 return this.http.put('http://localhost:3000/user',reg,{
    
      headers :new HttpHeaders({
          'Content-Type':'application/json'
      })
  })

}

deleteOne(_id:string){
  let reg=new Reg()
  
  reg._id=_id

 return this.http.put('http://localhost:3000/user',reg,{
    
      headers :new HttpHeaders({
          'Content-Type':'application/json'
      })
  })

}

selectData(_id:string,onResult : (res) => void){
  return this.http.post('http://localhost:3000/user1',_id,{
    
      headers :new HttpHeaders({
          'Content-Type':'application/json'
      })
  }).subscribe(
    (response: Response) => onResult(response),
    err => onResult(err),
  )
}


}
