import BusinessContact from "@modules/business/components/business-contact";
import BusinessDescription from "@modules/business/components/business-description";
import BusinessMenu from "@modules/business/components/business-menu";
import BusinessTitle from "@modules/business/components/business-title";

export default function BusinessDetail() {
  return (
    <main style={{ height: 'calc(100vh - 70.9px)', overflowY: 'auto' }}>
      <BusinessTitle />
      <section className="container">
        <BusinessMenu />
        <BusinessContact />
        <BusinessDescription />
      </section>
    </main>
  );
}
