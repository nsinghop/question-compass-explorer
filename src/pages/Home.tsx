
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to NSTBuddy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your companion for mastering Newton School of Technology coursework. Get solutions, track progress, and excel in your coding journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              onClick={() => navigate("/assignments")}
              className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700"
            >
              Complete Assignments
            </Button>
            <Button
              onClick={() => navigate("/100-days")}
              className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700"
            >
              100 Days of Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
