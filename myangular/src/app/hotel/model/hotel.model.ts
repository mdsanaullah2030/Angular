import { CheckboxControlValueAccessor } from "@angular/forms";
import { Data } from "@angular/router";

export class HotelModel{
    id:string | undefined;
    name:string | undefined;
    nid:string | undefined;
    cellNo:string | undefined;
    emargenciNo:string | undefined;
    child:boolean|undefined;
    roomNo:Selection|undefined;
    ac:boolean|undefined;
    nonac:boolean|undefined;
    roomtype:CheckboxControlValueAccessor|undefined;
    checkin:Data|undefined;
    checkout:Data|undefined;


}
