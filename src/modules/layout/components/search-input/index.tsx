"use client";

import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const searchParams = new URLSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Input
      type="search"
      placeholder="Busca tu negocio favorito..."
      className="md:w-[300px] lg:w-[500px] border-black"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
