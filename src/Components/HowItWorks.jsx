import React from 'react'


const Processes = [
    {
        icon: "/enter-icon.png",
        title: "Enter debate details",
        desc: "Set the topic, rules, and format in seconds. Whether it’s text, audio, or video, STORM makes it easy to create and schedule structured debates that anyone can join."
    },
    {
        icon: "/select.png",
        title: "Select Judging Criteria",
        desc: "Define how the debate will be scored. Choose metrics like clarity, evidence, delivery, or creativity to guide the audience in evaluating each debater fairly and consistently."
    },
    {
        icon: "/choose.png",
        title: "Choose Voting Criteria",
        desc: "Customize how the crowd participates. Set scoring ranges, voting windows, and engagement rules to ensure transparent, real-time audience feedback."
    },
    {
        icon: "/invite.png",
        title: "Invite Opponent",
        desc: "Send a direct invite to another debater. Bring in friends, experts, challengers or open the floor for anyone in the community to step up and compete."
    }
]


const HowItWorks = () => {
    return (
        <div id="how-it-works" className='bg-[#F5F9F7]  py-20 flex justify-center  '>
            <div className='bg-[#F0D22FED]  rounded-2xl flex flex-col m-auto md:flex-row divide-y-2  md:divide-x-2 px-5 md:px-0 md:divide-y-0 divide-[#fff] py-5 md:py-10 lg:py-10  w-[90%]  mb-10'> 
                {
                    Processes.map((process, index) => (
                        <div key={index} className='flex flex-col py-5 gap-5 mb-10 sm:px-5 lg:px-5 md:px-4    '>
                            <img src={process.icon} alt="icon" className='w-10 h-10 ' />
                            <div className='flex flex-col gap-3 '>
                                <h3 className='lg:text-[20px] md:text-[18px] font-semibold'>{process.title}</h3>
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