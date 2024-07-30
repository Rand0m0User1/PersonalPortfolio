import React from 'react'
import Image from 'next/image'

const EducationSection = () => {
  return (
    <section id="education">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl py-8">Education
                <hr className="w-6 h-1 mx-auto my-4 bg-amber-400 border-0 rounded" />
            </h1>
            <div className="border-l-4 border-gray-200 ml-3 mt-3 py-16 space-y-14">
                <div className="relative">
                    <div className="pl-10">
                        <div className="absolute top-5 -left-3.5 bg-amber-400 h-6 w-6 rounded-full border-4 border-white">
                            <div className="absolute bg-amber-400 h-6 w-6 rounded-full border-4 border-white -top-1 -left-1 hover:animate-ping"></div>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg inline-block">
                            <Image className="rounded-lg" src="/deepruncit.png" alt="deepruncit" width={150} height={150} />
                        </div>
                        <h3 className="text-3xl font-semibold tracking-wide mt-4 mb-2">Center for Information Technology at Deep Run High School</h3>
                        <p className="text-xl">September 2023 - Present</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="pl-10">
                        <div className="absolute top-5 -left-3.5 bg-amber-400 h-6 w-6 rounded-full border-4 border-white">
                            <div className="absolute bg-amber-400 h-6 w-6 rounded-full border-4 border-white -top-1 -left-1 hover:animate-ping"></div>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg inline-block">
                            <Image className="rounded-lg" src="/internationalbaccalaureate.png" alt="internationalbaccalaureate" width={150} height={150} />
                        </div>
                        <h3 className="text-3xl font-semibold tracking-wide mt-4 mb-2">IB Program at Moody Middle School</h3>
                        <p className="text-xl">September 2019 - June 2022</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="pl-10">
                        <div className="absolute top-5 -left-3.5 bg-amber-400 h-6 w-6 rounded-full border-4 border-white">
                            <div className="absolute bg-amber-400 h-6 w-6 rounded-full border-4 border-white -top-1 -left-1 hover:animate-ping"></div>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg inline-block">
                            <Image className="rounded-lg" src="/embassy.png" alt="embassy" width={150} height={150} />
                        </div>
                        <h3 className="text-3xl font-semibold tracking-wide mt-4 mb-2">Polish School Under Polish Embassy RP in Washington D.C.</h3>
                        <p className="text-xl">September 2016 - June 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EducationSection
