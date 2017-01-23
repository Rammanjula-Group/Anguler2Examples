import {Component} from "angular2/core";

@Component({
   selector:'my-list',
   template:`<h2>List of Fruits</h2>
   <ul>
      <li *ngFor="#myItem of itemList" (click)="onItemClicked(myItem)">{{myItem.name}}</li>
   </ul>
   <input type="text" [(ngModel)]="clickedItem.name">
   `
})
export class ItemComponent{
   public itemList = [
      {name:"Apple"},
      {name:"Orange"},
      {name:"Grapes"},
	  {name:"Guava"},
   ];
   public clickedItem = {name: ""};
     onItemClicked(myItem) {
        this.clickedItem = myItem;
     }
}