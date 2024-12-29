const Contact = () =>{
    return(
           <div>
                <div className="justify-center items-center md:px-[250px]  lg:px-[600px]">
                    <form className="bg-slate-50 shadow-lg w-[300px] mx-6 lg:w-[400px] h-[700px] pt-10 text-center">
                          <h1 className="font-semibold text-3xl text-center">Contact US</h1>
                        <label htmlFor="name" className="text-gray-800 pt-5 text-xl">Name: </label> 
                        <br></br>
                        <input type="text" name="name" id="name" className="w-[80%] bg-gray-200 mt-3 " />
                        <br></br>
                        <br></br>
                        <label htmlFor="name" className="text-gray-800 pt-5 text-xl">Email: </label> <br></br>
                        <input type="text" name="name" id="name" className="w-[80%] bg-gray-200 mt-3 " />
                        <br></br>
                        <br></br>
                        <label htmlFor="name" className="text-gray-800 pt-5 text-xl">Description: </label> <br></br>
                        <input type="text" name="name" id="name" className="w-[80%] h-[20%] rounded-lg bg-gray-200 mt-3 " />

                        <button className="bg-black text-white mt-16 lg:px-32 px-24 py-6">Submit</button>
                    </form>
                </div>
           </div>
    )
}

export default Contact;