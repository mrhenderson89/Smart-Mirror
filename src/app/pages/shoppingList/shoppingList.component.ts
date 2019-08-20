import {Component, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { config } from '../../app.config';
import {ShoppingListService} from '../../services/shoppingList/shoppingList.service';
import { ShoppingList, ShoppingListItem } from 'src/app/app.model';

@Component({
  selector: 'app-details',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Observable<any[]>;
    newShoppingListItem: ShoppingListItem;
    editMode: boolean = false;
    itemToEdit: any = {};

    constructor(private db: AngularFirestore, private shoppingListService: ShoppingListService){
      this.newShoppingListItem = {
         name: '',
         description: '',
         createdBy: '',
         dateCreated: new Date()
      };
    }

    ngOnInit() {

//       this.shoppingList = this.db
// .collection('/shopping_list')
// .snapshotChanges()
// .map(actions => {
//    return actions.map(a => {
//      //Get document data
//      const data = a.payload.doc.data() as ShoppingList;
//      //Get document id
//      const id = a.payload.doc.id;
//      //Use spread operator to add the id to the document data
//      return { id, data };
//    });
// });

      console.log("ShoppingList$:");
      console.dir(this.shoppingList);
}

editItem(shoppingListItem) {
    console.log(shoppingListItem);
    //Set itemToEdit and editMode
    this.itemToEdit = shoppingListItem;
    this.editMode = true;
    //Set form value
    this.newShoppingListItem = shoppingListItem;
  } //edit

  saveItem() {
   var result = this.shoppingListService.addShoppingListItem('all', this.newShoppingListItem);
   console.dir(result);
   this.newShoppingListItem = {
      name: '',
      description: '',
      createdBy: '',
      dateCreated: new Date()
   };
 } //saveTask

//  deleteItem(item) {
//     //Get the task id
//     let itemId = item.id;
//     //delete the task
//     this.shoppingListService.deleteShoppingListItem(itemId);
//  } //deleteTask

}