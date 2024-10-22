import {RoleEnum} from "../enums/role.enum";

export interface ProfileEditResponseDto {
  user_id: number;
  player_id: number;
  username: string;
  email: string;
  picture: string;
  picture_url: string;
  error: string;
  role: RoleEnum;
}
