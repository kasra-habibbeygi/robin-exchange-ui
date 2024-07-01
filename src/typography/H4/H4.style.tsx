import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const H4Container = styled.h4(
    ({ theme }) => css`
        font-size: ${theme.fontSizeH4};
    `
);
