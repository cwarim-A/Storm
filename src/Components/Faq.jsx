import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { LiaTimesSolid } from 'react-icons/lia'

const faqs = [
    {
        id: 1,
        question: "What is Storm?",
        answer: "Storm is a debate app that allows users engage in discussions and a wide range of topics.",
    },
    {
        id: 2,
        question: " How to create a debate",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dignissimos suscipit est sint aliquid repellendus quae perspiciatis nisi nam hic,"
    },
    {
        id: 3,
        question: "How to create a debate",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dignissimos suscipit est sint aliquid repellendus quae perspiciatis nisi nam hic,"
    },
    {
        id: 4,
        question: "How to create a debate",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dignissimos suscipit est sint aliquid repellendus quae perspiciatis nisi nam hic,",
    },
    {
        id: 5,
        question: "How to create a debate",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dignissimos suscipit est sint aliquid repellendus quae perspiciatis nisi nam hic,",
    }
]

const Faq = () => {
    const [active, setActive] = useState(null)
    return (
        <div className='flex flex-col justify-center py-10 px-10 md:px-20'>
            <h2 className="text-[#E2BF00] bg-[#FEDE2B29] px-2 py-2 rounded-2xl lg:w-[22%] text-center font-semibold">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-5 py-10" >
                {faqs.map((faq, index) => (
                    <div key={index} >
                        <div
                            onClick={() =>
                                setActive(active === faq.id ? null : faq.id)
                            }
                            className={`${active === faq.id ? "bg-[#FEDE2B]" : "bg-[#E3E3E3]"
                                } flex items-center justify-between px-2 py-3 cursor-pointer`}
                        >
                            <p>
                                {faq.id}. {faq.question}
                            </p>
                            {active === faq.id ? <LiaTimesSolid /> : <FiPlus />}
                        </div>

                        {/* show answer if active */}
                        {active === faq.id && (
                            <p className="px-2 py-3">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq