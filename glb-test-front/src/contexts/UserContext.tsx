import { toast } from "@/components/ui/use-toast";
import AuthService from "@/services/AuthService";
import CookieService from "@/services/CookieService";
import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

type ContextProps = {
  logIn: (data: { email: string; password: string }) => Promise<void>;
  logOut: () => void;
  getUser: () => User | void;
  getToken: () => string | void;
};

const UserContext = createContext<ContextProps>({
  logIn: async () => {},
  logOut: () => {},
  getUser: () => {},
  getToken: () => {},
});
type Props = {
  children: JSX.Element;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  let navigate = useNavigate();
  const logIn = async (data: {
    email: string;
    password: string;
  }): Promise<void> => {
    const result = await AuthService.login(data);
    if (result?.code) {
      toast({
        title: "An error accurred:",
        description: result.message,
      });
      return;
    }
    console.log(result);

    toast({
      title: "Success:",
      description: "You are logged in!",
    });
    CookieService.setPerson(result.user);
    CookieService.setToken(result.token);
    navigate("/");
  };
  const logOut = () => {
    CookieService.clearCookies();
    navigate("/login");
    toast({
      title: "Success:",
      description: "You are logged out!",
    });
  };
  const getUser = () => {
    const person = CookieService.getPerson()
    if(!person){
      navigate("/login");
      toast({
        title: "Error:",
        description: "User does not exist",
      });
      return;
    }
    return person;
  };
  const getToken = () => {
    const token = CookieService.getToken()
    if(!token){
      navigate("/login");
      toast({
        title: "Error:",
        description: "Token expired, login again to proceed",
      });
      return;
    }
    return token;
  };
  const contextValue = {
    logIn,
    logOut,
    getUser,
    getToken
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
