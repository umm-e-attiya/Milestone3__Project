

"use client"

import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react" 
import { useRouter } from "next/navigation";



import Counter from "../../component/counter"


import { Blusher, Concealer, contour, EyeLiner, EyeShadow, Foundation, Highlighter, LipGloss, Lipstick } from "../../../../Data/data"





 

  interface param {
       params:{
            id:string
       }
  }

    

 
  
    

  
 


  const Productpage = ({ params }: param) => {

    const router = useRouter(); // Initialize the router

  const [cartData, setCartData] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      setCartData(JSON.parse(savedCartData)); // Local storage ka data state mein daalna
    }
  }, []);

  const addtoCart = (item: { [key: string]: any }) => {
    const isAlreadyInCart = cartData.some((cartItem) => cartItem.id === item.id);
    if (!isAlreadyInCart) {
      const updatedCart = [...cartData, item];
      setCartData(updatedCart); // State ko update karna
      localStorage.setItem("cartData", JSON.stringify(updatedCart)); // LocalStorage update karna
      console.log("Product added to cart:", item); // Debugging ke liye
    } else {
      console.log("Product is already in the cart!");
    }
  };
    
    
  const convertnumber = Number(params.id)
 const foundationfind = Foundation.find((items) => items.id === convertnumber)
  const concealerfind = Concealer.find((items) => items.id === convertnumber)
  const eyeshadowfind = EyeShadow.find((items) => items.id === convertnumber)
  const eyelinerfind = EyeLiner.find((items) => items.id === convertnumber)
  const blusherfind = Blusher.find((items) => items.id === convertnumber)
  const highlighterfind = Highlighter.find((items) => items.id === convertnumber)
  const contourfind = contour.find((items) => items.id === convertnumber)
  const lipstickfind = Lipstick.find((items) => items.id === convertnumber)
  const lipglossfind = LipGloss.find((items) => items.id === convertnumber)

 


  
  

  

  const renderProduct = (product: { [key: string]: any }) => {
    <div className="lg:flex lg:p-6 lg:mx-60">
      <Image
        src={product?.image || "/noting"}
        alt="noting"
        width={300}
        height={300}
        className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3"
      />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{product?.title}</h1>
        <p className="text-2xl mt-2">{product?.price}</p>
        <Counter />
        <button
          onClick={() => addtoCart(product)} // Pass the product
          className="px-6 py-4 bg-black text-white mt-5"
        >
          Add To Cart
        </button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{product?.description}</p>
        <p className="text-green-700 mt-5">{product?.stock}</p>
      </div>
    </div>
  }




  
  


  

  



   
  return (
    <div >
       {foundationfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={foundationfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{foundationfind?.title}</h1>
        <p className="text-2xl mt-2">{foundationfind?.price}</p>
        <Counter />
        <button onClick={() => addtoCart(foundationfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{foundationfind?.description}</p>
        <p className="text-green-700 mt-5">{foundationfind?.stock}</p>
      </div>
    </div>}


  {concealerfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={concealerfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{concealerfind?.title}</h1>
        <p className="text-2xl mt-2">{concealerfind?.price}</p>
        <Counter />
        <button onClick={() => addtoCart(concealerfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{concealerfind?.description}</p>
        <p className="text-green-700 mt-5">{concealerfind?.stock}</p>
      </div>
    </div>}

  {eyeshadowfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={eyeshadowfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{eyeshadowfind?.title}</h1>
        <p className="text-2xl mt-2">{eyeshadowfind?.price}</p>
        <Counter />
        <button onClick={() => addtoCart(eyeshadowfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{eyeshadowfind?.description}</p>
        <p className="text-green-700 mt-5">{eyeshadowfind?.stock}</p>
      </div>
    </div>}


  {eyelinerfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={eyelinerfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{eyelinerfind?.title}</h1>
        <p className="text-2xl mt-2">{eyelinerfind?.price}</p>
        <Counter />
        <button onClick={() => addtoCart(eyelinerfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{eyelinerfind?.description}</p>
        <p className="text-green-700 mt-5">{eyelinerfind?.stock}</p>
      </div>
    </div>}



  {blusherfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={blusherfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{blusherfind?.title}</h1>
        <p className="text-2xl mt-2">{blusherfind?.price}</p>
        <Counter />
        <button onClick={() => addtoCart(blusherfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{blusherfind?.description}</p>
        <p className="text-green-700 mt-5">{blusherfind?.stock}</p>
      </div>
    </div>}


  {highlighterfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={highlighterfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{highlighterfind?.title}</h1>
        <p className="text-2xl mt-2">{highlighterfind.price}</p>
        <Counter />
        <button onClick={() => addtoCart(highlighterfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{highlighterfind?.description}</p>
        <p className="text-green-700 mt-5">{highlighterfind?.stock}</p>
      </div>
    </div>}


  {contourfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={contourfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{contourfind?.title}</h1>
        <p className="text-2xl mt-2">{contourfind.price}</p>
        <Counter />
        <button onClick={() => addtoCart(contourfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{contourfind?.description}</p>
        <p className="text-green-700 mt-5">{contourfind?.stock}</p>
      </div>
    </div>}



  {lipstickfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={lipstickfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{lipstickfind?.title}</h1>
        <p className="text-2xl mt-2">{lipstickfind.price}</p>
        <Counter />
        <button onClick={() => addtoCart(lipstickfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{lipstickfind?.description}</p>
        <p className="text-green-700 mt-5">{lipstickfind?.stock}</p>
      </div>
    </div>}




  {lipglossfind &&
    <div className="lg:flex  lg:p-6 lg:mx-60">
      <Image src={lipglossfind?.image || "/noting"} alt="noting" width={300} height={300} className="lg:w-[500px] lg:h-[500px] w-[320px] h-[200px] mx-3" />
      <div className="lg:p-6 lg:mx-28 mt-4">
        <h1 className="font-bold text-2xl lg:text-4xl">{lipglossfind?.title}</h1>
        <p className="text-2xl mt-2">{lipglossfind.price}</p>
        <Counter />
        <button onClick={() => addtoCart(lipglossfind)} className="px-6 py-4 bg-black text-white mt-5">Add To Cart</button>
        <h1 className="text-lg text-gray-800 mt-3">Description</h1>
        <p>{lipglossfind?.description}</p>
        <p className="text-green-700 mt-5">{lipglossfind?.stock}</p>
      </div>
    </div>}

      






























    </div>

  )
}

export default Productpage;