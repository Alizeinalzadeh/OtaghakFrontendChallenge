const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className='w-full px-4 py-8 max-w-[1320px] lg:mx-auto'>{children}</div>
	);
};
export default Container;
