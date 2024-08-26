export class RoomModel {
    id!: string ;                  
    roomtype!: string ;    
    adults!: number ;           
    children!: number ;        
    price!: number  ;
    hotel!: {
        id: string | undefined;
        hotelname: string | undefined;
    };
}