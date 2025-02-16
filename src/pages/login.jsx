import { MdAlternateEmail } from "react-icons/md";
import Input from "../components/input";
import Button from "../components/button";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setShowIcon(!showIcon);
  };
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex items gap-3">
          <img src="/logo.png" alt="logo" />
          <h1 className="text-2xl font-semibold">SIMS PPOB</h1>
        </div>

        <h1 className="text-2xl font-semibold my-7">
          Masuk atau buat akun untuk memulai
        </h1>

        <form className="w-3/5">
          <div className="relative">
            <MdAlternateEmail className="absolute left-2 top-4 text-gray-300" />
            <Input
              type="email"
              className="w-full px-7 py-3 border border-gray-300 rounded-sm"
              placeholder="Masukkan email anda"
            />
          </div>

          <div className="relative mt-5 mb-7">
            <CiLock className="absolute left-2 top-4 text-gray-300" />
            <Input
              type={showPassword ? "text" : "password"}
              className="w-full px-7 py-3 border border-gray-300 rounded-sm"
              placeholder="Masukkan password anda"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              {showIcon ? (
                <FaRegEyeSlash onClick={handleShowPassword} />
              ) : (
                <FaRegEye onClick={handleShowPassword} />
              )}
            </div>
          </div>

          {/* <Button
            className="w-full bg-red-600 cursor-pointer py-3 rounded-sm text-white mb-5"
            desc="Masuk"
          /> */}

          <a
            href="/"
            className="w-full bg-red-600 cursor-pointer py-3 rounded-sm text-white mb-5"
          >
            Masuk
          </a>
        </form>

        <p className="text-gray-500">
          belum punya akun? registrasi{" "}
          <a href="/register" className="text-red-600">
            di sini
          </a>
        </p>
      </div>

      <div className="w-1/2">
        <img
          className="h-screen w-full"
          src="/illustrasi-login.png"
          alt="ilustrasi login"
        />
      </div>
    </div>
  );
}
