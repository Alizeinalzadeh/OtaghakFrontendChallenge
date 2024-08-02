import Logo from '@/components/Share/Logo/Logo';
import Container from '../Container/Container';
import { DESKTOP_HEADER_ITEMS, MOBILE_HEADER_ITEMS } from './content';
import { useMobileMediaQuery } from '../../Screens/Screens';
import { Button } from '@/components/Kit/Button';
import { Icon } from '@/components/Kit/Icon';
import { useRouter } from 'next/navigation';

const Header = () => {
	const isMobile = useMobileMediaQuery();
	const items = isMobile ? MOBILE_HEADER_ITEMS : DESKTOP_HEADER_ITEMS;
	const router = useRouter();
	return (
		<header className='h-14 w-full bg-white border-b border-b-border flex justify-start items-center'>
			<Container>
				<div className='w-full flex justify-between items-center'>
					<div className='w-20 h-8 relative'>
						<Logo />
					</div>
					<div className='flex justify-start items-center gap-6'>
						{items.map((item) => (
							<Button
								key={item.id}
								variant='inline'
								color='primary'
								label={item.title}
								helperIconPosition='right'
								helperIcon={
									<Icon name={item.icon} size='18px' />
								}
								onClick={() => {
									router.push(item.href);
								}}
							/>
						))}
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
