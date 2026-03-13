"use server";

import db from "@/src/lib/db";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { email } from "better-auth/*";

export const currentUser = async () =>{
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });
        if(!session?.user?.id){
            return null;
        }
        const user = await db.user.findUnique({
            where:{
                id: session.user.id
            },
            session:{
                id: true,
                email: true,
                image: true,
                createdAt: true,
                updatedAt: true,
            }
        })
        return user;
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null; 
    }
}