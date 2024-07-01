import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const H5Container = styled.h5(
    ({ theme }) => css`
        font-size: ${theme.fontSizeH5};
    `
);
