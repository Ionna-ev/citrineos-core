import {
  IsDateString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { Token } from './Token';

export class CommandsReserveNowRequest {
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  response_url!: string;

  @IsObject()
  @IsNotEmpty()
  token!: Token;

  @IsString()
  @IsDateString()
  @IsNotEmpty()
  expiry_date!: Date;

  @MaxLength(36)
  @IsString()
  @IsNotEmpty()
  reservation_id!: string;

  @MaxLength(36)
  @IsString()
  @IsNotEmpty()
  location_id!: string;

  @MaxLength(36)
  @IsString()
  @IsOptional()
  evse_uid?: string | null;

  @MaxLength(36)
  @IsString()
  @IsOptional()
  authorization_reference?: string | null;
}
