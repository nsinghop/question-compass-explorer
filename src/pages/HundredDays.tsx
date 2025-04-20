
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const HundredDays = () => {
  // Sample progress data
  const progress = 45; // out of 100 days
  const challenges = [
    { day: 45, title: "Binary Search Implementation", completed: true },
    { day: 44, title: "Dynamic Programming - Fibonacci", completed: true },
    { day: 43, title: "Graph DFS Traversal", completed: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">100 Days of Code</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <span className="text-lg font-medium">Your Progress: Day {progress}</span>
              <Progress value={progress} className="mt-2" />
            </div>
            <p className="text-gray-600">Keep going! You're doing great!</p>
          </div>
        </div>

        <div className="space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.day} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Day {challenge.day}</h3>
                  <p className="text-gray-600">{challenge.title}</p>
                </div>
                <Button variant={challenge.completed ? "secondary" : "default"}>
                  {challenge.completed ? "Completed" : "Start Challenge"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HundredDays;
