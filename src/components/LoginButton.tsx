"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const LoginButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        session.user.email === process.env.NEXT_PUBLIC_EMAIL ? (
          <button
            style={{ color: "white" }}
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        ) : (
          <div>
            <p className="text-white">Not allowed</p>
            <button
              style={{ color: "white" }}
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )
      ) : (
        <button
          style={{ color: "white" }}
          onClick={() => {
            signIn("google");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
