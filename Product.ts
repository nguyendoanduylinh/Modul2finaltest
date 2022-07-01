export class Product {
  private _id = 0;
  constructor(
    private _name: string,
    private _type: string,
    private _price: number,
    private _quantity: number,
    private _date: string,
    private _description: string
  ) {}

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }
  get quantity(): number {
    return this._quantity;
  }
  set quantity(value: number) {
    this._quantity = value;
  }
  get date(): string {
    return this._date;
  }
  set date(value: string) {
    this._date = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
}
