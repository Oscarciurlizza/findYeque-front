"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Filter from "@modules/common/icons/filter";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoriesSelect() {
  const searchParams = new URLSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchByCategory = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleSearchByCategory}>
      <SelectTrigger className="w-[200px] border-black border-b-4 border-r-4">
        <Filter />
        <SelectValue placeholder="Categorias" />
      </SelectTrigger>
      <SelectContent className="border-black">
        <SelectGroup>
          <SelectItem value="phone">Phone</SelectItem>
          <SelectItem value="food">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
