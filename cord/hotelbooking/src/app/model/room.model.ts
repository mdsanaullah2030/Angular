export class RoomModel {
    id!: string ;                  
    roomType!: string ;    
    adults!: number ;           
    children!: number ;        
    price!: number  ;
    hotel!: {
        id: string | undefined;
        hotelname: string | undefined;
    };
}