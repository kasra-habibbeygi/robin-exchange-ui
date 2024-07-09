/* eslint-disable max-len */

import type { SVGProps } from 'react';
const SvgOutlineBell = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M9.51 18.003v.512A2.49 2.49 0 0 0 12 21.004v0a2.49 2.49 0 0 0 2.491-2.49v-.511'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M17.95 18.003c1.134 0 2.053-.92 2.053-2.054v0c0-.577-.229-1.13-.636-1.537l-1.365-1.364v-4.05A6 6 0 0 0 12 2.997v0A6 6 0 0 0 5.997 9v4.05l-1.364 1.363c-.407.408-.636.96-.636 1.537v0a2.054 2.054 0 0 0 2.053 2.054z'
            clipRule='evenodd'
        />
    </svg>
);
export default SvgOutlineBell;
