import BusinessSkeleton from "@modules/business/components/business-skeleton";
import BusinessGrid from "@modules/home/components/filtered-businesses/business-grid";
import BusinessSummary from "@modules/home/components/filtered-businesses/business-summary";
import CategoriesSelect from "@modules/home/components/filtered-businesses/categories-select";
import Map from "@modules/home/components/map";
import { Suspense } from "react";

export default function HomePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
    page?: number;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";

  return (
    <div className="flex h-full">
      <section className="w-2/3 p-4 overflow-auto h-full scroll-retro border-r border-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-y-4">
            <section className="flex justify-between items-center gap-x-4">
              <CategoriesSelect />
              <BusinessSummary />
            </section>
            <Suspense key={query + currentPage} fallback={<BusinessSkeleton />}>
              <BusinessGrid
                query={query}
                category={category}
                page={currentPage}
              />
            </Suspense>
          </div>
        </div>
      </section>
      <section className="w-1/3 flex flex-col bg-sky-50 h-full">
        <Map />
      </section>
    </div>
  );
}
