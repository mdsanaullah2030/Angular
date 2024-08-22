export class BookingModel {
    id!:string;
    user!:string;
    checkindate!: Date;
    checkoutdate!: Date;
    totalprice!:number
       
   

      userv!:  {
        id:string|undefined;
        userid: string |undefined;
        name: string|undefined;
        email: string|undefined;
        nid: string|undefined;
        phonenumber: string|undefined;
      }
  room!: {
        id:string|undefined
        roomid: string |undefined;
        roomnumber: number |undefined;
        roomtype: string |undefined;
        price: number |undefined;
        status: string |undefined;
        description: string |undefined;
      }

     
  }