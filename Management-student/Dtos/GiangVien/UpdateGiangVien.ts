import {IsString, IsNumber, IsEnum, Min, IsNotEmpty, Length} from "class-validator"


export class UpdateGiangVien{
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    MaSoGiangVien: string;


    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    TenGiangVien: string;


    @IsNotEmpty()
    NgaySinh: Date;

    @IsString()
    @IsNotEmpty()
    NoiSinh: string;

    @IsString()
    @IsNotEmpty()
    GioiTinhGiangVien: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 100),
    MaMonHoc: string;

}