import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private client:HttpClient) { }

  get(){
     return this.client.get('https://jsonplaceholder.typicode.com/users')
  }
//   getUser(){
//     return this.client.post('http://localhost:3000/users',{'id':775})
//  }

addUser(name:{name:string;mail:string;message:string}){
  return this.client.post(environment.appurl+"sql",name);

}
getUser(){
  return this.client.get(environment.appurl+"usermessage");
}

editId(id:number){
  return this.client.get(environment.appurl+"id?id="+id);
}
update(name:{id:number,name:string,mail:string,message:string}){
  return this.client.put(environment.appurl+"update",name)
}

delete(id:number){
  return this.client.delete(environment.appurl+"delete?id="+id);
}

}