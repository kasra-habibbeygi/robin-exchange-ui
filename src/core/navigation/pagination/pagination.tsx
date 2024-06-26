// Assets
import { FC, useEffect, useState } from 'react';
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
    /**
     * If you include the value of the main page in the query within the URL, you can use these props. It should be noted
     * that your query name must be equal to "page," and then boom 💣
     */
    getCurrentPageFromURL?: boolean;
    variant?: 'outline' | 'filled' | 'ghost';
    radius?: 'normal' | 'rounded' | 'sharp';
    color?: 'accent' | 'normal';
}

const getQueryParams = () => {
    const url = new URL(window.location.href);
    return new URLSearchParams(url.search).get('page');
};

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
    color = 'accent',
    getCurrentPageFromURL = false
}) => {
    const [page, setPage] = useState<number | null>(null);

    useEffect(() => {
        if (getCurrentPageFromURL) {
            const queryPage = getQueryParams();
            if (queryPage) {
                setPage(parseInt(queryPage, 10));
            }
        }
    }, [getCurrentPageFromURL]);

    return (
        <PaginationContainer className={`${variant} ${radius}-radius ${color}-color`}>
            <MUIPagination
                count={totalPages}
                size={size}
                siblingCount={siblingCount}
                boundaryCount={boundaryCount}
                page={getCurrentPageFromURL ? page! : currentPage}
                onChange={(_, page) => onChange(page)}
                showFirstButton={jumpToFirstPage}
                showLastButton={JumpToLastPage}
            />
        </PaginationContainer>
    );
};

export default Pagination;
