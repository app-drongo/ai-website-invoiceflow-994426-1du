'use client'

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "billingMonthly",
 *   "text-5": "billingAnnual",
 *   "text-6": "billingAnnualBadge",
 *   "text-7": "plan1Name",
 *   "text-8": "plan1Description",
 *   "text-9": "plan1Price",
 *   "text-10": "plan1CTA",
 *   "link-0": "plan1CTAHref",
 *   "text-11": "plan2Name",
 *   "text-12": "plan2Description",
 *   "text-13": "plan2Price",
 *   "text-14": "plan2Period",
 *   "text-15": "plan2Badge",
 *   "text-16": "plan2CTA",
 *   "link-1": "plan2CTAHref",
 *   "text-17": "plan2Trial",
 *   "text-18": "plan3Name",
 *   "text-19": "plan3Description",
 *   "text-20": "plan3Price",
 *   "text-21": "plan3Badge",
 *   "text-22": "plan3CTA",
 *   "link-2": "plan3CTAHref",
 *   "text-23": "bottomTitle",
 *   "text-24": "bottomDescription",
 *   "text-25": "bottomCTA",
 *   "link-3": "bottomCTAHref"
 * }
 */

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface PricingProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  billingMonthly?: string;
  billingAnnual?: string;
  billingAnnualBadge?: string;
  plan1Name?: string;
  plan1Description?: string;
  plan1Price?: string;
  plan1CTA?: string;
  plan1CTAHref?: string;
  plan2Name?: string;
  plan2Description?: string;
  plan2Price?: string;
  plan2Period?: string;
  plan2Badge?: string;
  plan2CTA?: string;
  plan2CTAHref?: string;
  plan2Trial?: string;
  plan3Name?: string;
  plan3Description?: string;
  plan3Price?: string;
  plan3Badge?: string;
  plan3CTA?: string;
  plan3CTAHref?: string;
  bottomTitle?: string;
  bottomDescription?: string;
  bottomCTA?: string;
  bottomCTAHref?: string;
}

