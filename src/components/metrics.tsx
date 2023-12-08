function Metrics() {
    return (
        <div className='flex gap-12 mb-6'>
            <div className='flex flex-col items-center'>
                <p className='text-Very-dark-desaturated-blue font-bold text-lg'>80K</p>
                <p className='text-Dark-gray text-xs tracking-widest'>Followers</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-Very-dark-desaturated-blue font-bold text-lg'>803K</p>
                <p className='text-Dark-gray text-xs tracking-widest'>Likes</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-Very-dark-desaturated-blue font-bold text-lg'>1.4K</p>
                <p className='text-Dark-gray text-xs tracking-widest'>Photos</p>
            </div>
        </div>
    );
}

export default Metrics;