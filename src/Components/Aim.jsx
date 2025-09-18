// import React from 'react'

// const Aim = () => {
//     return (
//         <div className='px-5  md:px-20 md:py-20 '>
//             <div className='flex flex-col md:flex-row items-start justify-center gap-5 md:gap-20 '>
//                 {/* Left side with image */}
//                 <div className=''>
//                     <div className="relative h-[400px] w-[450px]  py-10">
//                         <img
//                             src="/People-in-the-office.png"
//                             alt="People collaborating"
//                             className='w-[350px] h-[300px] md:h-full md:w-full object-cover object-center rounded-lg'
//                         />
//                         <img
//                             src="/Subtract.png"
//                             alt="Subtract"
//                             className='hidden md:block absolute top-0 right-25 md:right-0 h-[350px] w-[150px] md:h-[400px] md:w-[200px]'
//                         />
//                     </div>
//                 </div>

//                 {/* Right side with text */}
//                 <div className=''>
//                     <h2 className='text-black bg-[#FEDE2B29] text-center px-1 py-2 rounded-2xl md:w-[20%] w-full'>
//                         Our Aim
//                     </h2>
//                     <div className='flex flex-col gap-3 py-5'>
//                         <p className='text-[#232323] text-[12px] leading-loose md:leading-normal max-w-[410px]'>
//                             Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Aim


import React from 'react'

const Aim = () => {
    return (
        <div className='px-5 md:px-20 md:py-20'>
            <div className='flex flex-col md:flex-row items-center md:items-center justify-center gap-10 py-10 md:py-0  md:gap-5'>

                {/* Left side with image */}
                <div className='w-full md:w-2/5 flex justify-center md:justify-start'>
                    <div className="relative w-full max-w-[650px] ">
                        <img
                            src="/People-in-the-office.png"
                            alt="People collaborating"
                            className='w-full h-auto object-cover object-center rounded-lg'
                        />
                        <img
                            src="/Subtract.png"
                            alt="Subtract"
                            className='hidden md:block absolute top-0 right-0 h-[300px] w-[120px] md:h-[550px] md:w-[200px]'
                        />
                    </div>
                </div>

                {/* Right side with text */}
                <div className='w-full md:w-2/5'>
                    <h2 className='text-black bg-[#FAE885] text-center px-3 py-2 rounded-2xl inline-block w-full md:w-auto'>
                        Our Aim
                    </h2>
                    <div className='flex flex-col gap-3 py-5'>
                        <p className='text-[#232323] text-sm md:text-[14px] leading-relaxed md:leading-loose'>
                            Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aim
