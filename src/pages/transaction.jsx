import { MdOutlineMoney } from "react-icons/md";
import Layout from "../components/layout";
import Input from "../components/input";
import Button from "../components/button";

export default function Transaction() {
  return (
    <>
      <Layout />
      <div className="px-20">
        <p>Pembayaran</p>
        <div className="flex items-center gap-3 font-semibold">
          <img src="/logo.png" alt="services" />
          <p className="text-xl">Services</p>
        </div>
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
      </div>
    </>
  );
}
