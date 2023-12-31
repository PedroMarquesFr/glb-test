import Header from "@/components/Header";
import ListCards from "@/components/ListCards";
import React from "react";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div className="mb-20">
      <Header />
      <ListCards />
    </div>
  );
};

export default Home;
