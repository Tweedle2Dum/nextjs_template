export interface ICredentialAuthService {
  signIn(email: string, password: string): Promise<void>;
  createAccount(email: string, password: string): Promise<void>;
  resetPassword(email: string): Promise<void>;
  getUserProfile(token: string): Promise<void>;
}

//Follow PKCE Flow
export interface IOAuthService {
  generateState(): string;
  codeVerifier(): string;
  validateCode(
    state: string,
    codeVerifier: string
  ): Promise<{
    accessToken: string;
    refreshToken: string | null;
    idToken: string;
    accessTokenExpiresAt: Date;
  }>;
  createAuthorizationUrl(state: string, codeVerifier: string): Promise<URL>;
  refreshAccessToken(
    accessToken: string
  ): Promise<{ accessToken: string; accessTokenExpiresAt: Date }>;
}
