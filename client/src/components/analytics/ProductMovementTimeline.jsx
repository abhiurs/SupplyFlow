const ProductMovementTimeline = ({
  products,
}) => {

  const recentMovements = [...products]
    .sort(
      (a, b) =>
        new Date(b.Date) -
        new Date(a.Date)
    )
    .slice(0, 6);

  return (

    <div className="
      bg-white
      rounded-3xl
      p-6
      border border-slate-100
      shadow-sm
    ">

      <div className="mb-6">

        <h2 className="
          text-2xl
          font-bold
          text-slate-800
        ">
          Product Movement Timeline
        </h2>

        <p className="text-slate-400 mt-1">
          Recent inventory activities
        </p>

      </div>

      <div className="space-y-5">

        {recentMovements.map(
          (item, index) => {

            const isIncoming =
              item.Movement === "Incoming";

            return (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                {/* DOT */}

                <div
                  className={`
                    w-4
                    h-4
                    rounded-full
                    mt-2
                    ${
                      isIncoming
                        ? "bg-green-500"
                        : "bg-red-500"
                    }
                  `}
                />

                {/* CONTENT */}

                <div className="
                  flex-1
                  border-b
                  border-slate-100
                  pb-4
                ">

                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <h3 className="
                      font-semibold
                      text-slate-700
                    ">
                      {item.Product}
                    </h3>

                    <span className="
                      text-sm
                      text-slate-400
                    ">
                      {item.Date}
                    </span>

                  </div>

                  <p className="mt-1 text-slate-500">

                    {isIncoming
                      ? "Stock Added"
                      : "Stock Removed"}

                    {" • "}

                    <span
                      className={
                        isIncoming
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {item.Quantity} units
                    </span>

                  </p>

                </div>

              </div>

            );

          }
        )}

      </div>

    </div>

  );

};

export default ProductMovementTimeline;