import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'

const Sobre = () => {
    return (
        <div className='pt-2'>
            <PageTitle title='Sobre'/>
            <h1 className="text-center font-bold my-4 text-2xl">Um pouco da nosssa história</h1>
           
            <div className='grid grid-cols-2 gap-4'>
                
                <div className='text-center px-2 py-1 m-1'>
                    <a>
                        <img 
                            className='max-w-10/5 border-red-300 shadow-lg py-2 rounded-lg'
                            src='/burger.jpg'
                            alt='Hambúrguer'    
                        />

                    </a>
                </div>

                <div className='container text-center px-2 py-1 m-1 pt-12'>
                    <p>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre