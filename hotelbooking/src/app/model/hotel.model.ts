export class HotelModel {
    id!: string;
    hotelname!: string;
    location!: {
        id: string | undefined;
        locationname: string | undefined;
    };
}
