const SupplierBillsPayments = () => {

  return (

    <div className="space-y-6">

      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p>Total Bills</p>
          <h2 className="text-3xl font-bold">₹2,75,000</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p>Paid Amount</p>
          <h2 className="text-3xl font-bold text-green-600">₹1,50,000</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p>Outstanding</p>
          <h2 className="text-3xl font-bold text-orange-500">₹1,25,000</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p>Overdue</p>
          <h2 className="text-3xl font-bold text-red-500">₹25,000</h2>
        </div>

      </div>

    </div>

  );

};

export default SupplierBillsPayments;