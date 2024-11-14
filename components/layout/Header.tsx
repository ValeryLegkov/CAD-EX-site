import Link from "next/link";
import { ContactButton } from "@/components/layout/ContactButton";

export function Header() {
  return (
    <header className="border-b text-secondary-foreground">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold">
          LOGO/NAME Company
        </Link>

        <ContactButton />
      </nav>
    </header>
  );
}
