export interface RegisterRequestDto {
  email: string;
  password: string;
  acceptedTermsOfCondition: boolean;
  acceptedGDPR: boolean;
}
