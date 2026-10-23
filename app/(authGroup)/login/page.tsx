import LoginForm from "../_components/LoginFrom";
import AuthLayoutShell from "../_components/AuthLayoutShell";

export default function LoginPage() {
  return (
    <AuthLayoutShell
      eyebrow="Welcome Back"
      title="Sign in to RentNest"
      subtitle="Access your bookings, saved homes, and personalized dashboard."
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      quoteText="RentNest completely changed how we found our home. Verified listings and direct booking took away all the typical rental stress."
      quoteAuthor="Sarah Jenkins"
      quoteRole="Tenant in Dhanmondi, Dhaka"
      highlights={[
        "Access verified property listings instantly",
        "Seamless digital lease & secure booking management",
        "Direct communication with trusted landlords",
      ]}
    >
      <LoginForm />
    </AuthLayoutShell>
  );
}
