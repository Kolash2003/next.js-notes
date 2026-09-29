import ContactForm from "@/components/contactForm";
import { createContact } from "@/actions/contact";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Contact us</h1>
      <ContactForm action={createContact} />
    </div>
  );
}
