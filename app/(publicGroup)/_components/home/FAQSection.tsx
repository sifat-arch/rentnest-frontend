import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book?",
    answer:
      "Browse properties, open a listing you like, and click Book. Confirm your details and complete the secure checkout to reserve your stay or rental period.",
  },
  {
    question: "Is payment secure?",
    answer:
      "Yes. All payments on RentNest go through encrypted, protected payment flows. You will always see clear pricing before confirming.",
  },
  {
    question: "Can landlords list properties?",
    answer:
      "Absolutely. Create a landlord account, add your property details and photos, then publish. Verified listings appear for tenants to discover and book.",
  },
  {
    question: "How do reviews work?",
    answer:
      "After a completed booking, tenants can leave a rating and review. Honest feedback helps the community choose trusted properties and landlords.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Support</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Quick answers to the most common questions about booking, payments,
            and listing on RentNest.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="px-3"
              >
                <AccordionTrigger className="py-4 text-sm font-semibold hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
