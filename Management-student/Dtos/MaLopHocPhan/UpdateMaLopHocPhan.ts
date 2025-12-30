import {IsString, IsNotEmpty, Length} from "class-validator"

export class UpdateMaLopHocPhan{
    @IsString()
    @IsNotEmpty()
    @Length(3, 100),
    MaLopHocPhan: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    MaLophoc: string;
}