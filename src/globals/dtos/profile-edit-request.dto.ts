export interface ProfileEditRequest {
  email: string;
  username: string;
  pictureUrl?: string;
  picture?: Blob;
}
