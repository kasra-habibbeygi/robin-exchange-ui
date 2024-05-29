/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { FC, ReactNode, useEffect, useState } from 'react';

// Assets
import { AccordionContainer } from './accordion.style';

// Types
export interface IAccordion {
    /**
     * If you want one of the accordions to be open when the page loads, place your desired index here.
     */
    defaultExpanded?: number;
    /**
     * If you want the user to be unable to open one or more of the accordions, write an array of the indices you want to disable here.
     */
    disabledKey?: number[];
    className?: string;
    dataList: {
        title: ReactNode;
        content: ReactNode;
    }[];
}

const Accordion: FC<IAccordion> = ({ className, dataList, disabledKey, defaultExpanded = null }) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
    const [height, setHeight] = useState<number>(0);

    const onAccordionClickHandler = (index: number) => {
        if (activeQuestionIndex !== index) {
            setActiveQuestionIndex(index);
            setHeight(document.getElementById(`value_text_${index}`)?.offsetHeight!);
        } else {
            setActiveQuestionIndex(null);
        }
    };

    useEffect(() => {
        if (defaultExpanded !== null) {
            console.log(defaultExpanded);
            setActiveQuestionIndex(defaultExpanded);
            setHeight(document.getElementById(`value_text_${defaultExpanded}`)?.offsetHeight!);
        }
    }, [defaultExpanded]);

    return (
        <>
            {dataList.map((item, index) => (
                <AccordionContainer
                    className={className ?? ''}
                    contentHeight={activeQuestionIndex === index ? height : 0}
                    lastOne={dataList.length === index + 1}
                    disabled={disabledKey?.includes(index) ?? null}
                >
                    <div onClick={() => onAccordionClickHandler(index)} className='title'>
                        {item.title}
                    </div>
                    <div className='content'>
                        <div id={`value_text_${index}`}>{item.content}</div>
                    </div>
                </AccordionContainer>
            ))}
        </>
    );
};

export default Accordion;
