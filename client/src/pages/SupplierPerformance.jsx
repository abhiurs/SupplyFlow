const SupplierPerformance = () => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p>On-Time Delivery</p>
        <h2 className="text-4xl font-bold text-green-600">92%</h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p>Average Lead Time</p>
        <h2 className="text-4xl font-bold">5 Days</h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p>Total Orders</p>
        <h2 className="text-4xl font-bold">124</h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <p>Return Rate</p>
        <h2 className="text-4xl font-bold text-red-500">2%</h2>
      </div>

    </div>

  );

};

export default SupplierPerformance;