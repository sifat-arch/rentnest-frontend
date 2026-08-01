import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is RentNest?",
    answer:
      "RentNest is a rental marketplace that helps people across Bangladesh discover verified homes, book securely, and connect with trusted landlords — all in one place.",
  },
  {
    question: "How do I book a property?",
    answer:
      "Browse listings, open a property you like, and click Book. Confirm your details and complete the secure checkout to reserve your rental.",
  },
  {
    question: "Can landlords list their property?",
    answer:
      "Yes. Create a landlord account, add your property details and photos, then publish. Verified listings become available for tenants to discover and book.",
  },
  {
    question: "Is RentNest secure?",
    answer:
      "Absolutely. We review listings, protect bookings, and use encrypted payment flows so both tenants and landlords can rent with confidence.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are processed through a secure digital checkout with clear pricing shown before you confirm. You will always know what you are paying for.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">Support</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Clear answers about RentNest, booking, listings, security, and
            payments.
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
