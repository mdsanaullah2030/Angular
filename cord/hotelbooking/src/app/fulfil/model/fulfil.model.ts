export class FulfilModel {
  id!: string;
  seating!: string;
  child!: string;
  nid!: string;
  cellNo!: string;
  retting!: string;

  user!: {
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    checkInDate: string | undefined;
    checkOutDate: string | undefined;
    roomType: string | undefined;
    paymentStatus: string | undefined;
  }
}