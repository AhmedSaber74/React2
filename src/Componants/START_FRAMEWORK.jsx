import React from 'react'
import MainImg from "../avataaars.svg";
export default function START_FRAMEWORK() {
  return (
    <div className='START_FRAMEWORK_Css text-center py-5'>
        <div className=' w-25 m-auto'>
            <img className='w-75' src={MainImg} alt="" />
        </div>

        {/*  */}
        <div className='mb-3'>
            <h2 className='Font_size'>
                START FRAMEWORK
            </h2>
        </div>
        {/*  */}
        <div className="d-flex text-center justify-content-center align-items-center mb-3">
            <div _ngcontent-qeg-c6="" class="line  me-3"></div>
            <i _ngcontent-qeg-c6="" class=" Star fa-solid fa-star"></i>
            <div _ngcontent-qeg-c6="" class="line ms-3"></div>
          </div>
          {/*  */}
          <div>
            <p className='Star pb-3  '>
                Graphic Artest - Web Designer - Illustrator
            </p>
          
        </div>
    </div>
   
  );
}
