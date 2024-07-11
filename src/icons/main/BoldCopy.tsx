/* eslint-disable max-len */

import type { SVGProps } from 'react';
const SvgBoldCopy = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' {...props}>
        <g clipPath='url(#BoldCopy_svg__a)'>
            <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4.167 12.5h-.834a1.667 1.667 0 0 1-1.666-1.667v-7.5a1.667 1.667 0 0 1 1.666-1.666h7.5A1.667 1.667 0 0 1 12.5 3.333v.834M9.167 7.5h7.5c.92 0 1.666.746 1.666 1.667v7.5c0 .92-.746 1.666-1.666 1.666h-7.5c-.92 0-1.667-.746-1.667-1.666v-7.5c0-.92.746-1.667 1.667-1.667'
            />
        </g>
        <defs>
            <clipPath id='BoldCopy_svg__a'>
                <path fill='#fff' d='M0 0h20v20H0z' />
            </clipPath>
        </defs>
    </svg>
);
export default SvgBoldCopy;
