import {IsString, IsNotEmpty, Length} from "class-validator";

export class CreateLopHoc{

    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    MaLophoc: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 100),
    MaMonHoc: string;

}