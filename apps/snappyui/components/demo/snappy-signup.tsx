"use client";
import React from "react";

import {
  ConfirmPasswordInput,
  EmailInput,
  FirstNameInput,
  LastNameInput,
  LoginLink,
  PasswordInput,
  SignupHeader,
  SignupPage,
  SubmitButton,
  UsernameInput,

} from "@/components/ui/snappy-signup";

export default function SignupForm() {
  // const handleSignup = async (data: object) => {
  //   console.log("Form data:", data);
  //   // Handle signup logic here
  // };
  return (
    <SignupPage>
      <SignupHeader
        title="Join Us"
        subtitle="Create your account to get started"
      />
      <FirstNameInput />
      <LastNameInput />
      <EmailInput />
      <UsernameInput />
      <PasswordInput validationOptions={{ minLength: 8 }} />
      <ConfirmPasswordInput />
      <SubmitButton
        onClick={(data) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log("I will get this data while submitting", data);
              resolve(true); // This is important
            }, 5000);
          });
        }}
        text="Create Account"
      />
      <LoginLink href="/login" />
    </SignupPage>
  );
}
