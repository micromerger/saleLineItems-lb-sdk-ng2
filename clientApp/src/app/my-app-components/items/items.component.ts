import { Component, OnInit } from '@angular/core';
import { Items, FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  ngOnInit() {
  }
  private itemedit : boolean = false;
  private item     : Items = new Items();
  private reference : FireLoopRef<Items>;
  private items     : Items[] = new Array<Items>();
  constructor(private rt: RealTime) {
     this.rt.onReady().subscribe(() => {
    this.reference = this.rt.FireLoop.ref<Items>(Items);
    this.reference.on('change').subscribe(( items : Items[]) => this.items = items);
     });
  }
cancel() : void{
    this.itemedit = false;
    this.item.name=null;
    this.item.price=null;
  }
  itemSubmitRecord() : void{
    this.reference.upsert(this.item).subscribe();
    this.itemedit = false;
    this.item.name=null;
    this.item.price=null;
  }
  editItem(id) : void{
     this.itemedit = true;
    for (var i = 0; i<this.items.length;i++){
      if (this.items[i].id  == id)
      this.item = this.items[i];
    }
  }
  deleteItem(item : Items) :void{
     this.reference.remove(item).subscribe();
  }
  add(): void {
    this.reference.create(this.item).subscribe(() => this.item = new Items());
  }

  update(item: Items): void {
    this.reference.upsert(item).subscribe();
  }

  remove(item: Items): void {
    this.reference.remove(item).subscribe();
  }

}
