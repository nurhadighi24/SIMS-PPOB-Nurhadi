export default function CardHistory({
  type,
  amount,
  timeStamp,
  classNameType,
  classNameAmount,
  desc,
}) {
  return (
    <div className="flex justify-between border border-gray-300 rounded-md p-5">
      <div>
        <div className="flex items-center gap-3">
          <p className={classNameType}>{type}</p>
          <p className={classNameAmount}>
            {Number(amount).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
        <p className="text-gray-300 text-sm">{timeStamp}</p>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
