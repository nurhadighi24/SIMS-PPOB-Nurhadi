export default function CardServices({ src, title }) {
  return (
    <a className="px-20 my-10" href="/transaction">
      <div className="p-8 bg-orange-400 rounded">
        <img src={src} alt="services" />
      </div>
      <p className="text-center">{title}</p>
    </a>
  );
}
