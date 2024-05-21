export type Education = {
	institutions: {
		image: {
			src: string;
			width: number;
		};
		name: string;
		url: string;
		location: {
			city: string;
			state: string;
		};
		major: string;
		duration: {
			start: {
				month: string;
				year: number;
			};
			end?: {
				month: string;
				year: number;
			};
		};
		awards: string[];
	}[];
};
