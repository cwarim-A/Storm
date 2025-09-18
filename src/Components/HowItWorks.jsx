import React from 'react'


const Processes = [
    {
        icon: "/enter-icon.png",
        title: "Enter debate details",
        desc: "Lorem ipsum dolor sit amet,consec adipiscing elit, sed do eiusmod tempor incidiu"
    },
    {
        icon: "/select.png",
        title: "Select Judging Criteria",
        desc: "Lorem ipsum dolor sit amet,consec adipiscing elit, sed do eiusmod tempor incidiu"
    },
    {
        icon: "/choose.png",
        title: "Choose Voting Criteria",
        desc: "Lorem ipsum dolor sit amet,consec adipiscing elit, sed do eiusmod tempor incidiu"
    },
    {
        icon: "/invite.png",
        title: "Invite Opponent",
        desc: "Lorem ipsum dolor sit amet,consec adipiscing elit, sed do eiusmod tempor incidiu"
    }
]


const HowItWorks = () => {
    return (
        <div id="how-it-works" className='bg-[#F5F9F7] h-[300px] relative '>
            <div className='bg-[#F0D22FED]  rounded-2xl flex flex-col md:flex-row divide-y-2  md:divide-x-2 px-5 md:px-0 md:divide-y-0 divide-[#7F56D9] py-5 md:py-5 lg:py-10 absolute top-[10%] md:top-[30%]  w-[90%] left-[5%] mb-10'> 
                {
                    Processes.map((process, index) => (
                        <div key={index} className='flex flex-col py-5 gap-5 mb-10 sm:px-5 lg:px-5 md:px-4    '>
                            <img src={process.icon} alt="icon" className='w-10 h-10 ' />
                            <div className='flex flex-col gap-3 '>
                                <h3 className='lg:text-[22px] md:text-[18px] font-semibold'>{process.title}</h3>
                                <p className='lg:text-[14px] sm:text-[14px] md:text-[12px]'>{process.desc}</p>
                            </div>
                        </div>
                    ))
                }
                
                </div>
        </div>
    )
}

export default HowItWorks