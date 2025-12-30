import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateTinChi{
    @IsNumber()
    @IsNotEmpty()
    SoTinChiCuaMonHoc: number;

    @IsString()
    @IsNotEmpty()
    @Length(3, 100),
    MaMonHoc: string;
}