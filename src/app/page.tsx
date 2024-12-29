import Image from "next/image";
import kits from "../../public/kits.png"
import freeshippinglogo from "../../public/freeshippinglogo.png"
import easyreturn from "../../public/easyreturnicon.png"
import premiumquality from "../../public/premiumqualitylogo.jpg"
import specialoffer from "../../public/specialoffer.jpg"
import cosmetic1 from "../../public/cosmetic1.jpg"
import cosmetic2 from "../../public/cosmetic2.jpg"
export default function Home() {
  return (
          <div>
              <div className="bg-pink-200 w-full h-[700px] md:h-[600px] lg:h-[500px]">
                <div className="lg:flex pt-24 ml-6 md:ml-28 lg:ml-24">
                 <div>
                <Image src={kits} alt="makeupkitstemplate" className="w-[300px] h-[300px]md:w-[600px]  lg:w-[600px] lg:h-[300px]" />
                </div>

                <div className="pt-6 lg:pt-24 lg:ml-[40px]">
                   <h1 className="font-bold text-[40px] ">Beautifully Bare Collection</h1>
                   <p className="text-[20px]">Its the Lightweight, Natural Looking Collection You Love</p>
                   <button className="bg-black text-white w-[100px] h-[50px] mt-3">Shop Now</button>
                </div>
                </div>
                </div>


                <div>
                     <h1 className="font-bold text-[40px] text-center mt-10"><i>Why Shop With Us?</i></h1>
                      <div className="mt-10 ml-14 md:ml-[250px] lg:ml-[650px]">
                               <Image src={freeshippinglogo} alt="freeshippinglogo" className="w-[250px] h-[250px]" />
                               <h1 className="text-[20px] ml-[40px]">Free Shipping</h1>

                                <Image src={easyreturn} alt="easyreturn" className="w-[220px] h-[220px] mt-20" />
                                <h1 className="text-[20px] ml-[40px]">Easy Return</h1>

                                <Image src={premiumquality} alt="premiumquality" className="w-[220px] h-[220px] mt-20" />
                                <h1 className="text-[20px] ml-[40px]">Premium Quality</h1>

                                <Image src={specialoffer} alt="specialoffer" className="w-[220px] h-[220px] mt-20" />
                                <h1 className="text-[20px] ml-[40px]">Special Quality</h1>
                                
                      </div>
                </div>

                
                  <div className="lg:flex mt-28 ml-10 md:ml-52 lg:ml-80 py-7">
                    <div className="relative">
                        <Image src={cosmetic1} alt="cosmetic" className=" w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] "/>
                      </div>
                     <div className="absolute">
                    <p className=" w-[300px] lg:pt-36 lg:pl-20 text-[20px] mb-8 text-black">Providing a flawless, luxurious finish with smooth and blended makeup products designed to enhance your natural beauty.</p>
                    </div>
                    

                    <div className="mt-40 relative lg:mt-0 ">
                         <Image src={cosmetic2} alt="cosmetic" className=" w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] lg:ml-20" />
                    </div>
                    <div className="absolute lg:ml-[550px] lg:pt-36">
                    <p className="w-[300px] text-black  text-[20px]">Elevate your look with stunning, voluminous lashes that define your eyes and complete your make effortlessly</p>
                    </div>
                    
                    
                    </div>


                   
               
          </div>
  );
}
