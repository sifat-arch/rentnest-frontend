import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I book a property?",
    answer:
      "Browse listings, open a property you like, and click Book. Confirm your details and complete the secure checkout to reserve your rental.",
  },
  {
    question: "How do landlords add listings?",
    answer:
      "Create a landlord account, add your property details and photos, then publish. Once verified, your listing becomes available for tenants to discover.",
  },
  {
    question: "Are online payments secure?",
    answer:
      "Yes. All payments on RentNest go through encrypted, protected payment flows with clear pricing shown before you confirm.",
  },
  {
    question: "Can I leave reviews?",
    answer:
      "After a completed booking, tenants can leave a rating and review. Honest feedback helps others choose trusted properties and landlords.",
  },
  {
    question: "Is RentNest free to use?",
    answer:
      "Browsing properties is free. Booking and listing may involve platform fees depending on the rental — you will always see costs clearly before confirming.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Support</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Quick answers about booking, listings, payments, reviews, and using
            RentNest.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-2 shadow-sm sm:p-4">
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
