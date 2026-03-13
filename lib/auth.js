import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "./db.js";

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    database: prismaAdapter(db, {
        provider: "postgresql",
    }),
    socialProviders:
        githubClientId && githubClientSecret
            ? {
                  github: {
                      clientId: githubClientId,
                      clientSecret: githubClientSecret,
                  },
              }
            : {},
});