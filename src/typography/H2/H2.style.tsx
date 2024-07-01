import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const H2Container = styled.h2(
    ({ theme }) => css`
        font-size: ${theme.fontSizeH2};
    `
);
