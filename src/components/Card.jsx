import React from 'react'
import { useState } from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {

    const [click, setClick] = useState(false);
    const handleMoreClick = () =>{
        setClick(!click)
    }

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 200, bounceDamping: 50 }} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight'>{data.desc}</p>
            <div className="footer bottom-0 left-0 absolute w-full ">
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                    <h5>{data.filesize}</h5>
                    <button className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center' onClick={handleMoreClick}>
                        {click ? <IoMdClose size=".8em" color='#fff' /> : <LuDownload size=".8em" color='#fff' />}
                    </button>
                </div>
                {
                    click && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-md font-semibold '>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card