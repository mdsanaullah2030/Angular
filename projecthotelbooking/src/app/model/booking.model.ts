
  export class BookingModel {
    id!:string
    bookingid!: number
    checkindate!: Date;
    checkoutdate!: Date;
    bookingdate!: Date;
   

      user!:  {
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
      location!:{

        id: number|undefined
        CoxsBazar:string|undefined
        Dhaka: string|undefined
        Sylhet: string|undefined
        Chittagong: string|undefined
        Sreemangal: string|undefined
        Kuakata: string|undefined
      }
    price: any;

     
  }

