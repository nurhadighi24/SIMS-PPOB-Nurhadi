export default function HeroContent({ src, name, balance }) {
  return (
    <div className="flex items-center justify-between px-20 my-5">
      <div className="w-1/2">
        <img src={src} alt="profile image" className="w-[5rem]" />
        <p className="text-2xl">Selamat datang,</p>
        <p className="text-4xl font-semibold">{name}</p>
      </div>
      <div className="w-1/2 bg-red-500 p-5 rounded-2xl">
        <p className="text-white">Saldo anda</p>
        <div className="flex items-center gap-3 text-white text-4xl my-2 font-bold">
          <p>
            {Number(balance).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <p>Lihat saldo</p>
          <p>mata</p>
        </div>
      </div>
    </div>
  );
}
