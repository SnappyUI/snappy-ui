import type { ReactNode } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { createContext, use, useState } from "react";

import { cn } from "@/lib/utils";

type ValidationErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
};

type SignupContextType = {
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  showConfirmPassword: boolean;
  setShowConfirmPassword: (show: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
  errors: ValidationErrors;
  validate: (passwordOptions?: PasswordValidationOptions) => boolean;
};

const SignupContext = createContext<SignupContextType | undefined>(undefined);

function useSignupContext() {
  const context = use(SignupContext);
  if (context === undefined) {
    throw new Error("Signup components must be used within a SignupPage");
  }
  return context;
}

type SignupPageProps = {
  children: ReactNode;
  className?: string;
};

function SignupPage({ ref, children, className }: SignupPageProps & { ref?: React.RefObject<HTMLFormElement | null> }) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (passwordOptions: PasswordValidationOptions = {
    minLength: 6,
    requireUppercase: false,
    requireLowercase: false,
    requireNumber: false,
    requireSpecialChar: false,
  }): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // First name validation
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // Last name validation
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    else if (!/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Username validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }
    else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    // Password validation
    const passwordErrors = [];

    if (passwordOptions.minLength && password.length < passwordOptions.minLength) {
      passwordErrors.push(`at least ${passwordOptions.minLength} characters`);
      isValid = false;
    }

    if (passwordOptions.requireUppercase && !/[A-Z]/.test(password)) {
      passwordErrors.push("an uppercase letter");
      isValid = false;
    }

    if (passwordOptions.requireLowercase && !/[a-z]/.test(password)) {
      passwordErrors.push("a lowercase letter");
      isValid = false;
    }

    if (passwordOptions.requireNumber && !/\d/.test(password)) {
      passwordErrors.push("a number");
      isValid = false;
    }

    if (passwordOptions.requireSpecialChar
      && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      passwordErrors.push("a special character");
      isValid = false;
    }

    if (passwordErrors.length > 0) {
      newErrors.password = `Password must contain ${passwordErrors.join(", ")}`;
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    }
    else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
    }
  };

  const contextValue = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
    setIsLoading,
    handleSubmit,
    errors,
    validate,
  };

  return (
    <SignupContext value={contextValue}>
      <form
        onSubmit={handleSubmit}
        className={cn("border-1 border-gray-400 dark:border-white w-full max-w-md mx-auto bg-white dark:bg-background p-8 rounded-lg shadow-xl dark:shadow-gray-900", className)}
        ref={ref}
      >
        {children}
      </form>
    </SignupContext>
  );
}

type HeaderProps = {
  title?: string;
  subtitle?: string;
  logo?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const SignupHeader: React.FC<HeaderProps> = ({
  title = "Create Account",
  subtitle = "Fill in your information to get started",
  logo = null,
  children,
  className,
}) => {
  return (
    <div className={cn("text-center text-gray-900 dark:text-white mb-6", className)}>
      {logo && <div className="mb-4">{logo}</div>}
      {title && <h1 className="text-2xl font-bold">{title}</h1>}
      {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>}
      {children}
    </div>
  );
};

type FirstNameInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
};

const FirstNameInput: React.FC<FirstNameInputProps> = ({
  label = "First Name",
  placeholder = "John",
  className,
}) => {
  const { firstName, setFirstName, errors } = useSignupContext();

  return (
    <div className="mb-4">
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder={placeholder}
        className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", errors.firstName ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600", className)}
        required
      />
      {errors.firstName && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
      )}
    </div>
  );
};

type LastNameInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
};

const LastNameInput: React.FC<LastNameInputProps> = ({
  label = "Last Name",
  placeholder = "Doe",
  className,
}) => {
  const { lastName, setLastName, errors } = useSignupContext();

  return (
    <div className="mb-4">
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder={placeholder}
        className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", errors.lastName ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600", className)}
        required
      />
      {errors.lastName && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
      )}
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
  const { email, setEmail, errors } = useSignupContext();

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
        className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600", className)}
        required
      />
      {errors.email && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
      )}
    </div>
  );
};

type UsernameInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
};

const UsernameInput: React.FC<UsernameInputProps> = ({
  label = "Username",
  placeholder = "johndoe",
  className,
}) => {
  const { username, setUsername, errors } = useSignupContext();

  return (
    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder={placeholder}
        className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", errors.username ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600", className)}
        required
      />
      {errors.username && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.username}</p>
      )}
    </div>
  );
};

type PasswordValidationOptions = {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumber?: boolean;
  requireSpecialChar?: boolean;
};

type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  showToggle?: boolean;
  className?: string;
  validationOptions?: PasswordValidationOptions;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "Password",
  placeholder = "••••••••",
  showToggle = true,
  className,
  // validationOptions = {

  // },
}) => {
  const { password, setPassword, showPassword, setShowPassword, errors } = useSignupContext();

  return (
    <div className="mb-4">
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
          className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", errors.password ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600", className)}
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
      {errors.password && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
      )}

    </div>
  );
};

type ConfirmPasswordInputProps = {
  label?: string;
  placeholder?: string;
  showToggle?: boolean;
  className?: string;
  validationOptions?: PasswordValidationOptions;
};

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  label = "Confirm Password",
  placeholder = "••••••••",
  showToggle = true,
  className,
  // validationOptions,
}) => {
  const { password, confirmPassword, setConfirmPassword, showConfirmPassword, setShowConfirmPassword, errors } = useSignupContext();

  return (
    <div className="mb-6">
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          id="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder={placeholder}
          className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", errors.confirmPassword ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600", className)}
          required
        />
        {showToggle && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        )}
      </div>
      {errors.confirmPassword && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
      )}
      {password && confirmPassword && password === confirmPassword && (
        <p className="mt-1 text-sm text-green-600 dark:text-green-400">Passwords match</p>
      )}
    </div>
  );
};

type SubmitButtonProps = {
  text?: string;
  loadingText?: string;
  className?: string;
  onClick?: (data: { firstName: string; lastName: string; email: string; username: string; password: string; confirmPassword: string }) => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text = "Sign Up",
  loadingText = "Creating account...",
  className,
  onClick,
}) => {
  const { firstName, lastName, email, username, password, confirmPassword, isLoading, setIsLoading, validate } = useSignupContext();

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isLoading)
      return;

    if (!validate())
      return;

    setIsLoading(true);

    if (onClick) {
      try {
        await onClick({ firstName, lastName, email, username, password, confirmPassword });
      }
      catch (error) {
        console.error("Signup failed:", error);
      }
      finally {
        setIsLoading(false);
      }
    }
    else {
      // If no onClick is provided, still use the default form submission behavior
      setIsLoading(false);
    }
  };

  return (
    <button
      type="submit"
      disabled={isLoading}
      className={cn(
        "w-full py-2 px-4 bg-background dark:bg-black border-1 dark:border-white border-black dark:hover:border-black dark:hover:bg-white dark:hover:text-black hover:border-white hover:bg-black hover:text-white text-black dark:text-white rounded-md font-medium transition-colors",
        isLoading && "opacity-70 cursor-not-allowed",
        className,
      )}
      onClick={handleClick}
    >
      {isLoading ? loadingText : text}
    </button>
  );
};

type LoginLinkProps = {
  text?: string;
  href?: string;
  className?: string;
};

const LoginLink: React.FC<LoginLinkProps> = ({
  text = "Already have an account? Sign in",
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

SignupPage.displayName = "SignupPage";
SignupHeader.displayName = "SignupHeader";
FirstNameInput.displayName = "FirstNameInput";
LastNameInput.displayName = "LastNameInput";
EmailInput.displayName = "EmailInput";
UsernameInput.displayName = "UsernameInput";
PasswordInput.displayName = "PasswordInput";
ConfirmPasswordInput.displayName = "ConfirmPasswordInput";
SubmitButton.displayName = "SubmitButton";
LoginLink.displayName = "LoginLink";

export {
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
};
