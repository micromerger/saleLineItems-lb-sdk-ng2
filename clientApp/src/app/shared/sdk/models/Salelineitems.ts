/* tslint:disable */
import {
  Items,
  Sales
} from '../index';

declare var Object: any;
export interface SalelineitemsInterface {
  "qty"?: number;
  "id"?: number;
  "item"?: number;
  "sale"?: number;
  items?: Items;
  sales?: Sales;
}

export class Salelineitems implements SalelineitemsInterface {
  "qty": number;
  "id": number;
  "item": number;
  "sale": number;
  items: Items;
  sales: Sales;
  constructor(data?: SalelineitemsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Salelineitems`.
   */
  public static getModelName() {
    return "Salelineitems";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Salelineitems for dynamic purposes.
  **/
  public static factory(data: SalelineitemsInterface): Salelineitems{
    return new Salelineitems(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Salelineitems',
      plural: 'salelineitems',
      properties: {
        "qty": {
          name: 'qty',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "item": {
          name: 'item',
          type: 'number'
        },
        "sale": {
          name: 'sale',
          type: 'number'
        },
      },
      relations: {
        items: {
          name: 'items',
          type: 'Items',
          model: 'Items'
        },
        sales: {
          name: 'sales',
          type: 'Sales',
          model: 'Sales'
        },
      }
    }
  }
}
