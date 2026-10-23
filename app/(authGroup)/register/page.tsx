import RegisterForm from "../_components/RegisterFrom";
import AuthLayoutShell from "../_components/AuthLayoutShell";

export default function RegisterPage() {
  return (
    <AuthLayoutShell
      eyebrow="Join RentNest"
      title="Create your account"
      subtitle="Join thousands of tenants and verified landlords finding home together."
      heroImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
      quoteText="Listing our properties on RentNest connected us with serious, reliable tenants within days. The dashboard makes managing leases effortless."
      quoteAuthor="Mahmudul Hasan"
      quoteRole="Property Owner & Landlord, Gulshan"
      highlights={[
        "Quick onboarding for both Tenants and Landlords",
        "Direct communication, transparent fees, zero hidden costs",
        "Bank-grade security and verified identity protection",
      ]}
    >
      <RegisterForm />
    </AuthLayoutShell>
  );
}
