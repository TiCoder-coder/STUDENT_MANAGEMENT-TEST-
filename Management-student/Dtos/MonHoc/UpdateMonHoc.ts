import {IsString, IsNotEmpty, Length, IsEnum} from "class-validator"
import MonHocBatBuocCo from "../../Enums/Enums"

export class UpdateLopHocPhan{
    @IsString()
    @IsNotEmpty()
    @Length(3, 100),
    MaMonHoc: string;

    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    TenMonHoc: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(MonHocBatBuocCo)
    BatBuoc: MonHocBatBuocCo;


    @IsString()
    MonHocDieuKien: string;
}