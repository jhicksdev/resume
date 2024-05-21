export type EmploymentHistory = {
	employments: {
		company: {
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
		};
		position: string;
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
		skills: string[];
	}[];
};
