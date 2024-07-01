import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SmallContainer = styled.small(
    ({ theme }) => css`
        font-size: ${theme.fontSizSmall};
    `
);
