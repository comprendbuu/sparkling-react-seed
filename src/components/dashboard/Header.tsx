
import { Bell, Search, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
      <div className="relative w-64">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          placeholder="Search..." 
          className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors" 
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-slate-700 text-white">
              <User size={16} />
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
