export function Moon({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			height={size}
			width={size}
			className={classes}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);
}

export function Sun({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			height={size}
			width={size}
			className={classes}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);
}

export function Hamburger({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			height={size}
			width={size}
			className={classes}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 9h16.5m-16.5 6.75h16.5"
			/>
		</svg>
	);
}

export function Xmark({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			height={size}
			width={size}
			className={classes}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}

export function Quote({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			className={classes}
			height={size}
			width={size}
			viewBox="0 0 975.036 975.036"
		>
			<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
		</svg>
	);
}

export function LinkIcon({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={classes}
			height={size}
			width={size}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
			/>
		</svg>
	);
}

export function CodeIcon({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={classes}
			height={size}
			width={size}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
			/>
		</svg>
	);
}

export function Mail({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 20 20"
			className={classes}
			height={size}
			width={size}
		>
			<path
				fillRule="evenodd"
				d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
				clipRule="evenodd"
			></path>
		</svg>
	);
}

export function Twitter({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			version="1.2"
			baseProfile="tiny"
			viewBox="0 0 24 24"
			className={classes}
			height={size}
			width={size}
		>
			<path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034-.786.417-1.569.703-2.351.861-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078-.715.717-1.076 1.588-1.076 2.605 0 .309.039.585.117.819-3.076-.105-5.622-1.381-7.628-3.837-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388.549.676 1.254 1.107 2.115 1.291-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841.625.472 1.344.721 2.152.743-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974.784-1.564 1.172-3.192 1.172-4.892v-.468c.758-.57 1.371-1.212 1.84-1.921-.68.293-1.383.492-2.11.593z"></path>
		</svg>
	);
}

export function LinkedIn({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			version="1.2"
			baseProfile="tiny"
			viewBox="0 0 24 24"
			className={classes}
			height={size}
			width={size}
		>
			<path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z"></path>
			<ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse>
		</svg>
	);
}

export function XMark({ size = 30, classes = '' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={classes}
			height={size}
			width={size}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}
