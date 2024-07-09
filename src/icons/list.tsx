import OutlineAngle from './main/OutlineAngle';
import OutlineBell from './main/OutlineBell';
import OutlineChange from './main/OutlineChange';
import OutlineHistory from './main/OutlineHistory';
import OutlineMenu from './main/OutlineMenu';
import OutlineTransfer from './main/OutlineTransfer';
import OutlineUser from './main/OutlineUser';
import OutlineWallet from './main/OutlineWallet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import P from '@/typography/P';
import Button from '@/core/form-group/button';

const SVGListContainer = styled.div(
    () => css`
        ul {
            list-style: none;
            width: 100%;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            padding: 0;

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: max-content;
                height: 100px;
                border-radius: 8px;
                background-color: #f7f7f7 !important;
                cursor: pointer;
                gap: 10px;
                padding: 0 20px;

                p {
                    font-size: 14px;
                    font-weight: 300;
                    margin-top: 10px;
                    color: black;
                }

                svg {
                    color: black;
                    width: 26px;
                    height: auto;
                }
            }
        }
    `
);

const AllIcons = () => (
    <SVGListContainer>
        <h3>Bold Icons</h3>
        <ul></ul>
        <h3>outline Icons</h3>
        <ul>
            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineAngle />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineAngle />
                    <P>OutlineAngle</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineBell />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineBell />
                    <P>OutlineBell</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineChange />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineChange />
                    <P>OutlineChange</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineHistory />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineHistory />
                    <P>OutlineHistory</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineMenu />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineMenu />
                    <P>OutlineMenu</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineTransfer />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineTransfer />
                    <P>OutlineTransfer</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineUser />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineUser />
                    <P>OutlineUser</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineWallet />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineWallet />
                    <P>OutlineWallet</P>
                </Button>
            </li>
        </ul>
    </SVGListContainer>
);
export default AllIcons;
