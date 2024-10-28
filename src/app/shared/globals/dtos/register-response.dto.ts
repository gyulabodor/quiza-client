import {RegistrationState} from "../enums/registration-state.enum";

export interface RegisterResponseDto{
  email: string;
  registrationState: RegistrationState;
  error: string;
  role: string;
}
