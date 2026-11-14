import HeroSection from "@/components/privacy/HeroSection";
import PolicyContent from "@/components/privacy/PolicyContent";
import CtaSection from "@/components/privacy/CtaSection";

export const metadata = {
  title: "Privacy Policy | Easton",
  description:
    "Read Easton's privacy policy and learn how website information is handled.",
  openGraph: {
    title: "Privacy Policy | Easton",
    description:
      "Read Easton's privacy policy and learn how website information is handled.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="min-h-screen bg-white font-sans text-gray-700">
      <HeroSection />
      <PolicyContent />
      <CtaSection />
    </main>
  );
}