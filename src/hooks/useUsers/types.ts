export interface ApiErrorResponse {
  error: string;
}

interface RegisterUserData {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
}

export default RegisterUserData;
