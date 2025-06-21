export default function ProductosPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Handmade Mug</h3>
          <p className="text-gray-600">by Ana Pérez</p>
          <p className="text-blue-600 font-semibold mt-2">$15.00</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Wooden Bowl</h3>
          <p className="text-gray-600">by José Ramírez</p>
          <p className="text-blue-600 font-semibold mt-2">$25.00</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Woven Bag</h3>
          <p className="text-gray-600">by Lucía Gómez</p>
          <p className="text-blue-600 font-semibold mt-2">$30.00</p>
        </div>
      </div>
    </div>
  );
}
