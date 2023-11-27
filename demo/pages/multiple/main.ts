/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@src/styles/vanilla-calendar.css';
import '@src/styles/themes/light.css';
import '@src/styles/themes/dark.css';
// import VanillaCalendar from '@/package/build/vanilla-calendar.min';
import VanillaCalendar from '@src/vanilla-calendar';
import { IOptions } from '@src/types';

const config: IOptions = {
	type: 'multiple',
	settings: {
		selection: {
			day: 'multiple-ranged',
		},
		selected: {
			month: 3,
			year: 2023,
		},
	},
};

document.addEventListener('DOMContentLoaded', () => {
	const calendar = new VanillaCalendar('#calendar', config);
	calendar.init();
});
