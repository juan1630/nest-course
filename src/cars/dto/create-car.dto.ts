import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    //Se aconseja que  las propiedades del Dto sean readonly, para que no modifique el valor de las propiedades
    @IsString({message:"model should be a string"}) 
    readonly brand: string;
    @IsString()
    @MinLength(3, {message:"Should contain more than 3 letters"})
    readonly model: string;
    readonly id: string;
}
