import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "This is the file. of the page and you can download by clicking it.",
            filesize: "10mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Completed", tagColor: "green" },
        },
        {
            desc: "This is the file. of the page and you can download by clicking it.",
            filesize: "20mb",
            tag: { tagTitle: "Completed.", tagColor: "blue" },
        },
        {
            desc: "This is the file. of the page and you can download by clicking it.",
            filesize: "30mb",
            tag: { tagTitle: "Download Now.", tagColor: "green" },
        },
    ];
    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
            {data.map((item) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground