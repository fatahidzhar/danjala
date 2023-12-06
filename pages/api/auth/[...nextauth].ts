import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`,
          {
            email: credentials?.email,
            password: credentials?.password,
          },
          {
            headers: {
              accept: "*/*",
              withCredentials: true,
              "Content-Type": "application/json",
            },
          }
        );

        return res.data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
