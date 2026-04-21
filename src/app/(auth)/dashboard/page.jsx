import ProductsList from './ProductsList' 

export default function Dashboard() {
  return (
    <div className="p-10 bg-pink-100 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Dashboard</h1>
      <div>
        <ProductsList />
      </div>
    </div>
  );
}
