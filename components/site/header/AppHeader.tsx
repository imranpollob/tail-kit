import React, { useState } from 'react';
import Link from 'next/link';
import { menuEntry, menuTemplates } from '../../layout/AppLayout';
import DropDown from '../components/DropDown';
import { HamburgerOpenSVG, HamburgerCloseSVG, SettingsSVG, GithubSVG } from '../SVG';

interface Props {
    hideLinks?: boolean;
}

const AppHeader = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative bg-transparent dark:bg-gray-800 z-50 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-gray-100 py-3 md:space-x-10">
                    <div className="flex justify-start items-center gap-12">
                        <Link href="/">
                            <a className="flex items-center">
                                <img className="h-8 w-auto" src="/icons/rocket.svg" alt="site" />
                            </a>
                        </Link>
                        <nav className="hidden md:flex space-x-10">
                            <DropDown label="Components" links={menuEntry} />
                            <DropDown label="Templates" links={menuTemplates} />
                        </nav>
                    </div>
                    {!props.hideLinks && (
                        <div className="flex item-center justify-end">
                            <Link href="/started">
                                <a className="flex items-center">
                                    <SettingsSVG />
                                </a>
                            </Link>

                            <a href="https://github.com/pollmix/tail-kit" target="_blank" rel="noreferrer" className="">
                                <GithubSVG />
                            </a>
                        </div>
                    )}

                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-50 dark:hover:text-white hover:text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open menu</span>
                            <HamburgerOpenSVG />
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute top-0 z-20 inset-x-0 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:bg-gray-800">
                        <div className="pt-2 pb-6 px-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="/icons/rocket.svg" alt="Workflow" />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-50 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <HamburgerCloseSVG />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <nav>
                                    <p className="text-indigo-500 font-bold">Components</p>
                                    {menuEntry.map((entry) => {
                                        return (
                                            <Link href={entry.link} key={entry.label}>
                                                <a className="px-2 py-1 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <span className="ml-1 text-base font-normal text-gray-900 dark:text-white">
                                                        {entry.label}
                                                    </span>
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                            <div className="mt-2">
                                <nav>
                                    <p className="text-indigo-500 font-bold">Templates</p>
                                    {menuTemplates.map((entry) => {
                                        return (
                                            <Link href={entry.link} key={entry.label}>
                                                <a className="px-2 py-1 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <span className="ml-1 text-base font-normal text-gray-900 dark:text-white">
                                                        {entry.label}
                                                    </span>
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default AppHeader;
