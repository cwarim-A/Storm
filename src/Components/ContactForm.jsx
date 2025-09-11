import React from 'react'

const ContactForm = () => {
    return (
        
        <div className="px-5 pt-20   md:px-16 lg:px-[150px] md:py-16 bg-[#FCFAFF99] md:h-[600px]  ">
            
            <div className="absolute  w-[340px] md:w-[650px] lg:w-[1024px] flex flex-col lg:flex-row justify-center gap-10 shadow-lg bg-white  overflow-hidden">
                {/* Left Section - Image */}
                <div className="w-full lg:w-1/2 relative flex justify-center">
                    <img
                        src="/customer-care.png"
                        alt="Customer support"
                        className="h-[300px] sm:h-[400px] lg:h-[510px] w-full lg:w-[490px] object-cover"
                    />
                    <img
                        src="/Subtract.png"
                        alt="Decorative"
                        className="hidden lg:block h-[510px] w-[300px] absolute top-0 -right-[10px]"
                    />
                </div>

                {/* Right Section - Contact Form */}
                <div className="w-full lg:w-1/2 flex flex-col px-6 md:px-12 py-10">
                    <h2 className="text-[#E2BF00] bg-[#FEDE2B29] px-4 py-2 rounded-2xl lg:w-[40%] self-end text-center font-semibold">
                        Contact Us
                    </h2>

                    <form className="flex flex-col gap-5 py-7">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="border border-[#BFBFBF] py-3 px-4 rounded-2xl focus:outline-none focus:border-[#E2BF00]"
                        />
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="border border-[#BFBFBF] py-3 px-4 rounded-2xl focus:outline-none focus:border-[#E2BF00]"
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your message"
                            className="border border-[#BFBFBF] py-3 px-4 rounded-2xl h-32 resize-none focus:outline-none focus:border-[#E2BF00]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#FEDE2B] py-3 text-sm rounded-2xl font-medium hover:bg-[#e2bf00] transition-colors"
                        >
                            Contact Us
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactForm