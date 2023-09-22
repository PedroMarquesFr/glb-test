import React from "react";
import LoginForm from "../components/LoginForm";
import { Sticker } from "lucide-react";

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen md:flex-row">
      <section className="w-5/12 relative">
        <p
          className="font-semibold absolute left-0 top-[-100px]"
        >
          <Sticker className="mr-1 w-10 h-10" />
          {/* GLB Manager */}
        </p>
        <h1 className="text-3xl font-semibold text-center md:text-left">
          Welcome to GLB Manager service!
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:text-left">
          Sign In or Begin Your Journey by Creating an Account
        </p>
      </section>
      <section className="md:border-solid md:border-l md:border-silver-600 md:w-5/12 py-4">
        <LoginForm />
      </section>
    </section>
  );
};

export default Login;
