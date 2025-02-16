import Button from "../components/button";
import CardAmountTopUp from "../components/cardAmountTopUp";
import Input from "../components/input";
import Layout from "../components/layout";
import { MdOutlineMoney } from "react-icons/md";

export default function TopUp() {
  return (
    <>
      <Layout />
      <div className="px-20">
        <p className="text-xl">Silahkan masukan</p>
        <p className="text-4xl font-bold">Nominal Top Up</p>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/2 mt-5">
            <div className="relative mb-5">
              <MdOutlineMoney className="absolute left-2 top-4 text-gray-300" />
              <Input
                type="number"
                className="w-full px-7 py-3 border border-gray-300 rounded-sm"
                placeholder="Masukkan nominal top up"
              />
            </div>
            <Button
              desc="Top Up"
              className="bg-red-600 text-white w-full py-3 rounded cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-3 gap-3 w-1/2 mt-5">
            <CardAmountTopUp
              desc="10000"
              className="px-4 py-3 border rounded cursor-pointer"
            />
            <CardAmountTopUp
              desc="20000"
              className="px-4 py-3 border rounded cursor-pointer"
            />
            <CardAmountTopUp
              desc="50000"
              className="px-4 py-3 border rounded cursor-pointer"
            />
            <CardAmountTopUp
              desc="100000"
              className="px-4 py-3 border rounded cursor-pointer"
            />
            <CardAmountTopUp
              desc="250000"
              className="px-4 py-3 border rounded cursor-pointer"
            />
            <CardAmountTopUp
              desc="500000"
              className="px-4 py-3 border rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
