import * as gtag from '../../lib/gtag';

import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import { useCallback, useRef, useState } from 'react';

import EDITOR_THEME from '../../editorTheme';
import Link from 'next/link';
import ReactDOMServer from 'react-dom/server';
import Toggle from '../kit/components/form/toggle/Toggle';
import { formatHtml } from '../../utils/Utils';
import AdBanner from '../site/Pub/Banner';

interface Props {
    element: JSX.Element;
    component: any;
    title: string;
    jsLink?: string;
    needConfiguration?: boolean;
    showSwitchMode?: boolean;
    vertical?: boolean;
    containerClasses?: string;
    fullscreen?: boolean;
    withPub?: boolean;
}

enum STATUS {
    EDIT_CODE = 'edit',
    DEFAULT = 'default',
}

const ComponentLayout = (props: Props) => {
    const CP = props.component;
    const scope = { CP };

    /**
     * We must use useMemo here but there is an issue with renderToStaticMarkup
     * https://github.com/facebook/react/issues/16416
     */
    const code = useCallback(() => {
        return formatHtml(ReactDOMServer.renderToStaticMarkup(props.element));
    }, [props.element]);

    const [isDarkMode, setDarkMode] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const previewRef = useRef<HTMLDivElement>();

    const changeMode = (isDark) => {
        setDarkMode(isDark);
        if (isDark) {
            previewRef.current.classList.add('dark');
        } else {
            previewRef.current.classList.remove('dark');
        }
    };

    const copyCode = () => {
        const el = document.createElement('textarea');
        el.value = code();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setHasCopied(true);
        gtag.event({
            category: 'action',
            value: props.title,
            label: 'Copy code',
            action: 'Copy',
        });
    };

    const COPY_BTN = () => {
        return (
            <button
                onClick={copyCode}
                className={`w-28 px-4 py-2 flex items-center text-base font-medium rounded-md ${hasCopied
                    ? 'text-white bg-green-500 hover:bg-green-700'
                    : 'text-gray-800 bg-white hover:bg-gray-200'
                    }`}
            >
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
                </svg>
                {hasCopied ? 'Copied' : 'Copy'}
            </button>
        );
    };

    const [status, setStatus] = useState<STATUS>(STATUS.DEFAULT);
    return (
        <>
            <div
                className={`bg-gray-100 shadow rounded-xl mb-4 ${props.containerClasses ? props.containerClasses : ''}`}
                key={props.title}
            >
                <div className="flex flex-col md:flex-row items-center justify-between bg-white px-2 border rounded-xl">
                    <div className="flex justify-center space-x-2">
                        <p className="text-lg font-bolder text-gray-500 mb-2 md:mb-0">{props.title} </p>
                        {props.jsLink && (
                            <a
                                className="flex items-center text-black border border-gray-800 bg-yellow-200 hover:bg-yellow-300 rounded-lg px-2 py-0"
                                href={props.jsLink}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                                    />
                                </svg>
                                <span className="pl-1">Need JS</span>
                            </a>
                        )}
                        {props.needConfiguration && (
                            <Link href="/started#configuration">
                                <a className="flex items-center text-black border border-gray-800 bg-yellow-200 hover:bg-yellow-300 rounded-lg px-2 py-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                                        />
                                    </svg>
                                    <span className="pl-1">Need configuration</span>
                                </a>
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center flex-wrap space-x-2 justify-center">
                        {props.showSwitchMode && <Toggle label="Dark mode" onChange={(mode) => changeMode(mode)} />}

                        <button
                            onClick={() => setStatus(STATUS.EDIT_CODE)}
                            className="flex items-center px-2 py-0 border border-gray-800 text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                            <span className="pl-1">Code</span>
                        </button>

                        <button
                            onClick={copyCode}
                            className={`flex items-center px-2 py-0 text-base font-medium rounded-md ${hasCopied
                                ? 'text-white bg-green-500 hover:bg-green-700 border border-green-500 hover:border-green-700'
                                : 'text-gray-800 bg-white hover:bg-gray-200 border border-gray-800 hover:border-gray-200'
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                />
                            </svg>
                            <span className="pl-1">{hasCopied ? 'Copied' : 'Copy'}</span>
                        </button>
                    </div>
                </div>

                <LiveProvider
                    scope={scope}
                    theme={EDITOR_THEME}
                    disabled={status !== STATUS.EDIT_CODE}
                    language="markup"
                    code={code()}
                >
                    <div
                        className={`${props.vertical ? 'flex-col justify-center' : 'flex-col md:flex-row justify-between '
                            } flex gap-4 items-start ${props.fullscreen ? '' : 'mx-4 py-12'}`}
                    >
                        <div ref={previewRef} className={`${props.vertical ? 'w-full ' : ''}mx-auto`}>
                            <LivePreview />
                        </div>

                        {status !== STATUS.DEFAULT && (
                            <div className={`${props.vertical ? '' : 'md:w-3/4'} relative w-full`}>
                                <div>
                                    <div className="absolute top-2 right-24 z-10">{COPY_BTN()}</div>

                                    <button
                                        onClick={() => setStatus(STATUS.DEFAULT)}
                                        className="w-12 p-2 absolute top-2 right-2 z-30 text-base font-medium rounded-md bg-red-300 hover:bg-red-400 "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="6"
                                            height="6"
                                            className="h-6 w-6 mx-auto text-gray-800 "
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                        >
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                        </svg>
                                    </button>
                                    <LiveEditor className="rounded-lg" />
                                </div>
                            </div>
                        )}
                    </div>
                </LiveProvider>
            </div>
            {props.withPub && (
                <div
                    className={`bg-gray-100 shadow rounded-xl mb-4 ${props.containerClasses ? props.containerClasses : ''
                        }`}
                    key={props.title}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 border rounded-xl">
                        <p className="text-xl font-light text-gray-600 mb-2 md:mb-0">Publicity </p>
                        <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script>
                    </div>
                    <div className="p-4">
                        <AdBanner />
                    </div>
                </div>
            )}
        </>
    );
};

export default ComponentLayout;
