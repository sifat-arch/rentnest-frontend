import React from "react";
import RegisterForm from "../_components/RegisterFrom";

const RegisterPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-zinc-950 p-4 text-zinc-100 antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Background Radial Glow Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <div className="relative w-full max-w-md space-y-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur-xl">
        {/* FORM GENERIC TEXTS */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            Create an Account
          </h1>
          <p className="text-sm text-zinc-400">
            Enter your details to create your new account
          </p>
        </div>

        {/* FORM COMPONENT */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
