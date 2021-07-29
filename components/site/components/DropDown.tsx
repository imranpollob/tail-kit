import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ComponentsSVG, DropdownSVG } from '../SVG';

interface Props {
    links: HeaderLink[];
    label: string;
}
interface HeaderLink {
    label: string;
    link?: string;
    isSelected?: boolean;
    items: {
        name: string;
        link: string;
    }[];
    icon?: JSX.Element;
}

const DropDown = (props: Props) => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);
    const listElement = useRef<HTMLDivElement>();
    const selectButton = useRef<HTMLButtonElement>();
    const handleClickOutside = useCallback((event) => {
        const myHTMLWrapper = listElement.current;
        const btnElement = selectButton.current;
        if (
            myHTMLWrapper &&
            btnElement &&
            !myHTMLWrapper.contains(event.target) &&
            !btnElement.contains(event.target)
        ) {
            setIsSectionOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className="relative">
            <button
                ref={selectButton}
                type="button"
                onClick={() => setIsSectionOpen(!isSectionOpen)}
                className="group p-2 text-gray-800 dark:text-white inline-flex items-center text-lg font-light hover:text-black dark:hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-white space-x-1"
            >
                <ComponentsSVG />
                <span>{props.label}</span>
                <DropdownSVG isSectionOpen={isSectionOpen} />
            </button>
            {isSectionOpen && (
                <div ref={listElement} className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="bg-white px-5 py-2 divide-y divide-gray-300">
                            {props.links.map((entry) => {
                                return (
                                    <div className="py-3" key={entry.label}>
                                        <Link href={entry.link}>
                                            <a className="flex items-center font-semibold text-lg hover:text-indigo-600  text-gray-700">
                                                {entry.label}
                                            </a>
                                        </Link>
                                        <ul className="mt-1 flex gap-x-3 flex-wrap">
                                            {entry.items.map((item) => {
                                                return (
                                                    <li key={item.name}>
                                                        <Link href={item.link}>
                                                            <a className="text-gray-500 hover:text-indigo-600">
                                                                {item.name}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default DropDown;
