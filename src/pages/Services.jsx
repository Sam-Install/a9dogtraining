import React from 'react'
import gsd from '../assets/gsd.jpg'
import ob from '../assets/obedience.jpg'
import det from '../assets/detection.jpg'
import prot from '../assets/protection.jpg'
import petImg from '../assets/pet food.jpg'
import dogwalk from '../assets/dog walk.jpg'
import boarding from '../assets/dog boarding.jpg'
import grooming from  '../assets/grooming.jpg'


const Shughuli = [


{
 id:1,
   img:dogwalk,
   desc:'dog walking ',
   explain:'Dont have time to walk your dogs , call us let us do it for you'
},

{
  id:2,
  img:petImg,
  desc:'sale of pet food/meats',
  explain: 'We also supply dog meat among other pet foods'
},

{
  id:3,
  img:boarding,
  desc:'we offer dog /pet boarding facilities',
  explain:'got a trip to attend and cant take your pet with you , we will take care of her/him/they'
},

{
  id:4,
  img:grooming,
  desc: 'we offer pet grooming/kennel grooming',
  explain:'we also groom your pet, and clean their kennels'
}



];

const Services = () => {
  return (
    <div className='mt-12'>

      <div className='relative h-64 w-full overflow-hidden'>
        <img src={gsd} alt="" className='absolute inset-0 h-full w-full object-cover' />

        <div className='absolute inset-0 bg-black/40 bg-blend-multiply z-10'>

<h1 className='absolute inset-0 flex text-center items-center justify-center text-white text-3xl mb-8'>Our Services & Training Programmes</h1>
<p className='absolute inset-0 flex items-center text-center justify-center text-white mt-16'>We offer alot of services on our Training camp</p>

        </div>
      </div>


      <div className='mt-12'>

        <h1 className='text-center text-3xl mb-6'>Our Traing Programmes</h1>

        <div className='flex flex-col sm:flex-row items-center gap-x-6 px-4'>

            <div className='sm:w-1/2'>


 <img src={ob} alt="" className='w-full h-auto object-cover rounded-lg' />

            </div>

           


            <div className='sm:w-1/2'>

<p className="text-center mt-4">
  Obedience training is vital for every dog—it builds safety, confidence, and clear communication. By learning commands like “sit,” “stay,” and “come,” your dog becomes better behaved and easier to manage around traffic, guests, or other dogs. Train with us using positive reinforcement methods to strengthen your bond and prevent unwanted behaviors. Choose our training to give your dog a well‑mannered foundation and a happier, safer life together.
</p>


            </div>

        </div>


<div className='flex flex-col sm:flex-row gap-x-6 px-4 mt-12'>

    <div className='sm:w-1/2'>
<img src={det} alt="" className='w-full h-auto object-cover rounded-lg' />
    </div>

    <div className='sm:w-1/2 mt-4'>
<p className='text-center'>
  At A9 Dog Training, we specialize in advanced <strong>detection training</strong>, expert <strong>man‑trailing</strong>, and rewarding <strong>sniffing (scent detection)</strong> programs. Our skilled trainers guide you and your dog through structured sessions to teach them how to follow a human scent trail to locate a person or object, and to identify and indicate specific odors reliably. Whether you're interested in building your dog's natural scenting abilities, enhancing mental stimulation, or preparing for practical search-and-rescue style activities, our programs are designed to foster confidence, focus, and a deeper bond between you and your dog.
</p>

    </div>

</div>



<div className='flex flex-col sm:flex-row gap-x-6 px-4 mt-12'>

  <div className='sm:w-1/2 mt-4 '>
<img src={prot} alt="" className='w-full h-auto object-cover rounded-lg' />
  </div>

  <div className='sm:w-1/2 mt-4'>
<p className='text-center'>
At A9 Dog Training, we offer expert detection, man‑trailing and scent‑detection training, along with structured protection and aggression control programs. Our scent-based training hones your dog’s remarkable natural abilities to follow human trails or detect specific odors, building confidence and mental focus. Man‑trailing encourages concentration and a strong handler bond as dogs learn to ignore distractions and follow a person’s unique scent. Meanwhile, our protection and aggression training is built on obedience, impulse control, threat discrimination and controlled bite work under professional supervision. Every program emphasizes safety, positive reinforcement, emotional balance and clear communication.
</p>


  </div>

</div>


<h1 className='text-3xl text-center mt-12 mb-4'>Services offered</h1>
<p className='text-center mb-4'>Apart from dog training we also offer other services</p>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>

  {Shughuli.map(item=>(


<div key={item.id} className='flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition'>

  <img src={item.img} alt={item.desc} className='w-full h-40 object-cover rounded-md mb-3' />
  <h3 className='mb-3 text-orange-600 text-center'>{item.desc}</h3>
  <p className='text-center'>{item.explain}</p>


  </div>

  ))}

</div>


      </div>


    </div>
  )
}

export default Services