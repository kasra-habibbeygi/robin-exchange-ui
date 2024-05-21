// Assets
import { FC } from 'react';
import { PaginationContainer } from './pagination.style';

// MUI
import { Pagination as MUIPagination } from '@mui/material';

// Types
interface IPagination {
    onChange: (page: number) => void;
    /**
     * The page number you are currently on
     */
    currentPage: number;
    /**
     * The total number of pages
     */
    totalPages: number;
    /**
     * How many additional pages (before and after the selected one) do you want to display alongside the currently selected page?
     */
    siblingCount?: number;
    /**
     * How many pages do you want to display at the beginning and at the end?
     */
    boundaryCount?: number;
    /**
     * Pagination Size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Do you want a "Jump to the first page" button?
     */
    jumpToFirstPage?: boolean;
    /**
     * Do you want a "Jump to the Last page" button?
     */
    JumpToLastPage?: boolean;
    variant?: 'outline' | 'filled' | 'ghost';
    radius?: 'normal' | 'rounded' | 'sharp';
    color?: 'accent' | 'normal';
}

const Pagination: FC<IPagination> = ({
    onChange,
    currentPage,
    totalPages,
    siblingCount = 1,
    boundaryCount = 1,
    size = 'small',
    jumpToFirstPage = false,
    JumpToLastPage = false,
    variant = 'outline',
    radius = 'normal',
    color = 'accent'
}) => {
    return (
        <PaginationContainer className={`${variant} ${radius}-radius ${color}-color`}>
            <MUIPagination
                count={totalPages}
                size={size}
                siblingCount={siblingCount}
                boundaryCount={boundaryCount}
                page={currentPage}
                onChange={(_, page) => onChange(page)}
                showFirstButton={jumpToFirstPage}
                showLastButton={JumpToLastPage}
            />
        </PaginationContainer>
    );
};

export default Pagination;
