import React from 'react';
import Image from 'next/image'
import SchoolImage from '../public/school.jpg'
import schoollogo from '../assets/schoollogo.jpg'


const Header = () => {
    return <>
        <div
            className="bg-center bg-cover bg-no-repeat fill-transparent"
            style={{
                backgroundImage: `url("${SchoolImage}")`,
                height: '300px',
                padding: '130px',
                textAlign: 'center',

            }}
        >
            <div >
                <Image className='absolute top-0 left-0 h-20 w-20 rounded-full' src={schoollogo} />
            </div>
            <h1 className='text-white font-bold font-serif lg:text-4xl text-2xl'>
                St.Joseph Convent School <br />
                <span>(ICSE Board)</span>
            </h1>
        </div >



    </>
};

export default Header;
