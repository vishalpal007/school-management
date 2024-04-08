"use client"

import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Content = () => {
    return <>


        <div className='flex h-auto'>
            {/* Sidebar */}
            <div className="drawer lg:drawer-open w-80 ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="text-2xl fixed top-0 right-0 font-bold text-white drawer-button p-5 lg:hidden">
                        <AiOutlineMenuUnfold />
                    </label>

                </div>
                <div className="drawer-side overflow-y-auto ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content overflow-y-auto">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            {/* Sidebar */}


            <div className='flex justify-center items-center flex-col'>
                {/* Event Images */}
                <div className='card-body  -z-10  '>
                    <Carousel autoPlay infiniteLoop animationHandler={'slide'}   >
                        <div>
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Slide 1" className="w-full h-[350px]" />
                        </div>
                        <div>
                            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" alt="Slide 2" className="w-full h-[350px]" />
                        </div>
                        <div>
                            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" alt="Slide 3" className="w-full h-[350px]" />
                        </div>
                        <div>
                            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" alt="Slide 4" className="w-full h-[350px]" />
                        </div>
                    </Carousel>

                </div>
                {/* Event Images */}


                {/*Paragraph  */}
                <div className='px-10 pb-10'>
                    <p className='text-pretty text-sm'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consequatur cupiditate debitis quod aliquid aut tenetur voluptate pariatur libero vero magni temporibus optio quasi tempora, quia, dolorem rerum eum quae.
                    </p>
                </div>
                {/*Paragraph  */}
            </div>


        </div>


        {/* Footer */}
        <div className='flex items-center justify-between w-full bg-gray-200 py-2  px-10'>
            <div className='flex gap-10'>
                <h1 className='font-semibold '>Contact Us</h1>
                <h1 className='font-semibold '>About</h1>
                <h1 className='font-semibold '>Disclaimer</h1>
            </div>
            <button className="btn btn-primary btn-sm">Admin</button>
        </div>
        {/* Footer */}


    </>
}

export default Content