import Link from 'next/link'
import React from 'react'

const Herosection = () => {
  return (
    <div className='bg-white' >Herosection

        <Link href="/hajjguidline">
            <button className='bg-green-500  text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition duration-300'>
              Read More
            </button>
          </Link>
    </div>
  )
}

export default Herosection