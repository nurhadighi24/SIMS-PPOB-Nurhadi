import CardServices from "../components/cardServices";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout />

      <section className="flex items-center gap-5">
        <CardServices src="/logo.png" title="services" />
        <CardServices src="/logo.png" title="services" />
        <CardServices src="/logo.png" title="services" />
        <CardServices src="/logo.png" title="services" />
      </section>

      <section className="px-20">
        <p className="mb-3 font-semibold">Temukan Promo Menarik</p>
        <div className="flex items-center overflow-x-auto gap-20" id="banner">
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
          <p>Banner</p>
        </div>
      </section>
    </>
  );
}
