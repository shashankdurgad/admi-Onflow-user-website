import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const Workspace = () => {
  return (
    <OnboardingLayout currentStep={2}>
      <div className="max-w-4xl mx-auto animate-fade-in w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Complete Your Profile
          </h1>
          <p className="text-lg text-muted-foreground">
            Please fill out all the required information below
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="Enter your first name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input id="middleName" placeholder="Enter your middle name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Enter your last name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredName">Preferred Name</Label>
              <Input id="preferredName" placeholder="How should we call you?" />
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="your.email@company.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="altPhone">Alternative Phone</Label>
              <Input id="altPhone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input id="emergencyContact" placeholder="Emergency contact number" />
            </div>

            {/* Address Information */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address1">Address Line 1 *</Label>
              <Input id="address1" placeholder="Street address" required />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address2">Address Line 2</Label>
              <Input id="address2" placeholder="Apartment, suite, unit, building, floor, etc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input id="city" placeholder="City" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State / Province *</Label>
              <Input id="state" placeholder="State or Province" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip">ZIP / Postal Code *</Label>
              <Input id="zip" placeholder="ZIP or Postal Code" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input id="country" placeholder="Country" required />
            </div>

            {/* Professional Information */}
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input id="company" placeholder="Your company name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title *</Label>
              <Input id="jobTitle" placeholder="Your job title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department *</Label>
              <Input id="department" placeholder="Your department" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input id="employeeId" placeholder="Employee identification number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="manager">Manager Name</Label>
              <Input id="manager" placeholder="Your manager's name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size</Label>
              <Input id="teamSize" type="number" placeholder="Number of team members" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Office Location</Label>
              <Input id="location" placeholder="Office location or remote" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="website">Personal Website</Label>
              <Input id="website" placeholder="https://yourwebsite.com" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">Professional Bio *</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself, your experience, and what you hope to achieve..." 
                className="min-h-[120px]"
                required 
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="skills">Key Skills (comma separated)</Label>
              <Textarea 
                id="skills" 
                placeholder="Project Management, Team Leadership, Communication..." 
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="interests">Professional Interests</Label>
              <Textarea 
                id="interests" 
                placeholder="What are your professional interests and goals?" 
                className="min-h-[80px]"
              />
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone *</Label>
              <Input id="timezone" placeholder="e.g., UTC-5, EST" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Preferred Language *</Label>
              <Input id="language" placeholder="English, Spanish, etc." required />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="referral">How did you hear about us?</Label>
              <Input id="referral" placeholder="Referral source" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="comments">Additional Comments or Notes</Label>
              <Textarea 
                id="comments" 
                placeholder="Any additional information you'd like to share..." 
                className="min-h-[100px]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/onboarding/team">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
