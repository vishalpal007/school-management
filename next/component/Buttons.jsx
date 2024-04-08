import React from 'react';

const Buttons = () => {
    return (
        <div className="hidden w-full lg:flex justify-center bg-gray-100 items-center">
            <div className=" py-2 flex gap-6">
                <button className="btn btn-xs btn-secondary">About School</button>
                <button className="btn btn-xs btn-accent">Curriculum</button>
                <button className="btn btn-xs btn-primary">Facilities</button>
                <button className="btn btn-xs btn-success">Staff</button>
                <button className="btn btn-xs btn-info">Management</button>
                <button className="btn btn-xs btn-warning">Achievements</button>
                <button className="btn btn-xs btn-error">Photo Gallery</button>
                <button className="btn btn-xs btn-neutral">Former Students</button>
            </div>
        </div>
    );
};

export default Buttons;
