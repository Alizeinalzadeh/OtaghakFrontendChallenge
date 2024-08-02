import Image from 'next/image';
import { IRoomContainerProps } from './IRoomContainerProps';
import { environment } from '@/config/environment';
import { numberSeparator } from '@/utils/numberSeprator';
import Link from 'next/link';

const RoomContainer: React.FC<IRoomContainerProps> = ({ room }) => {
	return (
		<Link href={`/room/${room.id}`}>
			<div className='flex flex-col gap-2'>
                <div className='h-[216px] relative w-full lg:max-h-[216px] lg:w-[315px]'>
					<Image
						src={`${environment.MEDIA_URL}${room.roomMediaTitles.mainImageTitle}`}
						alt={room.roomMediaTitles.mainImageTitle}
						fill
						className='rounded-xl max-h-[315px] w-full'
					/>
				</div>
				<p className='text-text overflow-ellipsis'>{room.roomName}</p>
				<div className='flex justify-between items-center'>
					<p className='text-text text-xs'>
						از{' '}
						<b className='text-base'>
							{numberSeparator(room.afterDiscount)} تومان
						</b>{' '}
						هر شب
					</p>
					{room.hasDiscount && (
						<div className='flex justify-start items-center gap-1'>
							<p className='line-through text-placeholder decoration-primary text-sm'>
								{numberSeparator(room.basePrice)}
							</p>
							<span className='bg-primary rounded flex justify-center items-center text-white px-2'>
								{room.totalDiscountValue} %
							</span>
						</div>
					)}
				</div>
			</div>
		</Link>
	);
};

export default RoomContainer;
