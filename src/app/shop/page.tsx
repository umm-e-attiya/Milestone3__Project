import Image from "next/image";
import Link from "next/link";
import { Foundation } from "../../../Data/data"
import { Concealer } from "../../../Data/data";
import { EyeShadow } from "../../../Data/data";
import { EyeLiner } from "../../../Data/data";
import { Blusher } from "../../../Data/data";
import { Highlighter } from "../../../Data/data";
import { contour } from "../../../Data/data";
import { Lipstick } from "../../../Data/data";
import { LipGloss } from "../../../Data/data";
const Shop = () =>{
      return(
            <div>
                <div>
                  <h1 className="font-bold text-4xl text-black p-6 px-24">Face</h1>
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Foundation</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {Foundation.map((Foundation)=>{
                        return(
                            <div>
                            
                            <ul  key={Foundation.id} className="shadow-lg  hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${Foundation.id}`}>
                            <Image src={Foundation.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl ">{Foundation.title}</li>
                            <li className="text-lg">{Foundation.price}</li>
                            <li className="text-base text-green-700">{Foundation.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>


            <div>
                 
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Concealer</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {Concealer.map((Concealer)=>{
                        return(
                            <div>
                            
                            <ul  key={Concealer.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${Concealer.id}`}>
                            <Image src={Concealer.image} alt="noting" width={300} height={300}  />
                            <li className="font-bold text-3xl ">{Concealer.title}</li>
                            <li className="text-lg">{Concealer.price}</li>
                            <li className="text-base text-green-700">{Concealer.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>

            <div>
                  <h1 className="font-bold text-4xl text-black p-6 px-24">Eyes</h1>
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Eye Shadow</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {EyeShadow.map((EyeShadow)=>{
                        return(
                            <div>
                            
                            <ul  key={EyeShadow.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${EyeShadow.id}`}>
                            <Image src={EyeShadow.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl ">{EyeShadow.title}</li>
                            <li className="text-lg">{EyeShadow.price}</li>
                            <li className="text-base text-green-700">{EyeShadow.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>
               

            <div>
                 
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Eye Liner</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {EyeLiner.map((EyeLiner)=>{
                        return(
                            <div>
                            
                            <ul  key={EyeLiner.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${EyeLiner.id}`}>
                            <Image src={EyeLiner.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl">{EyeLiner.title}</li>
                            <li className="text-lg">{EyeLiner.price}</li>
                            <li className="text-base text-green-700">{EyeLiner.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>

            <div>
                  <h1 className="font-bold text-4xl text-black p-6 px-24">Cheeks</h1>
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Blusher</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {Blusher.map((Blusher)=>{
                        return(
                            <div>
                            
                            <ul  key={Blusher.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${Blusher.id}`}>
                            <Image src={Blusher.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl ">{Blusher.title}</li>
                            <li className="text-lg">{Blusher.price}</li>
                            <li className="text-base text-green-700">{Blusher.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>


            <div>
                 
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Highlighter</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {Highlighter.map((Highlighter)=>{
                        return(
                            <div>
                            
                            <ul  key={Highlighter.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${Highlighter.id}`}>
                            <Image src={Highlighter.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl ">{Highlighter.title}</li>
                            <li className="text-lg">{Highlighter.price}</li>
                            <li className="text-base text-green-700">{Highlighter.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>
             

            <div>
                 
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Contour</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {contour.map((contour)=>{
                        return(
                            <div>
                            
                            <ul  key={contour.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${contour.id}`}>
                            <Image src={contour.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl ">{contour.title}</li>
                            <li className="text-lg">{contour.price}</li>
                            <li className="text-base text-green-700">{contour.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>

            <div>
                  <h1 className="font-bold text-4xl text-black p-6 px-24">Lips</h1>
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Lipstick</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {Lipstick.map((Lipstick)=>{
                        return(
                            <div>
                            
                            <ul  key={Lipstick.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${Lipstick.id}`}>
                            <Image src={Lipstick.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl ">{Lipstick.title}</li>
                            <li className="text-lg">{Lipstick.price}</li>
                            <li className="text-base text-green-700">{Lipstick.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>
          

            <div>
                 
                  <h3 className="font-bold text-2xl text-black p-6 px-24">Lip Gloss</h3>
                <ul className="flex flex-wrap  gap-8 px-24 p-8">
                    {LipGloss.map((LipGloss)=>{
                        return(
                            <div>
                            
                            <ul  key={LipGloss.id} className="shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            <Link href={`/shop/${LipGloss.id}`}>
                            <Image src={LipGloss.image} alt="noting" width={300} height={300} />
                            <li className="font-bold text-3xl ">{LipGloss.title}</li>
                            <li className="text-lg">{LipGloss.price}</li>
                            <li className="text-base text-green-700">{LipGloss.stock}</li>
                            </Link>
                            </ul>
                            </div>

                        )
                    })

                    }
                </ul>
                
            </div>


            
               
               
               

               

               
            </div>
      )
}

export default Shop;