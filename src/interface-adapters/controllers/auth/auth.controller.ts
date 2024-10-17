import { GoogleAuthService } from "@/src/infrastructure/services/auth/google.service";
import { OAuthError } from "@/src/entities/errors/auth";
import { decode } from "jsonwebtoken";

export const initiateWithGoogle = async () => {
  const auth = new GoogleAuthService();
  const state = auth.generateState();
  const codeVerifier = auth.codeVerifier();
  const url = await auth.createAuthorizationUrl(state, codeVerifier);
  return { state, codeVerifier, url };
};

export const handleGoogleCallback = async (
  code: string,
  codeVerifier: string
): Promise<{
    accessToken:string;
    refreshToken:string;
  googleId: string;
  name: string;
  picture: string;
  email: string;
}> => {
  const auth = new GoogleAuthService();
  try {
    const payload = await auth.validateCode(code, codeVerifier);
    const decodedToken = decode(payload.idToken) as { [key: string]: any };

    if (!decodedToken) throw new OAuthError("Unable to decode Token");
                                               
    return {
      accessToken:payload.idToken,
      refreshToken:payload.refreshToken ?? "",  
      googleId: decodedToken.sub,
      name: decodedToken.name || null,
      picture: decodedToken.picture || null,
      email: decodedToken.email || null,
    };
  } catch (err) {
    console.error("Error in Google OAuth:", err);
    throw new OAuthError("Error in Google authentication")
  }
};
