import Image from 'next/image';
const HeroBanner = () => {
	return (
		<div className='p-4 lg:p-0 relative w-full max-h-[640] max-w-[1440px] mx-auto'>
			<Image
				src={'/images/pages/city/hero.png'}
				width={1440}
				height={640}
				className='rounded-lg lg:rounded-none'
				alt='اتاقک - شهرها'
			/>
		</div>
	);
};

export default HeroBanner;
