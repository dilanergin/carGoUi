export class ShopDTO{
  id:bigint;
  name:string;
  phone:string;
  address:string;


  mapper(shop:any){
    this.id = shop.id;
    this.name = shop.name;
    this.phone = shop.email;
    this.address=shop.lastName;

  }







}
