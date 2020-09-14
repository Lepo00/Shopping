import { Shipping } from './shipping';

export interface User {
    username:string;    
    email:string;
    password:string;
    id?:number;
    shipping?: Shipping;
}
