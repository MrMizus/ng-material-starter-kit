export interface ProductCartModel {
  readonly userId: number,
  readonly date: string,
  readonly products:[{
    readonly productId: number,
    readonly quantity: number
  }]
}
