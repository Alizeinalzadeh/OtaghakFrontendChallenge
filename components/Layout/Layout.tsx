import Header from './Sections/Header/Header';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className='min-h-dvh w-full'>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
