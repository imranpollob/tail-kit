import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

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

const DropD = (props: Props) => {
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                </svg>

                <span>{props.label}</span>

                <svg
                    className={`h-5 w-5 text-gray-500 dark:text-gray-100 hover:text-gray-500 dark:hover:text-white transition duration-500 ${isSectionOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
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
export default DropD;
