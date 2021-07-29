import React, { FC } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import { LiveProvider, LiveEditor } from 'react-live';
import EDITOR_THEME from '../../editorTheme';
import Link from 'next/link';
import SquarePub from '../../components/site/Pub/SquarePub';
import { WarningSVG } from '../../components/site/SVG'

const confCode = `module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
`;

const StartedPage: FC = () => {
    return (
        <AppLayout
            title="Configuration to use Tail-Kit for tailwind components"
            desc="Over 200 freen and open source build components for tailwind css"
        >
            <h1 className="text-lg mb-4 italic text-gray-700">
                Tail-kit is a fully coded components KIT for Tailwind css 2.0. All components are free and open source
                and can be used in React, Angular or VueJS applications.
            </h1>
            <div className="pb-10 border-b border-gray-200 mb-10" id="installation">
                <div className="flex items-center">
                    <p className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Installation</p>
                </div>

                <p className="mt-1 text-lg text-gray-500">
                    Tail-Kit is based on{' '}
                    <a href="https://tailwindcss.com/" className="text-gray-700 underline hover:text-gray-800">
                        Tailwind CSS framework{' '}
                    </a>
                    .
                </p>
                <p className="mt-1 text-lg text-gray-500">
                    You need to install the library to take the full advantage of tail-kit.
                </p>
                <div className="mt-4">
                    <p className="mt-1 text-lg text-gray-500">
                        Link to install Tailwind CSS :{' '}
                        <a href="https://tailwindcss.com/docs" className="underline text-xl text-gray-700">
                            Documentation
                        </a>
                    </p>

                    <p className="pt-4 text-xl mb-6 text-gray-700 flex items-center">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="#10b981"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                        </svg>
                        Once Tailwind CSS is installed, you can get started!
                    </p>
                    <div className="md:flex md:items-center md:space-x-4">
                        <Link href="/components">
                            <a className="flex items-start justify-center space-x-2 mb-4 px-4 py-3 text-base font-medium rounded-md text-center text-white bg-gray-800 hover:bg-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                                <span>See Components</span>
                            </a>
                        </Link>
                        <Link href="/templates">
                            <a className="flex items-start justify-center space-x-2 mb-4 px-4 py-3 text-base font-medium rounded-md text-center text-white bg-gray-800 hover:bg-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>See Templates</span>
                            </a>
                        </Link>
                    </div>
                    <SquarePub />
                </div>
            </div>
            <div className="pb-10 border-b border-gray-200 mb-10 text-lg text-gray-500" id="configuration">
                <div className="flex items-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Configuration</h1>
                </div>

                <p className="mt-1 mb-4">
                    Some Tail-Kit components need to override basic Tailwind configuration to work.
                </p>
                <p className="block md:flex items-center">
                    All components that need configuration are indicated with this sign:
                    <Link href="/started#configuration">
                        <a className="ml-4 flex items-center text-black border border-gray-800 bg-yellow-200 hover:bg-yellow-300 rounded-lg px-2 py-0">
                            <WarningSVG />
                            <span className="pl-1">Need configuration</span>
                        </a>
                    </Link>
                </p>

                <div className="mt-4">
                    <p className="mt-1 text-lg text-gray-500">
                        For more information about Tailwind configuration:{' '}
                        <a
                            href="https://tailwindcss.com/docs/configuration"
                            className="underline text-xl text-gray-700"
                        >
                            Documentation
                        </a>
                    </p>

                    <p className="pt-4 text-xl text-gray-700 mb-4">
                        The necessary configuration for all Tail-Kit components (tailwind.config.js file) are available
                        below:
                    </p>
                    <LiveProvider theme={EDITOR_THEME} disabled={true} language="javascript" code={confCode}>
                        <LiveEditor className="rounded-lg" />
                    </LiveProvider>
                </div>
            </div>
        </AppLayout>
    );
};

export default StartedPage;
