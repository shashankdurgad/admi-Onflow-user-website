import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { useState } from "react";

const Payment = () => {
  const [plan, setPlan] = useState("pro");

  return (
    <OnboardingLayout currentStep={5}>
      <div className="w-full max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Choose your plan
        </h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Start with a 14-day free trial. No credit card required.
        </p>

        {/* Plan Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card 
            className={`p-6 cursor-pointer transition-all duration-300 ${
              plan === "free" ? "border-primary shadow-lg" : "hover:border-primary/50"
            }`}
            onClick={() => setPlan("free")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-4">$0</div>
              <p className="text-muted-foreground mb-6">Perfect for individuals</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ Up to 10 pages</li>
                <li>✓ 5 GB storage</li>
                <li>✓ Basic templates</li>
                <li>✓ Personal workspace</li>
              </ul>
            </div>
          </Card>

          <Card 
            className={`p-6 cursor-pointer transition-all duration-300 relative ${
              plan === "pro" ? "border-primary shadow-lg scale-105" : "hover:border-primary/50"
            }`}
            onClick={() => setPlan("pro")}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              POPULAR
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4">
                $12<span className="text-lg text-muted-foreground">/mo</span>
              </div>
              <p className="text-muted-foreground mb-6">For power users</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ Unlimited pages</li>
                <li>✓ 100 GB storage</li>
                <li>✓ Premium templates</li>
                <li>✓ Team collaboration</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </Card>

          <Card 
            className={`p-6 cursor-pointer transition-all duration-300 ${
              plan === "enterprise" ? "border-primary shadow-lg" : "hover:border-primary/50"
            }`}
            onClick={() => setPlan("enterprise")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <p className="text-muted-foreground mb-6">For organizations</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ Everything in Pro</li>
                <li>✓ Unlimited storage</li>
                <li>✓ Advanced security</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Payment Form */}
        <Card className="p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <CreditCard className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Payment details</h2>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="cardName">Cardholder name</Label>
              <Input 
                id="cardName"
                placeholder="John Doe"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="cardNumber">Card number</Label>
              <Input 
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="mt-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry date</Label>
                <Input 
                  id="expiry"
                  placeholder="MM/YY"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input 
                  id="cvv"
                  placeholder="123"
                  type="password"
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="billingAddress">Billing address</Label>
              <Input 
                id="billingAddress"
                placeholder="123 Main St, City, Country"
                className="mt-2"
              />
            </div>

            <div className="bg-accent/50 rounded-lg p-4 flex items-start gap-3">
              <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium mb-1">Secure payment</p>
                <p className="text-muted-foreground">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center mt-8">
          <Link to="/onboarding/complete">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Complete setup <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Payment;
