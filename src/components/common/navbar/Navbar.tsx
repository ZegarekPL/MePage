const buttonLayout = "bg-blue-400 px-2 py-1 rounded-lg";
// export default function Navbar() {
//   return (
//     <div className="flex items-center h-[9vh] bg-transparent justify-between px-10 md:px-20">
//       <div className="p-2">
//         <button className="text-start">
//           <h1>Wiktor Mazur</h1>
//           <h5>Front end developer</h5>
//         </button>
//       </div>
//       <div className="flex gap-x-12">
//         <button className={buttonLayout}>About</button>
//         <button className={buttonLayout}>Work</button>
//         <button className={buttonLayout}>Contact</button>
//       </div>
//     </div>
//   );
// }
export default function Navbar() {
  return (
    <div className="flex items-center h-[9vh] bg-transparent justify-between px-10 md:px-20">
      <div className="flex gap-x-12">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
