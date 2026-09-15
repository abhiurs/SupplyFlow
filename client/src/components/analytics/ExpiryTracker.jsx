const ExpiryTracker = ({ products }) => {

  const today = new Date();

  const expiryProducts = products
    .map((item) => {

      const expiryDate = new Date(
        item.ExpiryDate
      );

      const diffTime =
        expiryDate - today;

      const daysLeft = Math.ceil(
        diffTime /
          (1000 * 60 * 60 * 24)
      );

      return {
        ...item,
        daysLeft,
      };

    })
    .filter(
      (item) => item.daysLeft <= 60
    )
    .sort(
      (a, b) =>
        a.daysLeft - b.daysLeft
    );

  return (

    <div className="
      bg-white
      rounded-3xl
      p-7
      border border-slate-100
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
    ">

      {/* HEADER */}

      <div className="mb-6">

        <h2 className="
          text-2xl
          font-bold
          text-slate-800
        ">
          Expiry Tracking
        </h2>

        <p className="
          text-slate-400
          mt-1
        ">
          Products nearing expiry
        </p>

      </div>

      {/* PRODUCTS */}

      <div className="space-y-4">

        {expiryProducts.map(
          (item, index) => {

            let statusColor =
              "bg-green-100 text-green-600";

            if (item.daysLeft <= 7) {

              statusColor =
                "bg-red-100 text-red-600";

            } else if (
              item.daysLeft <= 30
            ) {

              statusColor =
                "bg-orange-100 text-orange-600";

            }

            return (

              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-between
                  border
                  border-slate-100
                  rounded-2xl
                  p-4
                  hover:bg-slate-50
                  transition
                "
              >

                {/* LEFT */}

                <div>

                  <h3 className="
                    font-semibold
                    text-slate-700
                  ">
                    {item.Product}
                  </h3>

                  <p className="
                    text-sm
                    text-slate-400
                    mt-1
                  ">
                    Batch: {item.Batch}
                  </p>

                </div>

                {/* RIGHT */}

                <div className="text-right">

                  <p className="
                    text-sm
                    text-slate-400
                  ">
                    Expiry:
                  </p>

                  <p className="
                    font-medium
                    text-slate-700
                  ">
                    {item.ExpiryDate}
                  </p>

                  <span
                    className={`
                      inline-block
                      mt-2
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      ${statusColor}
                    `}
                  >

                    {item.daysLeft} days left

                  </span>

                </div>

              </div>

            );

          }
        )}

      </div>

    </div>

  );

};

export default ExpiryTracker;