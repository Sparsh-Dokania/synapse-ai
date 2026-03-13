"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { signIn } from "@/src/lib/auth-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-16 md:py-32">
      <div className="flex flex-row justify-center items-center gap-x-2">
        <h1 className="text-3xl font-extrabold text-foreground">
          Welcome to Synapse AI
        </h1>
      </div>
      <p className="mt-2 text-muted-foreground text-lg font-semibold">
        Sign-In Below (we will increase your message limit if you do)
      </p>
      <Button
      variant={"default"}
      className="max-w-sm mt-5 w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"
      onClick={()=>signIn.social({
        provider: "github",
        callbackURL: "/" 
      })}
      >
        <FontAwesomeIcon icon={faGithub} width={24} height={24} />
        <span className="font-bold ml-2">Sign in with GitHub</span>

      </Button>
    </section>
  );
};

export default Page;
