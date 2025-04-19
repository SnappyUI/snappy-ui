import type { ReactNode } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { createContext, use, useState } from "react";

import { cn } from "@/lib/utils";

type LoginContextType = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

function useLoginContext() {
  const context = use(LoginContext);
  if (context === undefined) {
    throw new Error("Login components must be used within a LoginPage");
  }
  return context;
}

type LoginPageProps = {
  children: ReactNode;
  className?: string;

};

function LoginPage({ ref, children, className }: LoginPageProps & { ref?: React.RefObject<HTMLFormElement | null> }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    isLoading,
    setIsLoading,
    handleSubmit,
  };

  return (
    <LoginContext value={contextValue}>
      <form
        onSubmit={handleSubmit}
        className={cn("border-1 border-gray-400  dark:border-white w-full max-w-md mx-auto bg-white dark:bg-background p-8 rounded-lg shadow-xl dark:shadow-gray-900", className)}
        ref={ref}
      >
        {children}
      </form>
    </LoginContext>
  );
}

type HeaderProps = {
  title?: string;
  subtitle?: string;
  logo?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const LoginHeader: React.FC<HeaderProps> = ({
  title = "Sign In",
  subtitle = "Enter your credentials to access your account",
  logo = null,
  children,
  className,
}) => {
  return (
    <div className={cn("text-center text-gray-900 dark:text-white mb-6", className)}>
      {logo && <div className="mb-4">{logo}</div>}
      {title && <h1 className="text-2xl font-bold ">{title}</h1>}
      {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>}
      {children}
    </div>
  );
};

type EmailInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
};

const EmailInput: React.FC<EmailInputProps> = ({
  label = "Email",
  placeholder = "you@example.com",
  className,
}) => {
  const { email, setEmail } = useLoginContext();

  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={placeholder}
        className={cn("w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", className)}
        required
      />
    </div>
  );
};

type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  showToggle?: boolean;
  className?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "Password",
  placeholder = "••••••••",
  showToggle = true,
  className,
}) => {
  const { password, setPassword, showPassword, setShowPassword } = useLoginContext();

  return (
    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder={placeholder}
          className={cn("w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", className)}
          required
        />
        {showToggle && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

type ForgotPasswordLinkProps = {
  text?: string;
  href?: string;
  className?: string;
};

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({
  text = "Forgot password?",
  href = "#",
  className,
}) => {
  return (
    <div className="mt-1 mb-6 text-right">
      <a href={href} className={cn("text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300", className)}>
        {text}
      </a>
    </div>
  );
};

type SubmitButtonProps = {
  text?: string;
  loadingText?: string;
  className?: string;
  onClick?: (data: { email: string; password: string }) => void;

};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text = "Sign In",
  loadingText = "Signing in...",
  className,
  onClick,
}) => {
  const { email, password, isLoading, setIsLoading } = useLoginContext();

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isLoading)
      return;

    setIsLoading(true);

    if (onClick) {
      try {
        await onClick({ email, password });
      }
      catch (error) {
        console.error("Login failed:", error);
      }
      finally {
        setIsLoading(false);
      }
    }
    else {
      setIsLoading(false);
    }
  };

  return (

    <button
      type="submit"
      disabled={isLoading}
      className={cn(
        "w-full py-2 px-4 bg-background  dark:bg-black border-1 dark:border-white border-black dark:hover:border-black dark:hover:bg-white dark:hover:text-black hover:border-white hover:bg-black hover:text-white text-black dark:text-white rounded-md font-medium transition-colors",
        isLoading && "opacity-70 cursor-not-allowed",
        className,
      )}
      onClick={handleClick}
    >
      {isLoading ? loadingText : text}
    </button>
  );
};

type SignUpLinkProps = {
  text?: string;
  href?: string;
  className?: string;
};

const SignUpLink: React.FC<SignUpLinkProps> = ({
  text = "Don't have an account? Sign up",
  href = "#",
  className,
}) => {
  return (
    <div className="mt-6 text-center">
      <a href={href} className={cn("text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300", className)}>
        {text}
      </a>
    </div>
  );
};

LoginPage.displayName = "LoginPage";
LoginHeader.displayName = "LoginHeader";
EmailInput.displayName = "EmailInput";
PasswordInput.displayName = "PasswordInput";
ForgotPasswordLink.displayName = "ForgotPasswordLink";
SubmitButton.displayName = "SubmitButton";
SignUpLink.displayName = "SignUpLink";

export {
  EmailInput,
  ForgotPasswordLink,
  LoginHeader,
  LoginPage,
  PasswordInput,
  SignUpLink,
  SubmitButton,
};
