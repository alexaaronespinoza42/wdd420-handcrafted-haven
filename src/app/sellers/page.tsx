export default function SellersPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Sellers</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Ana Pérez</h3>
          <p className="text-gray-600">Ceramics</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">José Ramírez</h3>
          <p className="text-gray-600">Woodworking</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Lucía Gómez</h3>
          <p className="text-gray-600">Textiles</p>
        </div>
      </div>
    </div>
  );
}
