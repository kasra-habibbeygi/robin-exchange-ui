import Angle from './main/Angle';
import BoldCheck from './main/BoldCheck';
import BoldCross from './main/BoldCross';
import BoldEnvelope from './main/BoldEnvelope';
import BoldHome from './main/BoldHome';
import BoldMenuBurger from './main/BoldMenuBurger';
import BoldSearch from './main/BoldSearch';
import BoldUser from './main/BoldUser';
import CheckCircle from './main/CheckCircle';
import Cross from './main/Cross';
import CrossCircle from './main/CrossCircle';
import FileInfo from './main/FileInfo';
import OutlineCheck from './main/OutlineCheck';
import OutlineCross from './main/OutlineCross';
import OutlineEnvelope from './main/OutlineEnvelope';
import OutlineHome from './main/OutlineHome';
import OutlineMenuBurger from './main/OutlineMenuBurger';
import OutlineSearch from './main/OutlineSearch';
import OutlineUser from './main/OutlineUser';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import P from '../typography/P';
import Button from '../core/button';

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
                    font-weight: 500;
                    margin-top: 10px;
                    color: black;
                }

                svg {
                    color: black;
                    width: 20px;
                    height: auto;
                }
            }
        }
    `
);

const AllIcons = () => (
    <SVGListContainer>
        <ul>
            <li
                onClick={() => {
                    navigator.clipboard.writeText('<Angle />');
                }}
            >
                <Button variant='ghost'>
                    <Angle />
                    <P>Angle</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<BoldCheck />');
                }}
            >
                <Button variant='ghost'>
                    <BoldCheck />
                    <P>BoldCheck</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<BoldCross />');
                }}
            >
                <Button variant='ghost'>
                    <BoldCross />
                    <P>BoldCross</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<BoldEnvelope />');
                }}
            >
                <Button variant='ghost'>
                    <BoldEnvelope />
                    <P>BoldEnvelope</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<BoldHome />');
                }}
            >
                <Button variant='ghost'>
                    <BoldHome />
                    <P>BoldHome</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<BoldMenuBurger />');
                }}
            >
                <Button variant='ghost'>
                    <BoldMenuBurger />
                    <P>BoldMenuBurger</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<BoldSearch />');
                }}
            >
                <Button variant='ghost'>
                    <BoldSearch />
                    <P>BoldSearch</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<BoldUser />');
                }}
            >
                <Button variant='ghost'>
                    <BoldUser />
                    <P>BoldUser</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<CheckCircle />');
                }}
            >
                <Button variant='ghost'>
                    <CheckCircle />
                    <P>CheckCircle</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<Cross />');
                }}
            >
                <Button variant='ghost'>
                    <Cross />
                    <P>Cross</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<CrossCircle />');
                }}
            >
                <Button variant='ghost'>
                    <CrossCircle />
                    <P>CrossCircle</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<FileInfo />');
                }}
            >
                <Button variant='ghost'>
                    <FileInfo />
                    <P>FileInfo</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineCheck />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineCheck />
                    <P>OutlineCheck</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineCross />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineCross />
                    <P>OutlineCross</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineEnvelope />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineEnvelope />
                    <P>OutlineEnvelope</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineHome />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineHome />
                    <P>OutlineHome</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineMenuBurger />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineMenuBurger />
                    <P>OutlineMenuBurger</P>
                </Button>
            </li>

            <li
                onClick={() => {
                    navigator.clipboard.writeText('<OutlineSearch />');
                }}
            >
                <Button variant='ghost'>
                    <OutlineSearch />
                    <P>OutlineSearch</P>
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
        </ul>
    </SVGListContainer>
);
export default AllIcons;
