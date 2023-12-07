import React from 'react';

function About(props) {
    return (
        <div className='about-middle w-auto p-3'>
            <div className='about-left w-35 p-3'>
                <h1>ABOUT ME</h1>
                <p>User is a juniour  software developer Based in Kenya</p>
                <img src='https://static.vecteezy.com/system/resources/previews/022/665/512/original/enthusiastic-3d-student-boy-with-thumbs-up-on-white-background-transparent-background-free-png.png'  />


            </div>
            <div className='about-right w-65 p-34'>
                <h1>I,m User</h1>
                <h4>A Lead <strong>Fullstack</strong> software engineer based in <strong>Kenya</strong>.</h4>

                <p>
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                 My passion is to design digital user experiences through the bold interface and meaningful interactions.
                </p>

                <div className='about-left-details'>
                   <div className='left-details'>
                    <span>Birthday</span>
                    <p>4th April 2001</p>
                   </div>

                   <div className='left-details'>
                    <span>E-mail</span>
                    <p>bobbymbogo71@gmail.com</p>
                   </div>

                   

                
                </div>


                <div className='about-left-details'>
                   <div className='left-details'>
                    <span>Age</span>
                    <p>22 Yr</p>
                   </div>

                   <div className='left-details'>
                    <span>Phone</span>
                    <p>+254-769-922-984</p>
                   </div>

                   

                
                </div>



                <div className='about-left-details'></div>
                <div className='about-left-details'></div>
                <div className='about-left-details'></div>

              

            </div>
            
        </div>
    )
}

export default About;