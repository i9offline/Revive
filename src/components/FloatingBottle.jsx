

export default function FloatingBottle() {
  return (
    <div className="relative w-72 h-auto md:w-[400px]">
      <img
        src={import.meta.env.BASE_URL + "/images/revive-bottle.png"}
        alt="Revive Bottle"
        className="w-full h-auto drop-shadow-2xl"
      />
    </div>
  );
}
