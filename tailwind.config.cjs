/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				orange: '#ECA00D',
				link: 'rgba(255, 255, 255, 0.7)',
				linkHover: 'rgba(255, 255, 255, 0.4)',
				heroBottom: 'rgba(255, 255, 255, 0.6)',
				headerLine: '#D0C7C7',
				topsLine: '#E0E6E8',
				booking: 'rgba(255, 255, 255, 0.4)',
				footerLine: '#D3C9C9',
				footerbg: '#252323',
				sliderBtn: '#C4C4C4',
				borderColor: '#DAD0D0',
				modalBg: '#0000003b',
			},
			gridTemplateRows: {
				'16': 'repeat(5, minmax(0, 170px))'
			},
			gridTemplateColumns: {
				"16": 'repeat(16, minmax(0, 150px))'
			},
			screens: {
			},
			fontSize: {
				18: "1.125rem",
				24: "1.5rem",
				36: "2.25rem"
			},
			screens:{
				mac: '1490px',
				phone:'600px'
			},
			translate:{
				"min50":"-50%"
			},
			backgroundImage: {
				heroBg: "url('/images/hero-bg.png')",
				BookingBg: "url('/images/bookingBg.png')"
			},
			gap: {
				headerWrapperGap: "1.625rem"
			},
			boxShadow: {
				cardShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				slideShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
			},
			width: {
				logo: "5.375rem"
			},
			height: {
				logo: "5.375rem"
			},
			padding: {
				10: "0.625rem"
			},
			spacing: {
				cardSpacing: "2.375rem"
			},
			borderRadius: {
				heroLink: "5px"
			},
			fontSize: {
				'reg14': ['0.875rem', {
					lineHeight: '1.375rem',
					fontWeight: '400',
				}],
				'bold16': ['1rem', {
					lineHeight: '1.21rem',
					fontWeight: '700',
				}],
				'reg18': ['18px', {
					lineHeight: '1.875rem',
					fontWeight: '400',
				}],
				'bold20': ['1.25rem', {
					lineHeight: '1.5rem',
					fontWeight: '700',
				}],
				'booking18': ['1.125rem', {
					lineHeight: '1.375rem',
					fontWeight: '500',
				}],
				'bold18': ['1.125rem', {
					lineHeight: '1.375',
					fontWeight: '700',
				}],
				'bold24': ['1.5rem', {
					lineHeight: '1.8125rem',
					fontWeight: '700',
				}],
				'semi24': ['1.5rem', {
					lineHeight: '1.8125rem',
					fontWeight: '600',
				}],
				'bold36': ['2.25rem', {
					lineHeight: '2.75rem',
					fontWeight: '700',
				}],
				'bold42M': ['2.625rem', {
					lineHeight: '3.1875rem',
					fontWeight: '700',
				}],
				'bold46': ['2.875rem', {
					lineHeight: '3.5rem',
					fontWeight: '700',
				}],
				'bold50': ['3.125rem', {
					lineHeight: '3.8125rem',
					fontWeight: '700',
				}],
				'bold56': ['3.5rem', {
					lineHeight: '4.25rem',
					fontWeight: '700',
				}],
				'bold120': ['7.5rem', {
					lineHeight: '9.0625rem',
					fontWeight: '700',
				}]
			}
		},
	},
	plugins: [],
}
