import BusinessDetail from "@modules/business/templates/business-detail";

export default function BusinessPage({ params }: { params: { slug: string } }) {
  return <BusinessDetail />;
}
