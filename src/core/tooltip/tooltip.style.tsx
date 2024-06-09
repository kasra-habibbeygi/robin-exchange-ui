import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const TooltipContainer = styled.div(
    () => css`
        .MuiTooltip-tooltip {
            background-color: white;
        }
    `
);

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(
    () => css`
        .${tooltipClasses.tooltip} {
            background-color: white;
            color: black;
            font-size: 14px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            padding: 10px;
            line-height: 22px;

            p {
                margin: 0;
            }
        }

        .${tooltipClasses.arrow} {
            &::before {
                background-color: white;
                box-shadow: rgb(0 0 0 / 22%) 0px 0px 2px;
            }
        }
    `
);
