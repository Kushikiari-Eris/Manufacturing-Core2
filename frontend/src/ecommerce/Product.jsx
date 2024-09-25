import React, {useState} from "react";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Product = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return(
        <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} />


        <div className="p-4 sm:ml-64 bg-gray-100">
            <div className="p-4   rounded-lg dark:border-gray-700 mt-20">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <h2>MGA BOBO</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product