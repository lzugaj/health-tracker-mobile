export type AuthenticationDto = {
  email: string;
  password: string;
};

export type AuthorizationDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmationPassword: string;
  dateOfBirth: string;
  gender: string;
}
