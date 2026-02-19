import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("Credentials:", credentials);

        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        const user = await response.json();
        console.log("API Response:", user);

        // ⭐ FINAL FIX HERE
        if (response.ok && user?.accessToken) {
          return user;
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