export default function Pricing({
  badge = "Pricing",
  mainTitle = "Simple, Transparent",
  mainTitleHighlight = "Pricing",
  mainDescription = "Choose the perfect plan for your needs. No hidden fees, no surprises. Cancel or upgrade anytime.",
  billingMonthly = "Monthly",
  billingAnnual = "Annual",
  billingAnnualBadge = "Save 20%",
  plan1Name = "Starter",
  plan1Description = "Perfect for individuals and small projects",
  plan1Price = "Free",
  plan1CTA = "Get Started",
  plan1CTAHref = "/signup",
  plan2Name = "Professional",
  plan2Description = "Best for growing businesses and teams",
  plan2Price = "$29",
  plan2Period = "/month",
  plan2Badge = "Most Popular",
  plan2CTA = "Start Free Trial",
  plan2CTAHref = "/signup",
  plan2Trial = "14-day free trial • No credit card required",
  plan3Name = "Enterprise",
  plan3Description = "For large organizations with custom needs",
  plan3Price = "Custom",
  plan3Badge = "Contact Sales",
  plan3CTA = "Contact Sales",
  plan3CTAHref = "/contact",
  bottomTitle = "Need something different?",
  bottomDescription = "We offer custom solutions for enterprises with specific requirements. Let's discuss how we can help your organization succeed.",
  bottomCTA = "Schedule a Demo",
  bottomCTAHref = "/demo"
}: PricingProps) {
  const router = useRouter()

  const handlePlan1CTA = () => {
    if (plan1CTAHref.startsWith('http://') || plan1CTAHref.startsWith('https://')) {
      window.open(plan1CTAHref, '_blank', 'noopener,noreferrer')
    } else {
      router.push(plan1CTAHref)
    }
  }

  const handlePlan2CTA = () => {
    if (plan2CTAHref.startsWith('http://') || plan2CTAHref.startsWith('https://')) {
      window.open(plan2CTAHref, '_blank', 'noopener,noreferrer')
    } else {
      router.push(plan2CTAHref)
    }
  }

  const handlePlan3CTA = () => {
    if (plan3CTAHref.startsWith('http://') || plan3CTAHref.startsWith('https://')) {
      window.open(plan3CTAHref, '_blank', 'noopener,noreferrer')
    } else {
      router.push(plan3CTAHref)
    }
  }

  const handleBottomCTA = () => {
    if (bottomCTAHref.startsWith('http://') || bottomCTAHref.startsWith('https://')) {
      window.open(bottomCTAHref, '_blank', 'noopener,noreferrer')
    } else {
      router.push(bottomCTAHref)
    }
  }

  const plans = [
    {
      name: plan1Name,
      description: plan1Description,
      price: plan1Price,
      period: "",
      badge: null,
      features: [
        "Up to 3 projects",
        "Basic templates",
        "Community support",
        "1GB storage",
        "Basic analytics"
      ],
      cta: plan1CTA,
      ctaHandler: handlePlan1CTA,
      popular: false
    },
    {
      name: plan2Name,
      description: plan2Description,
      price: plan2Price,
      period: plan2Period,
      badge: plan2Badge,
      features: [
        "Unlimited projects",
        "Premium templates",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Custom domain",
        "Team collaboration",
        "API access"
      ],
      cta: plan2CTA,
      ctaHandler: handlePlan2CTA,
      popular: true
    },
    {
      name: plan3Name,
      description: plan3Description,
      price: plan3Price,
      period: "",
      badge: plan3Badge,
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Dedicated account manager",
        "Custom training"
      ],
      cta: plan3CTA,
      ctaHandler: handlePlan3CTA,
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable-id="text-0">{badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable-id="text-1">{mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable-id="text-2">{mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span data-editable-id="text-3">{mainDescription}</span>
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              <span data-editable-id="text-4">{billingMonthly}</span>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <span data-editable-id="text-5">{billingAnnual}</span>
              <Badge variant="secondary" className="ml-2 text-xs">
                <span data-editable-id="text-6">{billingAnnualBadge}</span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const nameId = `text-${7 + (index * 6)}`
            const descId = `text-${8 + (index * 6)}`
            const priceId = `text-${9 + (index * 6)}`
            const ctaId = `text-${10 + (index * 6)}`
            
            return (
              <Card 
                key={index}
                className={cn(
                  "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                  plan.popular 
                    ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                    : "border-border/50 hover:border-primary/20"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="size-3 mr-1" />
                      <span data-editable-id="text-15">{plan.badge}</span>
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                )}

                <CardHeader className="relative text-center pb-8">
                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="mb-4 mx-auto w-fit">
                      <span data-editable-id={index === 2 ? "text-21" : undefined}>
                        {plan.badge}
                      </span>
                    </Badge>
                  )}
                  
                  <CardTitle className="text-2xl mb-2">
                    <span data-editable-id={nameId}>{plan.name}</span>
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    <span data-editable-id={descId}>{plan.description}</span>
                  </CardDescription>
                  
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">
                      <span data-editable-id={priceId}>{plan.price}</span>
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">
                        <span data-editable-id="text-14">{plan.period}</span>
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={cn(
                      "w-full text-base py-6",
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90" 
                        : ""
                    )}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={plan.ctaHandler}
                    data-editable-id={ctaId}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    {plan.cta}
                  </Button>

                  {plan.name === plan2Name && (
                    <p className="text-center text-sm text-muted-foreground">
                      <span data-editable-id="text-17">{plan2Trial}</span>
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            <span data-editable-id="text-23">{bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            <span data-editable-id="text-24">{bottomDescription}</span>
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleBottomCTA}
            data-editable-id="text-25"
          >
            {bottomCTA}
          </Button>
        </div>
      </div>
    </section>
  )
}