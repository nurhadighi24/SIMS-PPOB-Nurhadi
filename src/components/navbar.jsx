export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center my-7">
        <a className="flex items gap-3 pl-20" href="/">
          <img src="/logo.png" alt="logo" />
          <h1 className="text-2xl font-semibold">SIMS PPOB</h1>
        </a>
        <div className="flex items-center gap-10 pr-20">
          <a href="/topup">Top Up</a>
          <a href="/history">Transaction</a>
          <a href="/profile">Akun</a>
        </div>
      </div>
      <hr className="text-gray-300" />
    </>
  );
}
