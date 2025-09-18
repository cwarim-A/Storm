


import React from 'react'

const Aim = () => {
    return (
        <div className='px-5  md:px-5 lg:px-20 md:py-20'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center md:items-center justify-center gap-10 py-10 md:py-0  md:gap-5'>

                {/* Left side with image */}
                <div className='w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-start'>
                    <div className="relative w-full max-w-[650px] ">
                        <img
                            src="/People-in-the-office.png"
                            alt="People collaborating"
                            className='w-full  max-w-[450px]  h-auto object-cover object-center rounded-lg'
                        />
                        <img
                            src="/Subtract.png"
                            alt="Subtract"
                            className='hidden md:hidden lg:block absolute top-0 right-0 h-[300px] w-[120px]
                              lg:h-[550px] lg:w-[200px]'
                        />
                    </div>
                </div>

                {/* Right side with text */}
                <div className='w-full md:w-1/2 lg:w-2/5'>
                    <h2 className='text-black bg-[#FAE885] text-center px-3 py-2 rounded-2xl inline-block w-full md:w-auto'>
                        Our Aim
                    </h2>
                    <div className='flex flex-col gap-3 py-5'>
                        <p className='text-[#232323] text-sm md:text-[14px] leading-relaxed lg:leading-loose md:leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aim

// import React from 'react'

// const Aim = () => {
//     return (
//         <div className="px-5 sm:px-8 md:px-10 lg:px-20 md:py-20">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-12">

//                 {/* Left side with image */}
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//                     <div className="relative w-full max-w-[650px]">
//                         <img
//                             src="/People-in-the-office.png"
//                             alt="People collaborating"
//                             className="w-full h-auto object-cover object-center rounded-lg"
//                         />
//                         <img
//                             src="/Subtract.png"
//                             alt="Subtract"
//                             className="hidden md:block absolute top-0 right-0 h-[200px] w-[80px] sm:h-[300px] sm:w-[120px] md:h-[400px] md:w-[150px] lg:h-[550px] lg:w-[200px]"
//                         />
//                     </div>
//                 </div>

//                 {/* Right side with text */}
//                 <div className="w-full md:w-1/2">
//                     <h2 className="text-black bg-[#FAE885] text-center md:text-left px-4 py-2 rounded-2xl inline-block w-full md:w-auto">
//                         Our Aim
//                     </h2>
//                     <div className="flex flex-col gap-4 py-5">
//                         <p className="text-[#232323] text-sm sm:text-base md:text-[15px] leading-relaxed md:leading-loose">
//                             Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim
//                             imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget
//                             vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque
//                             sagittis aliquam tellus neque est. Lorem ipsum dolor sit amet consectetur.
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Aim

