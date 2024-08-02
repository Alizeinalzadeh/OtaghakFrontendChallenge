import { useMobileMediaQuery } from '@/components/Layout/Screens/Screens';
import Image from 'next/image';

const Logo = () => {
	const isMobile = useMobileMediaQuery();
	return (
		<Image
			layout='fill'
			src={
				isMobile
					? '/images/logo/main-logo-mobile.png'
					: '/images/logo/main-logo-desktop.png'
			}
			priority
			alt='otaghak'
		/>
	);
};

export default Logo;
