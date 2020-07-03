export class JwtResponse {
  id?: string;
  accessToken?: string;
  type?: string;
  userName?: string;
  name?: string;
  roles?: string[];
  email?: string;
  avatar?: string;
  authorities?: any;
}
