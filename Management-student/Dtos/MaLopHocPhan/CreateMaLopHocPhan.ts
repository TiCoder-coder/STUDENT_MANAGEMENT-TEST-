import {IsString, IsNotEmpty, Length} from "class-validator"

export class CreateMaLopHocPhan{
    @IsString()
    @IsNotEmpty()
    @Length(3, 100),
    MaLopHocPhan: string;
    
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    MaLophoc: string;
}