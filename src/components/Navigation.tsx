
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Book, Code, Trophy, User, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const developers = [
    { name: "John Doe", id: 1 },
    { name: "Jane Smith", id: 2 },
    // Add more developers as needed
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-purple-600">
              NSTBuddy
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/assignments" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Book className="h-5 w-5" />
              <span>Assignments</span>
            </Link>
            
            <Link to="/contests" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Trophy className="h-5 w-5" />
              <span>Contests</span>
            </Link>
            
            <Link to="/100-days" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Code className="h-5 w-5" />
              <span>100 Days</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Developers</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {developers.map((dev) => (
                  <DropdownMenuItem key={dev.id}>
                    {dev.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
