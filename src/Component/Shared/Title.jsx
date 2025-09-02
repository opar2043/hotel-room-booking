import React from 'react'

const Title = ({head , des}) => {
  return (
        <div className="flex flex-col md:flex-row md:justify-between my-4 ">
          <h1 className="text-lg md:text-xl font-bold text-white/80 text-center">
            {head}
          </h1>
          <div className=" text-gray-400 italic">
            {des}
          </div>
        </div>
  )
}

export default Title