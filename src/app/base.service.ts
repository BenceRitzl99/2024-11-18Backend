import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  messageRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { 
    this.messageRef = db.list("messages");
  }

  getMessages() {
    return this.messageRef;
  }

  addMessage(uzi:any){
    this.messageRef.push({username:"JAttila3", message:uzi});
  }

  
}
