import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Search } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

// Sample data
const initialQuestions = [
  { id: 1, subject: 'Mathematics', questionName: 'Solving Quadratic Equations', link: 'https://example.com/math1', topic: 'Algebra', date: '2025-04-18' },
  { id: 2, subject: 'Mathematics', questionName: 'Integration Techniques', link: 'https://example.com/math2', topic: 'Calculus', date: '2025-04-19' },
  { id: 3, subject: 'Computer Science', questionName: 'Binary Search Trees', link: 'https://example.com/cs1', topic: 'Data Structures', date: '2025-04-15' },
  { id: 4, subject: 'Computer Science', questionName: 'Dynamic Programming', link: 'https://example.com/cs2', topic: 'Algorithms', date: '2025-04-17' },
  { id: 5, subject: 'Physics', questionName: "Newton's Laws of Motion", link: 'https://example.com/physics1', topic: 'Classical Mechanics', date: '2025-04-16' },
  { id: 6, subject: 'Physics', questionName: 'Quantum Entanglement', link: 'https://example.com/physics2', topic: 'Quantum Physics', date: '2025-04-20' },
];

const Assignments = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [filteredQuestions, setFilteredQuestions] = useState(initialQuestions);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

  useEffect(() => {
    const uniqueSubjects = ['All', ...new Set(questions.map(q => q.subject))];
    setSubjects(uniqueSubjects);
  }, [questions]);

  useEffect(() => {
    let result = questions;
    
    if (selectedSubject !== 'All') {
      result = result.filter(q => q.subject === selectedSubject);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(q => 
        q.questionName.toLowerCase().includes(term) || 
        q.topic.toLowerCase().includes(term)
      );
    }
    
    setFilteredQuestions(result);
  }, [selectedSubject, searchTerm, questions]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-semibold text-gray-800">
                Question Browser
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedQuestion ? (
          <div className="space-y-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedQuestion(null)}
              className="mb-4"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Questions
            </Button>
            
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedQuestion.questionName}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><span className="font-semibold">Subject:</span> {selectedQuestion.subject}</p>
                  <p><span className="font-semibold">Topic:</span> {selectedQuestion.topic}</p>
                  <p><span className="font-semibold">Added:</span> {formatDistanceToNow(new Date(selectedQuestion.date), { addSuffix: true })}</p>
                </div>
                <div className="flex justify-end">
                  <a 
                    href={selectedQuestion.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    Open Question
                  </a>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Question Browser</h1>
              <p className="text-gray-600">Browse through our collection of questions across various subjects.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search questions by name or topic..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No questions found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuestions.map((question) => (
                  <Card
                    key={question.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedQuestion(question)}
                  >
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {question.subject}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDistanceToNow(new Date(question.date), { addSuffix: true })}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{question.questionName}</h3>
                        <p className="mt-1 text-sm text-gray-500">{question.topic}</p>
                      </div>
                      <a
                        href={question.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open Question
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Assignments;
