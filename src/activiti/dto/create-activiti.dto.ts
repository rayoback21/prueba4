
import { ApiProperty } from "@nestjs/swagger";
export class CreateActivitiDto {

    @ApiProperty()
    title: string;

    @ApiProperty({required: false})
    description?: string;

    @ApiProperty()
    lastSee: string;

    @ApiProperty()
    countLastSee: number;

    @ApiProperty({ required: false, default: false})
    exint?: boolean = false;
}


