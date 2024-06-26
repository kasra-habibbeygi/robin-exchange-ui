/* eslint-disable max-len */
/* eslint-disable prefer-template */
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
const folderPath = './src/icons/main';

function processFiles(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.stat(filePath, err => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }

                if (path.extname(file) === '.tsx') {
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error reading file:', err);
                            return;
                        }

                        const updatedData =
                            '/* eslint-disable max-len */\n' +
                            data.replace(/#000/g, 'currentColor').replaceAll(/import \* as React from "react";/g, '');

                        fs.writeFile(filePath, updatedData, 'utf8', err => {
                            if (err) {
                                console.error('Error writing to file:', err);
                            } else {
                                console.log(`Processed file: ${filePath}`);

                                exec('yarn icon-linter', (err, stdout, stderr) => {
                                    if (err) {
                                        console.error(`Error running ESLint on ${filePath}:`, err);
                                        console.error(stderr);
                                    } else {
                                        console.log(`ESLint ran successfully on ${filePath}`);
                                        console.log(stdout);
                                    }
                                });
                            }
                        });
                    });
                }
            });
        });
    });
}

function generateImportsAndExports(destinationFile = './src/icons/list.tsx', folderPath = './src/icons/main') {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return;
        }

        let imports = '';
        let components = '';

        files.forEach(file => {
            const componentName = path.basename(file, path.extname(file));

            if (path.extname(file) === '.tsx') {
                imports += `import ${componentName} from './main/${componentName}';\n`;
                components += `  
                    <li
                        onClick={() => {
                            navigator.clipboard.writeText('<${componentName} />');
                        }}
                    >
                        <Button variant='ghost'>
                            <${componentName} />
                        <P>${componentName}</P>
                        </Button>
                    </li>
                `;
            }
        });

        const fileContent = `
            ${imports}
            import { css } from '@emotion/react';
            import styled from '@emotion/styled';
            import P from '@/typography/P';
            import Button from '@/core/form-group/button';

            const SVGListContainer = styled.div(
                () => css\`\
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
                \`);

            const AllIcons = () => (
                <SVGListContainer>
                    <ul>
                        ${components}
                    </ul>
                </SVGListContainer>
            );
            export default AllIcons;
        `;

        fs.writeFile(destinationFile, fileContent, 'utf8', err => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Generated file: ${destinationFile}`);
            }
        });
    });
}

processFiles(folderPath);
generateImportsAndExports();
