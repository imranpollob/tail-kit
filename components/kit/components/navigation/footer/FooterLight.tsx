import React from 'react';
import Link from 'next/link';

interface Props {
    links: FooterLink[];
    showSubLinks?: boolean;
}
interface FooterLink {
    label: string;
    link?: string;
}

const FooterLight = (props: Props) => {
    return (
        <footer className="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
            <div className="flex flex-col">
                <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                    <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                        {props.links.map((link) => {
                            return (
                                <a
                                    key={link.label}
                                    aria-current="page"
                                    href={link.link || '#'}
                                    className="hover:text-gray-700 dark:hover:text-white"
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>
                    <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
                    <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                        <Link href="/started">
                            <a className="hover:text-primary-gray-20" href="#">
                                <span className="sr-only">Settings</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </a>
                        </Link>
                        <a className="ml-2 hover:text-primary-gray-20" href="https://github.com/pollmix/tail-kit">
                            <span className="sr-only">View on GitHub</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-7 h-7"
                                viewBox="0 0 1792 1792"
                            >
                                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                            </svg>
                        </a>
                    </div>
                    <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full "></div>
                    <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                        <span className="">© 2021</span>
                        <span className="mt-1">
                            Created by{' '}
                            <a className="underline hover:text-primary-gray-20" href="https://imranpollob.com/">
                                Imran Pollob
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default FooterLight;
