import {IsString, IsEnum, IsNotEmpty, isNotEmpty, Length, IsNumber, Max, Min} from "class-validator"
import { GioiTinh } from "../../Enums/Enums";


export class CreateSinhVien{
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    MasoSinhVien: string;

    @IsString()
    @IsNotEmpty()
    @Length(1, 300)
    HoVaTenSinhVien: string;

    @IsNotEmpty()
    NgaySinh: Date;

    @IsEnum(GioiTinh)
    @IsNotEmpty()
    GioiTinhHocSinh: GioiTinh;


    @IsString()
    @IsNotEmpty()
    @Length(3, 300)
    NoiSinh: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 300)
    ChuyenNghanh: string;


    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Max(2026)
    KhoaHoc: number;

    @IsString()
    @IsNotEmpty()
    @Length(3, 100),
    MaMonHoc: string;
}