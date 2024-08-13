import { RegistrationModel } from "./registration.model";


export interface AuthResponse {
    token:string;
    user:RegistrationModel
}
