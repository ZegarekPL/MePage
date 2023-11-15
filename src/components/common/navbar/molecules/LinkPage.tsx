export default function LinkPage() {
  const buttonLayout = "bg-blue-400 px-2 py-1 rounded-lg";

  return (
    <div className="flex gap-x-12">
      <button className={buttonLayout}>About</button>
      <button className={buttonLayout}>Work</button>
      <button className={buttonLayout}>Contact</button>
    </div>
  );
}
