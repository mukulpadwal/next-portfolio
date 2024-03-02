import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Mukul Padwal | Contact",
  description: "Portfolio Website",
  keywords: ["mukulpadwal", "mukul", "padwal"],
};

export default function ContactPageLayout({ children }) {
  return (
    <section>
      {children}
      <Toaster />
    </section>
  );
}
