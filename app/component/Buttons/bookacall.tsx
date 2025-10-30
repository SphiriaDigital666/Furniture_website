import React from 'react'

function bookacall() {
  return (
    <>
    {/* Mobile/SM: visible, full width */}
    <div className='py-4 lg:py-0 md:hidden w-full'>
      <button className="w-full group bg-button text-white rounded-full transition-all duration-300 hover:scale-[1.01] hover:bg-opacity-90">
        <div className='flex items-center w-full'>
          <div className='text-white description px-4 flex-1 text-center'>
            Book a call
          </div>
          <div className='text-white text-sm pr-1 py-1'>
            <img src="/image/Icon/Buttonicon.png" alt="arrow-right" width={50} height={50} className='w-[36px] h-[36px] sm:w-[40px] sm:h-[40px]' />
          </div>
        </div>
      </button>
    </div>
    {/* MD and up: original button */}
    <div className='py-4 lg:py-0 hidden md:block'>
      <button className="group  md:mb-0  lg:mb-4  bg-button text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-90">
        <div className='flex flex-row items-center justify-center '>
          <div className='text-white description sm:px-3 md:px-5 lg:px-2 xl:px-3 2xl:px-4'>
            Book a call
          </div>
          <div className='text-white text-sm pr-1 py-1'>
            <img src="/image/Icon/Buttonicon.png" alt="arrow-right" width={50} height={50} className='w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] 2xl:w-[55px] 2xl:h-[55px]' />
          </div>
        </div>
      </button>
    </div>
    </>
  )
}

export default bookacall