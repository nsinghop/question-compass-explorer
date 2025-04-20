
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Add this import

const Contests = () => {
  const contests = [
    { id: 1, name: "Weekly Contest 1", date: "2025-04-25", difficulty: "Medium" },
    { id: 2, name: "Monthly Challenge", date: "2025-05-01", difficulty: "Hard" },
    // Add more contests as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contest Questions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.map((contest) => (
            <Card key={contest.id} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{contest.name}</h3>
              <p className="text-gray-600 mb-4">Date: {contest.date}</p>
              <p className="text-gray-600">Difficulty: {contest.difficulty}</p>
              <Button className="mt-4 w-full">View Contest</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contests;
