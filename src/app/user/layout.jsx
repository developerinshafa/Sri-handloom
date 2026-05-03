// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   LayoutDashboard,
//   User,
//   ListOrdered,
//   Heart,
//   Settings,
// } from "lucide-react";

// export default function UserLayout({ children }) {


// const pathname = usePathname();

//    const navItems = [
//     { name: "Dashboard", href: "/user", icon: LayoutDashboard },
//     { name: "Profile", href: "/user/profile", icon: User },
//     { name: "Orders", href: "/user/order", icon: ListOrdered },
//     { name: "Wishlist", href: "/user/wishlist", icon: Heart },
//     { name: "Settings", href: "/user/settings", icon: Settings },
//   ];

//   return (
//     <div className="flex min-h-screen bg-[#F5F5F4]">

//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r border-gray-50 shadow-sm p-5 flex flex-col">
      
//       {/* Title */}
//       <h2 className="text-2xl font-bold mb-8 text-emerald-600 tracking-wide">
//         Dashboard 🌱
//       </h2>

//       {/* Nav */}
//       <nav className="flex flex-col gap-2">
//         {navItems.map((item) => {
//           // isActive = true or false  

//           const isActive = pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
//                 ${
//                   isActive
//                     ? "bg-emerald-100 text-emerald-700 shadow-sm"
//                     : "text-gray-600 hover:bg-gray-100 hover:text-emerald-600"
//                 }`}
//             >
//               <item.icon size={18} />
//               {item.name}
//             </Link>
//           );
//         })}
//       </nav>

//     </aside>


//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {children}
//       </main>

//     </div>
//   );
// }