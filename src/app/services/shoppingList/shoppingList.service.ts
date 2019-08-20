import { config } from '../../app.config';
import {Injectable} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { ShoppingList, ShoppingListItem } from 'src/app/app.model';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable()
export class ShoppingListService {
      shoppingList: AngularFirestoreCollection<ShoppingList>;
      private shoppingListDoc: AngularFirestoreDocument<ShoppingList>;

    constructor(private db: AngularFirestore, private auth: AuthService) {
     }

     ngOnInit() {
      this.shoppingList = this.db.collection<ShoppingList>('shopping_list');
   }

    getShoppingList() {
      console.log("ShoppingList:");
      console.dir(this.shoppingList);
      return this.shoppingList;
    }

    async create() {
      const { uid } = this.auth.currentUserId;
  
      const data = {
        uid,
        createdAt: Date.now(),
        count: 0,
        messages: []
      };
  
      const docRef = await this.db.collection('shopping_list').doc(uid).set(data);
      //return this.router.navigate(['chats', docRef.id]);
    }
  
    async addShoppingListItem(userId, content) {
      var uid = this.auth.currentUserId;
      console.dir(uid);
  
      const data = {
        uid,
        content,
        createdAt: Date.now()
      };
  
      if (uid) {
        // const ref = this.db.collection('shopping_list').doc(userId);
        // console.dir(ref);
        // ref.set(content);

        var shoppingListDoc = this.db.collection("shopping_list").doc(userId);

        // Atomically add a new region to the "regions" array field.
        shoppingListDoc.update({
        items: firebase.firestore.FieldValue.arrayUnion(content)
        });
      }
    }
  
  }