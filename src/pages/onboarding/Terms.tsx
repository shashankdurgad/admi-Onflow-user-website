import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const Terms = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <OnboardingLayout currentStep={4}>
      <div className="w-full max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Please review and accept our terms to continue
        </p>
        
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-6 text-sm">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using this workspace platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                <p className="text-muted-foreground mb-2">
                  Permission is granted to temporarily access and use the materials on this platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Data Privacy</h2>
                <p className="text-muted-foreground">
                  We are committed to protecting your privacy. All personal information collected will be stored securely and used only for the purposes outlined in our Privacy Policy. We do not sell or share your personal data with third parties without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Account Security</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account credentials. You agree to accept responsibility for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. User Content</h2>
                <p className="text-muted-foreground">
                  You retain all rights to the content you create and store in your workspace. By using our service, you grant us permission to store, backup, and display your content solely for the purpose of providing the service to you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Service Availability</h2>
                <p className="text-muted-foreground">
                  While we strive to maintain 99.9% uptime, we do not guarantee that the service will be available at all times. We reserve the right to modify, suspend, or discontinue the service with or without notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>
            </div>
          </ScrollArea>
        </div>

        <div className="bg-accent/50 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Checkbox 
              id="accept-terms" 
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked === true)}
              className="mt-1"
            />
            <label 
              htmlFor="accept-terms" 
              className="text-sm font-medium leading-relaxed cursor-pointer"
            >
              I have read and agree to the Terms and Conditions, Privacy Policy, and all other applicable policies. I understand that my use of this service is subject to these terms.
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/onboarding/payment">
            <Button 
              size="lg"
              disabled={!accepted}
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

export default Terms;
