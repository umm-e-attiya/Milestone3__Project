import Image from "next/image"
import Link from "next/link"
import abouttemplate from "../../../public/aboutimage.jpg"


const About = () => {
    return(
           <div>
                <div className="flex flex-wrap p-6 md:p-10 lg:p-16 lg:px-28">
                <Image src={abouttemplate} alt="template" className="lg:w-[600px] rounded-lg shadow-lg" />
                    
                    <div className="mt-16 px-6">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">Welcome to Attiya Makeup Store</h1>
                        <p className="text-gray-600 w-[250px] md:w-[500px] lg:w-[600px] mt-5">Discover your unique style with our premium makeup collection. From everyday essentials to special occasion glam, we have it all for you.</p>
                        <Link href="/shop"><button className="bg-pink-500 text-white py-6 px-3 mt-3 hover:bg-pink-600">Explore Our Product</button></Link>
                         
                    </div>
                    </div>


                    <div className="mt-16">

                        <h1 className="font-semibold text-3xl text-gray-800 text-center">Our Mission</h1>
                        <p className="text-gray-600 text-center">To empower everyone to feel beautiful and confident with high-quality, affordable makeup.</p>

                    </div>

                    

                    <div className="mt-28">
                        <h1 className="font-semibold text-3xl text-gray-800  text-center">Why Choose Us?</h1>
                    </div>

                    <div className="mt-16 px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 ">
                        <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-bold">Premium Quality</h3>
                            <p>Our products are curated from the best brands in the industry.</p>

                        </div>

                        <div className="bg-gray-100 rounded-lg p-6  shadow-md text-center hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-bold">Affordable Luxury</h3>
                            <p>We believe everyone deserves to look and feel their best.</p>

                        </div>

                        <div className="bg-gray-100 rounded-lg p-4 shadow-md text-center hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-bold">Inclusive Beauty</h3>
                            <p>Makeup for all skin types and tones—because beauty is universal.</p>

                        </div>

                    </div>
           </div>
    )
}

export default About;