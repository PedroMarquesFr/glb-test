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

// import { Container } from './styles';

const Header: React.FC = () => {
  let navigate = useNavigate();
  const user = CookieService.getPerson();
  return (
    <section className="flex justify-between items-center px-20 py-2 border-b border-silver-300">
      <p className=" font-semibold">GLB Manager</p>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <User className="mr-2 h-4 w-4" /> {user?.email} {user?.displayName}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={() => {
                CookieService.clearCookies();
                navigate("/login");
              }}
            >
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
