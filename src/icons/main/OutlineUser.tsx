/* eslint-disable max-len */

import type { SVGProps } from 'react';
const SvgOutlineUser = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M20 20v-.75A4.25 4.25 0 0 0 15.75 15h-7.5A4.25 4.25 0 0 0 4 19.25V20'
        />
        <circle cx={12} cy={7} r={4} stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} />
    </svg>
);
export default SvgOutlineUser;
