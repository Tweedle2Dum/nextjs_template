import type { IAuthenticationService } from "@/src/application/services/authentication.service.interface";
import type { Session } from "@/src/entities/models/session";

export class AuthenticationService implements IAuthenticationService {
  signInWithEmail(email: string, password: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  signInWithProvider(
    provider: "google" | "github" | "facebook" | "twitter"
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  signOut(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getSession(): Promise<Session | null> {
    throw new Error("Method not implemented.");
  }
  resetPassword(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
