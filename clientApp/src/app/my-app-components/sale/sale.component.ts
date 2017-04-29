import {Component,OnInit} from '@angular/core';
import {Items,Sales,Salelineitems,FireLoopRef} from 'app/shared/sdk/models';
import {RealTime} from 'app/shared/sdk/services';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {


  private item: Items = new Items();
  private items: Items[] = new Array < Items > ();
  private saleLineItem : any;
  private sale: Sales[] = new Array < Sales > ();
  private newSale : any;
  private saleLineItemRef: FireLoopRef < Salelineitems > ;
  private saleRef: FireLoopRef < Sales > ;
  private reference: FireLoopRef < Items > ;
  private selectedItems: Items[] = new Array < Items > ();
  private quantity = new Array();
  private itemSearch: String = null;
  private total = 0;

  constructor(private rt: RealTime) {

    this.rt.onReady().subscribe(() => {
      this.reference = this.rt.FireLoop.ref < Items > (Items);
      this.saleRef = this.rt.FireLoop.ref < Sales > (Sales);
      this.saleLineItemRef = this.rt.FireLoop.ref < Salelineitems > (Salelineitems);
      this.reference.on('change').subscribe((items: Items[]) => this.items = items);
      this.saleRef.on('change').subscribe((sale: Sales[]) => this.sale = sale);
    });
  }

  selectedItem(param): void {
    var already_selected = false;
    for (var i = 0; i < this.selectedItems.length; i++) {
      if (param == this.selectedItems[i].name) {
        already_selected = true;
      }
    }
    if (already_selected == false) {
      for (var i = 0; i < this.items.length; i++)
        if (param == this.items[i].name) {
          this.selectedItems.push(this.items[i]);
          this.quantity[this.quantity.length] = 1;
          this.totalAmount();
        }
    }
    this.itemSearch = "";
  }
  ngOnInit() {}

  deleteItem(item): void {
    var index = this.selectedItems.indexOf(item);
    this.quantity.splice(index, 1);
    this.selectedItems.splice(index, 1);
    this.totalAmount();
  }

  totalAmount(): void {
    var sum = 0;
    this.total = 0;
    for (var i = 0; i < this.selectedItems.length; i++) {
      sum = (this.selectedItems[i].price * this.quantity[i]);
      this.total += sum;
    }
  }

  onSaveSale(): void {
    // var 
    // this.reference.create().subscribe(() => this.item = new Items());
    var saleId = 0;
    if (this.sale.length == 0) saleId = 1;
    else
      saleId += 1;

      var date = new Date();

      this.newSale = {
        "date" : date,
        "total" : this.total
      }

    this.saleRef.create(this.newSale).subscribe();
    for (var i = 0; i < this.selectedItems.length; i++) {
       this.saleLineItem = {
        "qty": this.quantity[i],
        "item": this.selectedItems[i].id,
        "sale": saleId
      }
      this.saleLineItemRef.create(this.saleLineItem).subscribe();
    }
    this.selectedItems = null;this.total = 0;

  } //end of function onSave()
}