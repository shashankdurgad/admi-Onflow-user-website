import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const Workspace = () => {
  const [selected, setSelected] = useState<string>("personal");

  const workspaceTypes = [
    {
      id: "personal",
      icon: Home,
      title: "For myself",
      description: "Write better, think more clearly, and stay organized"
    },
    {
      id: "team",
      icon: Users,
      title: "With my team",
      description: "Collaborate with your team and share knowledge"
    },
    {
      id: "business",
      icon: Briefcase,
      title: "For my business",
      description: "Run your company's operations and projects"
    }
  ];

  return (
    <OnboardingLayout currentStep={2}>
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How are you planning to use this?
          </h1>
          <p className="text-lg text-muted-foreground">
            We'll streamline your setup experience accordingly
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {workspaceTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-300 hover:scale-[1.02] animate-slide-in-right ${
                  selected === type.id
                    ? "border-primary bg-accent shadow-md"
                    : "border-border bg-card hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    selected === type.id ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link to="/onboarding/team">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Workspace;
