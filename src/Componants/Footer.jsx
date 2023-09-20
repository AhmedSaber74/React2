import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="footer1 container-fluid">
        <div className="row d-flex justify-content-around ">
            {/*  */}
            <div className=' text-center col-md-3 my-5'>
                <h3>LOCATION</h3>
                <p>2215 Johan Daniel Drive</p>
                <p>Clark,Mo 6524</p>
            </div>
            {/* */}
            <div className=' text-center col-md-3 my-5'>
                <h3>AROUND THE WEB </h3>
                <div>
                    <i _ngcontent-qeg-c21="" class=" fa-brands fa-facebook mx-1 icon"></i>
                    <i _ngcontent-qeg-c21="" class=" fa-brands fa-twitter mx-1 icon"></i>
                    <i _ngcontent-qeg-c21="" class=" fa-brands fa-linkedin mx-1 icon"></i>
                    <i _ngcontent-qeg-c21="" class=" fa-brands fa-globe mx-1 icon"></i>
                </div>
            </div>
            {/*  */}
            <div className=' text-center col-md-3 my-5'>
            <h3>AROUND FREELANCER </h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            {/*  */}
            <div className=' footer2 py-4 col-md-12'>
                <p className=' text-center'>
                Copyright © Your Website 2021
                </p>

            </div>
        </div>
    </div>



    </>


  )
}
