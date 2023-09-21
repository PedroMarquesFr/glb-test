import React from "react";
import RegisterForm from "../components/RegisterForm";

// import { Container } from './styles';

const Register: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen md:flex-row">
      <section className="w-5/12">
        <h1 className="text-3xl font-semibold text-center md:text-left">
          Register an Account
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:text-left">
          When created, all your glb files will be stored in this account
        </p>
      </section>
      <section className="md:border-solid md:border-l md:border-silver-600 md:w-5/12 py-4">
        <RegisterForm />
      </section>
    </section>
  );
};

export default Register;
