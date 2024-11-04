import React from 'react'

const SkeletonLoader = () => {
  return (
<div className='animate-pulse'>
<div className=" flex justify-between items-center border-2 border-slate-500 p-3 mb-3 last:mb-0 rounded-lg">
<div className="flex items-center justify-between w-full ">

  <div className="flex gap-3 ">
    <div className="h-5 w-5 bg-slate-500 rounded-sm"></div>
    <div className="h-5 w-60 bg-slate-500 rounded-full"></div>
  </div>

  <div className="flex flex-col items-center">
    <div className="h-1 w-2 bg-slate-500 rounded-t-sm"></div>
    <div className="h-5 w-4 rounded-b-sm bg-slate-500"></div>
  </div>

</div>
</div>

<div className=" flex justify-between items-center border-2 border-slate-500 p-3 mb-3 last:mb-0 rounded-lg">
<div className="flex items-center justify-between w-full ">

  <div className="flex gap-3 ">
    <div className="h-5 w-5 bg-slate-500 rounded-sm"></div>
    <div className="h-5 w-60 bg-slate-500 rounded-full"></div>
  </div>

  <div className="flex flex-col items-center">
    <div className="h-1 w-2 bg-slate-500 rounded-t-sm"></div>
    <div className="h-5 w-4 rounded-b-sm bg-slate-500"></div>
  </div>

</div>
</div>

<div className=" flex justify-between items-center border-2 border-slate-500 p-3 mb-3 last:mb-0 rounded-lg">
<div className="flex items-center justify-between w-full ">

  <div className="flex gap-3 ">
    <div className="h-5 w-5 bg-slate-500 rounded-sm"></div>
    <div className="h-5 w-60 bg-slate-500 rounded-full"></div>
  </div>

  <div className="flex flex-col items-center">
    <div className="h-1 w-2 bg-slate-500 rounded-t-sm"></div>
    <div className="h-5 w-4 rounded-b-sm bg-slate-500"></div>
  </div>

</div>
</div>
</div>


  )
}

export default SkeletonLoader