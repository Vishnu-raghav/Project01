import React from "react";


function Home() {
  return (
    <>
    <div className="shadow-lg hide-scrollbar bg-slate-100 h-[60vh] m-11 flex p-9">
      <div className=" h-[50vh] w-[50vw] p-11">
         <h1 className="text-3xl font-bold">Sell your Mobile Phone for Instant Cash</h1>
         <div className=" flex w-[39vw] h-[5vh] font-medium text-lg items-center mt-8 ">
          <div className=" w-[12vw] gap-1 flex items-center  h-[4vh]">
         <i class="fa-solid fa-check"></i>
         <p>Maximum value</p>
         </div>
         <div className=" w-[12vw] gap-1 flex items-center justify-center h-[4vh]">
         <i class="fa-solid fa-check"></i>
         <p>Safe & Hassle-free</p>
         </div>
         <div className="w-[12vw]  gap-1 flex items-center justify-center h-[4vh]"> 
         <i class="fa-solid fa-check"></i>
         <p>Free Door Pickup</p>
         </div>
         </div>
         <div className= 'h-9 items-center bg-#F7F7F7 mt-9 w-[30vw] bg-white flex  p-2 '>
        <div className='h-40vw text-gray-700 bg-white '>
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
       <div className='w-[26vw] h-8  ml-4 flex items-center '>
        <input 
        type="text"
        placeholder='Search your Mobile Phone to sell'
        className='w-[30vw] h-8.4 focus:outline-none'
        />
        </div>
      </div>
      <div className="flex items-center mt-5 " >
        <div className="h-0.5 bg-black w-9 "></div>
        <p className="font-medium ml-1 mr-1">Or choose a brand </p>
        <div className="h-0.5 bg-black w-9  "></div>
      </div>
      <div className="mt-7 ">
        <div className="flex space-x-3">
          <div className="h-15 shadow-xl w-18 rounded-md bg-green-700">
            <img className="rounded-md" src="https://s3no.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg?p=default&s=lg" alt="" height={70} width={70} />
          </div>
          <div className="h-15 shadow-xl w-18 rounded-md bg-white">
            <img className="rounded-md" src="https://s3no.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg?p=default&s=lg" alt="" height={70} width={70} />
          </div>
          <div className="h-15 shadow-xl w-18 rounded-md bg-white">
            <img className="rounded-md" src="https://s3no.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg?p=default&s=lg" alt="" height={70} width={70} />
          </div>
          <div className="h-15 shadow-xl w-18 rounded-md bg-white">
            <img className="rounded-md" src="https://s3no.cashify.in/cashify/brand/img/xhdpi/20922c34-8afc.jpg?p=default&s=lg" alt="" height={70} width={70} />
          </div>
          <div className=" flex items-center space-x-2">
            <h1>More brands</h1>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      </div>
     
      <div className=" ml-20 ">
        <div>
        <img src="https://s3no.cashify.in/estore/c45a45e02d0646e2b9ae0b55a85692d7.png?p=default&s=lg" alt="" 
        height={500} width={500} />
      </div>
      </div>
    </div>
      
        <div className=" h-10">
          <h1 className="text-2xl pl-24 font-bold">How it Works</h1>
        <div/>

        <div className="h-[55vh] justify-evenly  space-x-5 flex">
        <div className=" h-[25rem] w-80 mt-6 ml-28 p-8">
          <div className=" pl-16 h-44">
          <div>
            <img src="https://s3no.cashify.in/estore/0cbe53723c3f453b9129991ca35df5f0.png?p=default&s=lg" alt="" width={170}/>
          </div>
          </div>
        <div className="flex pl-6 items-center space-x-4  mt-8 ">
          <div className="rounded-full bg-blue-500 text-white h-6 w-6 text-center ">
            <p>1</p>
          </div>
          <div>
            <p className="text-2xl font-medium">Check Price</p>
          </div>
          </div>
          <div className="w-13"> 
            <p className="my-4">Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
          </div>
        </div>


        <div className=" h-[24rem] w-80 mt-6 ml-28 p-6">
          <div className="pl-16 h-44">
          <div>
            <img src="https://s3no.cashify.in/estore/11c121e3650747689b22301209b725a4.png?p=default&s=lg" alt="" width={170}/>
          </div>
          </div>
        <div className="flex pl-6 w-[18vw] items-center space-x-4 mt-8">
          <div className="rounded-full h-6 w-6 text-center  bg-blue-500 text-white">
            <p>2</p>
          </div>
          <div>
            <p className="text-2xl font-medium">Schedule Pickup</p>
          </div>
          </div>
          <div className="w-13"> 
            <p className="my-4">Book a free pickup from your home or work at a time slot that best suits your convenience.</p>
          </div>
        </div>
        <div className=" h-96 w-80 mt-6 ml-28 p-6">
          <div className="pl-16 h-44">
          <div>
            <img src="https://s3no.cashify.in/estore/b9d74e87eedd4de3b47531e13a033fb2.png?p=default&s=lg" alt="" width={170}/>
          </div>
          </div>
        <div className="flex pl-6 items-center space-x-4 mt-8">
          <div className="rounded-full  h-6 w-6 text-center  bg-blue-500 text-white">
            <p>3</p>
          </div>
          <div>
            <p className="text-2xl font-medium">Check Price</p>
          </div>
          </div>
          <div className="w-13"> 
            <p className="my-4">Did we mention you get paid as soon as our executive picks up your device? It\'s instant payment all the way!</p>
          </div>
        </div>
          </div>


        <div className="bg-green-50 mt-7 h-[20rem]">
          <div>
          <h1 className="pl-24 pt-12 text-3xl font-bold">Why Us</h1>
          </div>
          
          <div>
            <div className="flex mt-6 justify-evenly pl-24">
             <div className="flex">
             <img src="https://s3no.cashify.in/estore/99953fd419e2416ba7dc25e0164372c3.png?p=default&s=lg" alt=""  width={70} />
              <div>
                <h1 className="text-xl font-medium">Best Prices</h1>
                <p>Objective AI-based pricing</p>
              </div>
              </div>
              
              <div className="flex">
              <img src="https://s3no.cashify.in/estore/acef68f939a84a8884640ae56f70867f.png?p=default&s=lg" alt=""  width={70} />
              <div>
                <h1 className="text-xl font-medium">Best Prices</h1>
                <p>Objective AI-based pricing</p>
              </div>
              </div>
               
              <div className="flex">
              <img src="https://s3no.cashify.in/estore/7989ad6b9431414481a1e9dcda098d45.png?p=default&s=lg" alt=""  width={70} />
              <div>
                <h1 className="text-xl font-medium">Best Prices</h1>
                <p>Objective AI-based pricing</p>
              </div>
              </div>
             </div>

            <div className="flex mt-6 justify-evenly pl-24">
             <div className="flex">
             <img src="https://s3no.cashify.in/estore/3c0a0e2e0f4945c09e941a10bcf66e83.png?p=default&s=lg" alt=""  width={70} />
              <div>
                <h1 className="text-xl font-medium">Best Prices</h1>
                <p>Objective AI-based pricing</p>
              </div>
              </div>
              
              <div className="flex">
              <img src="https://s3no.cashify.in/estore/09bf461127cd48acb409f207e1664438.png?p=default&s=lg" alt=""  width={70} />
              <div>
                <h1 className="text-xl font-medium">Best Prices</h1>
                <p>Objective AI-based pricing</p>
              </div>
              </div>
               
              <div className="flex">
              <img src="https://s3no.cashify.in/estore/4413e4f7e0e448f88a73bd4e6047e93d.png?p=default&s=lg" alt=""  width={70} />
              <div>
                <h1 className="text-xl font-medium">Best Prices</h1>
                <p>Objective AI-based pricing</p>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Home
