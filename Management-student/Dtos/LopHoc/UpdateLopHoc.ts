import {IsString, IsNotEmpty} from "class-validator";

export class UpdateLopHoc{

    @IsString()
    @IsNotEmpty()
    MaLophoc: string;


    @IsString()
        @IsNotEmpty()
        @Length(3, 100),
        MaMonHoc: string;
}