/* tslint:disable */
import {
  Items
} from '../index';

declare var Object: any;
export interface SalesInterface {
  "date"?: Date;
  "total"?: number;
  "id"?: number;
  items?: Items[];
}

export class Sales implements SalesInterface {
  "date": Date;
  "total": number;
  "id": number;
  items: Items[];
  constructor(data?: SalesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Sales`.
   */
  public static getModelName() {
    return "Sales";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Sales for dynamic purposes.
  **/
  public static factory(data: SalesInterface): Sales{
    return new Sales(data);
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
      name: 'Sales',
      plural: 'sales',
      properties: {
        "date": {
          name: 'date',
          type: 'Date'
        },
        "total": {
          name: 'total',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        items: {
          name: 'items',
          type: 'Items[]',
          model: 'Items'
        },
      }
    }
  }
}
