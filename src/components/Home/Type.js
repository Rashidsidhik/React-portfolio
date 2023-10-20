import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Developer',
          'Software Engineer',
          'MERN Stack Developer',
          'Open Source Contributor',
          'I build things for the web.',
          "I'm a Full Stack Developer",
          "I'm a Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
