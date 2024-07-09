/* eslint-disable max-len */

import type { SVGProps } from 'react';
const SvgOutlineMenu = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' {...props}>
        <rect width={24} height={2} y={11} rx={1} />
        <rect width={24} height={2} y={4} rx={1} />
        <rect width={24} height={2} y={18} rx={1} />
    </svg>
);
export default SvgOutlineMenu;
