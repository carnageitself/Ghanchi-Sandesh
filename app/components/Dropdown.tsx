import React, {useState} from "react";

const Dropdown = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar flex-1 h-60 w-full top-24 absolute bg-[#C10A39] z-10 right-0">
             {/* <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <div className="relative">
                <button className="text-white hover:text-gray-700  px-3 py-2 rounded-md text-sm font-medium" onClick={toggleDropdown} id="options-menu" aria-haspopup="true" aria-expanded="true">
                  Dropdown
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="options-menu-0">Action</a>
                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="options-menu-1">Another action</a>
                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="options-menu-2">Something else here</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default Dropdown;
