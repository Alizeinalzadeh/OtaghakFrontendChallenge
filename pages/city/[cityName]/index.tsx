import Layout from '@/components/Layout/Layout';
import Container from '@/components/Layout/Sections/Container/Container';
import HeroBanner from '@/components/Pages/City/HeroBanner/HeroBanner';
import RoomContainer from '@/components/Share/RoomContainer/RoomContainer';
import { ICityRoomsListPage } from '@/interfaces/pages/cityRoomsListPage/ICityRoomsListPage';
import { SearchService } from '@/services/search/SearchService';
import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';

const City: NextPage<ICityRoomsListPage> = (props) => {
	const rooms = props.data.rooms;
	return (
		<Layout>
			<HeroBanner />
			<Container>
				<h1 className='text-base lg:text-lg mb-4 lg:font-bold'>
					اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی
				</h1>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{rooms.map((room) => (
						<RoomContainer room={room} key={room.id} />
					))}
				</div>
			</Container>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const searchServiceInstance = new SearchService();
	const data = await searchServiceInstance.readSearchByCity(
		context.params?.cityName as string
	);

	return {
		props: {
			data,
		},
	};
};

export default City;
