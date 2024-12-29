"use client"

import Link from "next/link";
import { HiMiniShoppingCart } from "react-icons/hi2";
import {Sheet , SheetTrigger , SheetContent} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";


const Header = () =>{
  
  const [cartCount, setCartCount] = useState<number>(0); // Initialize cartCount with 0
  

  useEffect(() => {
    const updateCartCount = () => {
      const savedCartData = localStorage.getItem('cartData');
      if (savedCartData) {
        const cartItems = JSON.parse(savedCartData);
        setCartCount(cartItems.length);
      } else {
        setCartCount(1);
      }
      localStorage.setItem ('cart' , JSON.stringify(updateCartCount))
    };

    updateCartCount();
  }, []);


  

  
    
  
     
     return(
           <div>
                
                <div className="bg-white flex  mt-5 ml-20">
                    <ul className=" hidden md:hidden lg:flex lg:gap-4 text-[18px]">
                        <Link href="/"><li>Home</li></Link>
                        <Link href="/shop"><li>Shop</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <Link href="/contact"><li>Contact Us</li></Link>
                    </ul>
                     <h1 className="flex whitespace-nowrap lg:ml-[300px] lg:text-[30px] font-bold items-center">Attiya Makeup Store</h1>
                     <Link href="/cart" className="relative"><HiMiniShoppingCart className="w-[30px] h-[30px] ml-[50px] md:ml-[480px]  lg:ml-[400px]" />
                     {/* Badge for cart count */}
                      
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2  text-black text-xs rounded-full px-2">
              {cartCount}
            </span>
          )}
                     </Link>

                    
                    

        
        

                     
                     <div>
                     <Sheet>
                        <SheetTrigger className="lg:hidden">
                               <MenuIcon className="ml-3" />
                        </SheetTrigger>
                        <SheetContent className="bg-pink-200">
                         <ul className="mt-5 ml-2">
                        <Link  href="/"><li className="text-[18px]">Home</li></Link>
                        <Link  href="/shop"><li className="pt-4 text-[18px]">Shop</li></Link>
                        <Link  href="/about"><li className="pt-4 text-[18px]">About</li></Link>
                        <Link  href="/contact"><li className="pt-4 text-[18px]">Contact Us</li></Link>
                        </ul>
                        </SheetContent>
                     </Sheet>
                </div>
                </div>

                <hr />

                
                
           
           
           
           
           </div>
          
     )
}

export default Header;