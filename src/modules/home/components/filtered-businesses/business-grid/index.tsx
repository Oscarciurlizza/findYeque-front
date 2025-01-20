import BusinessPreview from "@modules/business/components/business-preview";

async function getBusinesses(query: string, page: number): Promise<any[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?name=${query}`
  );
  const data = await response.json();
  return data;
}

export default async function BusinessGrid({
  query,
  category,
  page,
}: {
  query: string;
  category: string;
  page: number;
}) {
  const businesses = await getBusinesses(query, page);

  console.log(businesses);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
      {businesses.map((business) => (
        <BusinessPreview key={business.id} business={business} />
      ))}
    </section>
  );
}
