import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import Input from "../components/input";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import Button from "../components/button";

export default function Register() {
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
          Lengkapi data untuk membuat akun
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

          <div className="relative my-5">
            <IoPersonOutline className="absolute left-2 top-4 text-gray-300" />
            <Input
              type="text"
              className="w-full px-7 py-3 border border-gray-300 rounded-sm"
              placeholder="Nama depan"
            />
          </div>

          <div className="relative">
            <IoPersonOutline className="absolute left-2 top-4 text-gray-300" />
            <Input
              type="text"
              className="w-full px-7 py-3 border border-gray-300 rounded-sm"
              placeholder="Nama belakang"
            />
          </div>

          <div className="relative mt-5 mb-7">
            <CiLock className="absolute left-2 top-4 text-gray-300" />
            <Input
              type={showPassword ? "text" : "password"}
              className="w-full px-7 py-3 border border-gray-300 rounded-sm"
              placeholder="Buat password"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              {showIcon ? (
                <FaRegEyeSlash onClick={handleShowPassword} />
              ) : (
                <FaRegEye onClick={handleShowPassword} />
              )}
            </div>
          </div>

          <div className="relative mt-5 mb-7">
            <CiLock className="absolute left-2 top-4 text-gray-300" />
            <Input
              type={showPassword ? "text" : "password"}
              className="w-full px-7 py-3 border border-gray-300 rounded-sm"
              placeholder="Konfirmasi password"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              {showIcon ? (
                <FaRegEyeSlash onClick={handleShowPassword} />
              ) : (
                <FaRegEye onClick={handleShowPassword} />
              )}
            </div>
          </div>

          <Button
            className="w-full bg-red-600 cursor-pointer py-3 rounded-sm text-white mb-5"
            desc="Registrasi"
          />
        </form>

        <p className="text-gray-500">
          Sudah punya akun? login{" "}
          <a href="/login" className="text-red-600">
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
