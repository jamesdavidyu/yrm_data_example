import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    pages: { signIn: "/", signOut: "/" },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        // CredentialsProvider({
        //     id: "credentials",
        //     name: "Credentials",
        //     async authorize(credentials: any, req) {
        //         try {
        //             const client = getYRMDataApiHttpClient();

        //             const loginResponse = await client.loginUser({
        //                 id: credentials.id,
        //                 name: credentials.name,
        //                 email: credentials.email,
        //                 image: credentials.image,
        //                 emailVerified: credentials.emailVerified,
        //                 sessionToken: credentials.sessionToken,
        //                 userId: credentials.userId,
        //                 expires: credentials.expires,
        //             });

        //             if (loginResponse.status > 300) {
        //                 return null;
        //             }

        //             const { data } = loginResponse;

        //             return {
        //                 user: {
        //                     id: data.id,
        //                     name: data.name,
        //                     email: data.email,
        //                     image: data.image,
        //                     emailVerified: data.emailVerified,
        //                 },
        //                 sessionToken: data.sessionToken,
        //                 userId: data.userId,
        //                 expires: data.expires,
        //             };
        //         } catch (e) {
        //             return null;
        //         }
        //     },
        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log("userrrrr", user);
            return true
        },
        // async session({ session, token, user}) {
        //     return session;
        // },
        // async jwt({ token, account, user }) {
        //     if (account) {
        //         token.accessToken = account.access_token;
        //         token.id = user?.id;
        //     }
        //     return token;
        // }
        // session({ session, token, user }) {
        //     session.user.id = token.id as string;            
        //     session.user.name = token.name as string;,
        //     session.user.email,
        //     session.user.image,
        //     session.user.emailVerified,
        //     session.user.sessionToken,
        //     session.user.userId,
        //     session.user.expires,
        // }
    }
}