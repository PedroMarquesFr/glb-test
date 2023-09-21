import React from "react";
import LoginForm from "../components/LoginForm";

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen md:flex-row">
      <section className="w-5/12">
        <h1 className="text-3xl font-semibold text-center md:text-left">
          Welcome to GLB Manager service!
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:text-left">
          Log into your account or register a new one
        </p>
      </section>
      <section className="md:border-solid md:border-l md:border-silver-600 md:w-5/12 py-4">
        <LoginForm />
      </section>
    </section>
  );
};

export default Login;
