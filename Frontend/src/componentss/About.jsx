import React from 'react'

function About() {
  return (
     <>
     <div className='relative py-2 '>

        <div >
     <img src="https://thumbs.dreamstime.com/b/buffet-food-delicious-cocktails-hotel-321402369.jpg" className='h-96 w-screen' alt="" />
   
        </div>

        <div>

            <h1 className=' absolute text-xl bottom-80 left-1/2 text-white'>About us</h1>

            <p className='absolute text-sm bottom-60 left-40 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias blanditiis, veniam quia non iusto voluptatem quae nisi dolorum eligendi. losaddadad sdadad<br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis non distinctio ea, consequuntur veniam molestiae ad? Magnam placeat nam earum?</p>
        </div>
  
                  <div>

                    <button className='bg-yellow-300 absolute bottom-20 left-1/2 p-2 rounded-md text'>Learn more</button>
                  </div>
     </div>
     </>
  )
}

export default About
