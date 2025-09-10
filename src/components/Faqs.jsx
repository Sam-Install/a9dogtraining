import React, { useState } from 'react'

const faqs = [

  {
    question: 'What training methods do you use?',
    answer: 'We follow positive reinforcement (reward‑based) training—using treats, praise, toys, or play to encourage good behavior, never punishment or force.' 
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Simple obedience skills often show progress within 1–2 sessions. Behavior issues like leash reactivity may need 3–5 sessions depending on consistency and your dog’s pace.'
  },
  {
    question: 'How do you stop leash pulling?',
    answer: 'We teach loose leash walking: stop when the leash tightens and resume when it relaxes. This reinforces that pleasant walking requires slack—a proven positive reinforcement strategy.'
  },
  {
    question: 'Is training suitable for rescue or shy dogs?',
    answer: 'Absolutely. We specialize in working with rescue and shy dogs by building trust gradually, with gentle introduction to new experiences and patient, confidence‑focused training.'
  },
  {
    question: 'What should I bring to a training session?',
    answer: 'Bring your dog, a 6‑ft flat leash, and their favorite treats or kibble. We provide any additional tools if needed, and familiar items help keep your dog comfortable.'
  },
  {
    question: 'How important is timing when rewarding?',
    answer: 'Timing is key—reward your dog immediately after the desired behavior (within seconds). Tools like clickers or marker words (“Yes!”) help with precise timing.'
  }

];


const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {

        setOpenIndex(openIndex === i ? null : i)
    }

  return (
    <div className='mt-12 px-4 max-w-3xl mx-auto'>
        <h2 className='text-center text-2xl mb-6'>Frequently asked Questions</h2>

        <div className='space-y-4'>

            {faqs.map((item,i)=>(

                <div key={i} className='border rounded-md p-4'>

                    <button onClick={()=>toggle(i)} className='w-full flex justify-between items-center font-semibold text-left'>

<span>{item.question}</span>
<span>{openIndex === i ? '-' : '+'}</span>

                    </button>

                    {openIndex === i &&(

<p className='mt-2 text-gray-700'>{item.answer}</p>

                    )}

                    </div>
            ))}

        </div>

    </div>
  )
}

export default Faqs