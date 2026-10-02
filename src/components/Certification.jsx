import React from 'react'
import {GrCertificate,HiArrowSmRight} from '../assets/icons'

const Certification = () => {
  return (
   <>
   <section className='w-full hidden py-3 md:flex bg-[#000D16]/90'>
<div className="w-[90%] mx-auto flex justify-around items-center gap-4">
{/* heading  */}
<div className="flex items-center flex-1 gap-4">
{/* icons  */}
<div className="">
<GrCertificate className='text-[#14B8A6] py-2 px-2 text-6xl bg-[#14B8A6]/20 rounded-2xl'/>
</div>

{/* text  */}
<div className="">
  <h3 className='text-white font-bold text-2xl'>Verify Certificate</h3>
  <p className='text-white/60'>Enter your Certificate ID to verify to the Authonticity of the Certificate issue by Move Active Academy</p>
</div>
</div>

{/* inputs  */}
<div className="flex flex-1 gap-3 items-center">
  <input type="text" placeholder='Enter Certificate ID (e.g 1-001)' className='bg-white text-gray-500 rounded p-2 outline-none min-w-70 ' />

  <button className='flex items-center gap-2 bg-[#14B8A6] font-semibold  p-2 rounded'>Verify Certificate <HiArrowSmRight/></button>
</div>
</div>
   </section>
   </>
  )
}

export default Certification
