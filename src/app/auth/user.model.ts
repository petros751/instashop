export class User {
  constructor(
    private token: string,
    private tokenExpirationDate: Date,
    private user: any,
    private AWS_ACCESS_KEY_ID:any,
    private AWS_SECRET_ACCESS_KEY:any
  ) //here for the credentials
  {}
}
