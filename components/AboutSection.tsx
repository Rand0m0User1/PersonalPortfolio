import React from 'react'

const AboutSection = () => {
  return (
    <section id="about">
        <div>
            <h1 className="text-center font-bold text-4xl py-8">About Me</h1>
            <div className="flex flex-col space-y-5 items-strech justify-center align-top md:flex-row">
                <div>
                    <h1>Who I am</h1>
                    <p>FillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFiller</p>
                    <br />
                    <p>FillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFiller</p>
                </div>
                <div>
                    <h1>My Current Skillset</h1>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
