import Link from "next/link";

export const ContactButton = () => {
  return (
    <Link
      href="/contact"
      className="bg-zinc-900 text-white rounded-lg hover:bg-zinc-600 transition-all px-4 py-2 sm:px-5 sm:py-2  text-sm sm:text-base "
      aria-label="Contact us for more information"
    >
      Contact us
    </Link>
  );
};
