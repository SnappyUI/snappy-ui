"use client";
import React from "react";

import {
  EmailInput,
  ForgotPasswordLink,
  LoginHeader,
  LoginPage,
  PasswordInput,
  SignUpLink,
  SubmitButton,
} from "@/components/ui/snappy-login";

export default function SnappySignIn() {
  return (
    <LoginPage>
      <LoginHeader title="Welcome Back" subtitle="Log in to your account" />
      <EmailInput />
      <PasswordInput />
      <ForgotPasswordLink />
      <SubmitButton onClick={(data) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("I will get this data while submitting", data);
            resolve(true); // This is important
          }, 5000);
        });
      }}
      />
      <SignUpLink />
    </LoginPage>
  );
}
