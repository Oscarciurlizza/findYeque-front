import BusinessPreview from "@modules/business/components/business-preview";
import CategoriesSelect from "./categories-select";

export default function FilteredBusinesses() {
  return (
    <div className="flex flex-col gap-y-4">
      <section className="flex justify-between items-center">
        <p>
          Mostrando <span className="font-bold">1-10</span> de{" "}
          <span className="font-bold">10</span> resultados
        </p>
      </section>
      <section className="flex items-center gap-x-4">
        <CategoriesSelect />
      </section>
    </div>
  );
}
