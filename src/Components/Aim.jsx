import React from 'react'

const Aim = () => {
    return (
        <div className='px-5  md:px-20 md:py-20 '>
            <div className='flex flex-col md:flex-row items-start justify-center gap-5 md:gap-20 '>
                {/* Left side with image */}
                <div className=''>
                    <div className="relative h-[400px] w-[450px] py-10">
                        <img
                            src="/People-in-the-office.png"
                            alt="People collaborating"
                            className='w-[350px] h-[300px] md:h-full md:w-full object-cover object-center rounded-lg'
                        />
                        <img
                            src="/Subtract.png"
                            alt="Subtract"
                            className='hidden md:block absolute top-0 right-25 md:right-0 h-[350px] w-[150px] md:h-[400px] md:w-[200px]'
                        />
                    </div>
                </div>

                {/* Right side with text */}
                <div className=''>
                    <h2 className='text-black bg-[#FEDE2B29] text-center px-1 py-2 rounded-2xl md:w-[20%] w-full'>
                        Our Aim
                    </h2>
                    <div className='flex flex-col gap-3 py-5'>
                        <p className='text-[#232323] text-[12px] leading-loose md:leading-normal max-w-[410px]'>
                            Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus. Aenean neque sagittis aliquam tellus neque est.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aim