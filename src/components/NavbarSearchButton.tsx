// Updated NavbarSearchButton.jsx with responsive classes
"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavbarSearchButtonProps {
  className?: string;
}

export default function NavbarSearchButton({
  className,
}: NavbarSearchButtonProps) {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push("/search");
  };

  return (
    <button
      onClick={handleSearchClick}
      className={`p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 md:ml-2 md:order-none order-0 ${
        className || ""
      }`}
      aria-label="Search"
    >
      <Search
        size={20}
        className="text-gray-300 hover:text-white transition-colors"
      />
    </button>
  );
}
