'use client';
import { BREAKPOINTS } from '@/config/breakpoints';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useDesktopMediaQuery = () => {
	const desktopWidth = BREAKPOINTS.DESKTOP;
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const query = `(min-width: ${desktopWidth}px)`;
	const isDesktop = useMediaQuery({ query });

	return isClient && isDesktop;
};

export const useMobileMediaQuery = () => {
	const mobileWidth = BREAKPOINTS.MOBILE;
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const query = `(max-width: ${mobileWidth}px)`;
	const isMobile = useMediaQuery({ query });

	return isClient && isMobile;
};

export const useTabletMediaQuery = () => {
	const minTabletWidth = BREAKPOINTS.TABLET;
	const maxTableWidth = BREAKPOINTS.MOBILE;

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	const query = `min-width: ${minTabletWidth}px, max-width: ${maxTableWidth}px`;

	const isTable = useMediaQuery({ query });
	return isClient && isTable;
};

export const Desktop = ({ children }: { children: React.ReactNode }) => {
	const isDesktopMode = useDesktopMediaQuery();
	return isDesktopMode && children;
};

export const Mobile = ({ children }: { children: React.ReactNode }) => {
	const isMobileMode = useMobileMediaQuery();
	return isMobileMode && children;
};

export const Tablet = ({ children }: { children: React.ReactNode }) => {
	const isTabletMode = useTabletMediaQuery();
	return isTabletMode && children;
};
