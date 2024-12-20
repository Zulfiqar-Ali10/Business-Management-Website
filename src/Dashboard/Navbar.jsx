

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 right-0 left-0 h-16 bg-white shadow-sm z-50">
//   <div className="h-full px-4 flex items-center justify-between">
//     {/* Logo Section */}
//     <div className="flex items-center space-x-4">
//       <div className="flex items-center">
//         <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center">
//           <span className="text-white text-xl font-bold">Z</span>
//         </div>
//         <span className="ml-3 text-xl font-semibold text-gray-800">
//           Zulfiqar
//         </span>
//       </div>
//     </div>
//     {/* Right Section */}
//     <div className="flex items-center space-x-6">
//       {/* Search */}
//       <div className="hidden md:flex items-center">
//         <div className="relative">
//           <input
//             type="search"
//             placeholder="Search..."
//             className="w-72 px-4 py-2 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           <i className="fas fa-search absolute left-3 top-2.5 text-gray-400" />
//         </div>
//       </div>
//       {/* Notifications */}
//       <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
//         <i className="fas fa-bell text-xl" />
//         <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
//       </button>
//       {/* Profile */}
//       <div className="flex items-center space-x-3">
//         <img
//           src="https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff"
//           alt="Profile"
//           className="w-9 h-9 rounded-xl"
//         />
//         <div className="hidden md:block">
//           <p className="text-sm font-medium text-gray-700">John Doe</p>
//           <p className="text-xs text-gray-500">Administrator</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>

//   )
// }


export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 bg-blue-600 shadow-sm z-50 border-b border-white">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="h-9 w-9 bg-white rounded-xl flex items-center justify-center">
              <span className="text-blue-600 text-xl font-bold">Z</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-white">
              Zulfiqar
            </span>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-72 px-4 py-2 pl-10 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
          {/* Notifications */}
          <button className="relative p-2 text-white hover:text-gray-200 transition-colors">
            <i className="fas fa-bell text-xl" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          {/* Profile */}
          <div className="flex items-center space-x-3">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff"
              alt="Profile"
              className="w-9 h-9 rounded-xl"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-gray-200">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

