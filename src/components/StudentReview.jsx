import React from 'react'

const StudentReview = () => {

    
   const stdReview = [
      {
        title: "Usman Khalid",
        mess : "Move Active Academy gave me the confidence and practical skills to start my career",
        batch : "Batch 1",
        img : "/team-1.png"
      },
      
      {
        title: "Sana Fatima",
        mess : "The Trainers are Professional and the practical training is excellent",
        batch : "Batch 1",
        img : "/team-2.png"
      },
      
      {
        title: "Bilal Khan",
        mess : "Best investment for my future Higly recommended",
        batch : "Batch 1",
        img : "/team-1.png"
      },
       {
        title: "Sana Fatima",
        mess : "The Trainers are Professional and the practical training is excellent",
        batch : "Batch 1",
        img : "/team-2.png"
      }
      
     
     
     
     
    ];

  return (
   <>
   <section className='w-full hidden md:flex '>
    <div className="w-[90%] mx-auto flex flex-col">

        <div className="heading">
            <h3 className='font-bold text-2xl'>Student Review</h3>
            <h4 className='font-extrabold text-3xl capitalize '>Real people. Real Success Stories</h4>
        </div>

        {/* cards  */}
       <div className="flex justify-between gap-4 my-4 ">
       
                   {stdReview.map((card)=>{
       
                     return <div className='  flex items-center bg-white border border-white/80 shadow-2xl z-50  '>
       
                       <img src={card.img} alt="" className='rounded-[100%] w-15 h-15 object-fill' />
       
                       <div className=" py-3 px-3 flex-1 flex flex-col ">
                         <p className='text-[#14202B]/80 font-semibold my-2 text-xs '>{card.mess}</p>
                         <h5 className='text-[#14202B] font-bold leading-4 '>{card.title}</h5>
                         <p>{card.batch}</p>
                       
                       </div>
                     </div>
                   })}
                 </div>
    </div>
   </section>
   
   </>
  )
}

export default StudentReview
