export class bookingModel {

    id!: string;
    seating!: string;
    child!: string;

    student!: {
        id: string | undefined;
        name: string | undefined;
        email: string | undefined;
        cellNo: string | undefined;
    }

}