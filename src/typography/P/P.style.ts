import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PContainer = styled.p(
    ({ theme }) => css`
        margin: 0;
        font-size: ${theme.fontSizeBase};
    `
);
