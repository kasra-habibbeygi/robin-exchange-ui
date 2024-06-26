import { Fragment } from 'react/jsx-runtime';
import { FC, ReactElement, ReactNode } from 'react';

// Assets
import { HtmlTooltip, TooltipContainer } from './tooltip.style';

interface ITooltip {
    placement?:
        | 'top-start'
        | 'top'
        | 'top-end'
        | 'left-start'
        | 'left'
        | 'left-end'
        | 'right-start'
        | 'right'
        | 'right-end'
        | 'bottom-start'
        | 'bottom'
        | 'bottom-end';
    title: ReactNode;
    children: ReactElement;
    arrow?: boolean;
}

const Tooltip: FC<ITooltip> = ({ placement = 'top', title, children, arrow = false }) => {
    return (
        <TooltipContainer>
            <HtmlTooltip arrow={arrow} placement={placement} title={<Fragment>{title}</Fragment>}>
                {children}
            </HtmlTooltip>
        </TooltipContainer>
    );
};

export default Tooltip;
