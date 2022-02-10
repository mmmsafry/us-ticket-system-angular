export class UserAuth {

  constructor(
    public tokenType: string,
    private _expiryDate: Date,
    private _accessToken: string,
    public id?: number,
  ) {
  }

  get accessToken() {
    if (!this._expiryDate || new Date() > this._expiryDate) {
      return null;
    }
    return this._accessToken;
  }
}
