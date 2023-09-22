import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { User, LogOut } from "lucide-react";
import CookieService from "@/services/CookieService";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/contexts/UserContext";
import { Sticker } from "lucide-react";

// import { Container } from './styles';

const Header: React.FC = () => {
  let navigate = useNavigate();
  const userContext = useUserContext();
  const user = userContext.getUser();
  return (
    <section className="flex justify-between items-center px-20 py-2 border-b border-silver-300">
      <p className="font-semibold flex justify-center cursor-pointer" onClick={() => {navigate("/")}}>
        <Sticker className="mr-1" />
        GLB Manager
      </p>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <User className="mr-2 h-4 w-4" />{user?.displayName} • {user?.email} 
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={userContext.logOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </section>
  );
};

export default Header;
