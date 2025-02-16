import Layout from "../components/layout";
import CardHistory from "../components/cardHistory";
import Button from "../components/button";

export default function History() {
  return (
    <>
      <Layout />
      <div className="px-20">
        <p className="text-xl mb-4">Semua Transaksi</p>
        <div className="grid grid-cols-1 gap-3">
          <CardHistory
            classNameType="text-green-400 text-xl font-semibold"
            classNameAmount="text-green-400 text-xl font-semibold"
            amount="10000"
            type="+"
            timeStamp="17 Agustus 2024"
            desc="Top up saldo"
          />
          <CardHistory
            classNameType="text-green-400 text-xl font-semibold"
            classNameAmount="text-green-400 text-xl font-semibold"
            amount="10000"
            type="+"
            timeStamp="17 Agustus 2024"
            desc="Top up saldo"
          />
          <CardHistory
            classNameType="text-green-400 text-xl font-semibold"
            classNameAmount="text-green-400 text-xl font-semibold"
            amount="10000"
            type="+"
            timeStamp="17 Agustus 2024"
            desc="Top up saldo"
          />
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <Button
            className="text-orange-600 text-center cursor-pointer"
            desc="Show More"
          />
        </div>
      </div>
    </>
  );
}
