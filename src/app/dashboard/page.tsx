export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Products</h3>
          <p className="text-gray-600">54</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Sellers</h3>
          <p className="text-gray-600">12</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Sales</h3>
          <p className="text-gray-600">$1,250.00</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Reviews</h3>
          <p className="text-gray-600">87</p>
        </div>
      </div>
    </div>
  );
}
