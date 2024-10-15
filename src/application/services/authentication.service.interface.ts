import type { Session } from "@/src/entities/models/session";

export interface IAuthenticationService {
    signInWithEmail(email: string, password: string): Promise<void>;
    signInWithProvider(provider: AuthProvider): Promise<void>;
    signOut(): Promise<void>;
    getSession(): Promise<Session | null>;
    resetPassword(email: string): Promise<void>;
  }

type AuthProvider = 'google' | 'github' | 'facebook' | 'twitter';
  