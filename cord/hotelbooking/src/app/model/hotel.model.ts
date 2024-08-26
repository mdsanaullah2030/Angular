export class HotelModel {
    id!: string;
    hotelname!: string;
    address!: string;  
    rating!: string;
    location!: {
        id: string | undefined;
        locationname: string | undefined;
    };
}
