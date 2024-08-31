import React from 'react'

const Footer = () => {
  
    return (
      
        <footer className=""style={{backgroundColor:"#f1f4f5"}}>
      <hr/>
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          
          <div className=" w-full sm:w-1/4 mb-3 sm:mb-0">
            <h2 className="text-l font-bold">POSHAK</h2>
            <p className="mt-1 text-black-500">Best quality products at the best prices.</p>
          </div>
          
          {/* Links Section */}
          <div className="w-full sm:w-2/3 flex flex-wrap justify-between">
           
            <div className="w-1/4">
              <h3 className="font-semibold mb-2">Company</h3>
              <div className='flex flex-col space-x-2 '>
                <a href="/about" className="text-gray-400 hover:text-white me-2">About Us </a>
                <a href="/" className="text-gray-400 hover:text-white me-2">Careers </a>
                <a href="/" className="text-gray-400 hover:text-white me-2">Blog</a>
                </div>
            </div>
           
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-center">
          <p>&copy; 2024 ShopName. All rights reserved.</p>
        </div>
      </div>
    </footer>
           
    
    )
}

export default Footer