import React  from "react";





const Footer = () => (
       <section className="bg-gray-800 text-white  py-4 text-center mt-[500px] max-sm:mt-[400px] flex flex-col justify-center items-center h-[400px]">
          <h1 style={{fontWeight:"bold", color:'#068bd7ff'}}>Travelholic</h1>
          
          <div className="container mx-auto">
            <p style={{fontFamily:'initial'}}>I’m a travelholic—drawn to distant skies and unfamiliar streets. Every trip awakens my soul, every journey reshapes me. I crave experiences over comfort, stories over things. The world is my map, curiosity my compass. I don’t travel to escape life—I travel so life doesn’t escape me.

</p>
          </div>
            <p className="text-sm">© 2023 Travelholic. All rights reserved.</p>
            <p className="text-sm">Follow us on social media</p>
            <div className="flex justify-center space-x-4 mt-2">        
                <a href="#" className="text-blue-400 hover:text-blue-600">Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">Instagram</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
            </div>
       </section>
);

export default Footer;
