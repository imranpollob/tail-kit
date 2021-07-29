import * as gtag from '../../lib/gtag';

import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import { useCallback, useRef, useState } from 'react';

import EDITOR_THEME from '../../editorTheme';
import Link from 'next/link';
import ReactDOMServer from 'react-dom/server';
import Toggle from '../kit/components/form/toggle/Toggle';
import { formatHtml } from '../../utils/Utils';
import AdBanner from '../site/Pub/Banner';
import { CopySVG, WarningSVG, CodeSVG } from '../site/SVG';

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

    const [editStatus, setEditStatus] = useState(false);
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

        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    };

    const toggleStatus = () => {
        setEditStatus(!editStatus);
    };

    return (
        <>
            <div
                className={`bg-gray-100 shadow rounded-xl mb-4 ${props.containerClasses ? props.containerClasses : ''}`}
                key={props.title}
            >
                <div className="flex items-center justify-between bg-white p-1 border-2 border-gray-100">
                    <div className="flex items-center justify-center space-x-2">
                        <p className="text-lg font-bolder text-gray-500">{props.title} </p>
                        {props.jsLink && (
                            <a
                                className="flex items-center text-black border border-gray-800 bg-yellow-200 hover:bg-yellow-300 rounded-lg px-2 py-0"
                                href={props.jsLink}
                            >
                                <WarningSVG />
                                <span className="pl-1">Need JS</span>
                            </a>
                        )}
                        {props.needConfiguration && (
                            <Link href="/started#configuration">
                                <a className="flex items-center text-black border border-gray-800 bg-yellow-200 hover:bg-yellow-300 rounded-lg px-2 py-0">
                                    <WarningSVG />
                                    <span className="pl-1">Need configuration</span>
                                </a>
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center flex-wrap space-x-2 justify-center">
                        {props.showSwitchMode && <Toggle onChange={(mode) => changeMode(mode)} />}

                        <button
                            onClick={() => toggleStatus()}
                            className="flex items-center px-2 py-0 border text-blue-500 hover:text-white border-blue-500 text-base font-medium rounded-md bg-white hover:bg-blue-500 outline-none"
                        >
                            <CodeSVG />
                            <span className="pl-1">{editStatus ? 'Preview' : 'Code'}</span>
                        </button>

                        <button
                            onClick={copyCode}
                            className={`flex items-center px-2 py-0 text-base font-medium rounded-md ${hasCopied
                                    ? 'text-white bg-green-700 border border-green-700'
                                    : 'text-green-500 hover:text-white bg-white hover:bg-green-500 border border-green-500 hover:border-green-500'
                                }`}
                        >
                            <CopySVG />
                            <span className="pl-1">{hasCopied ? 'Copied' : 'Copy'}</span>
                        </button>
                    </div>
                </div>

                <LiveProvider scope={scope} theme={EDITOR_THEME} disabled={!editStatus} language="markup" code={code()}>
                    <div
                        className={`${props.vertical ? 'flex-col justify-center' : 'flex-col md:flex-row justify-between '
                            } flex gap-4 items-start ${props.fullscreen ? '' : 'mx-4 py-12'}`}
                    >
                        <div ref={previewRef} className={`${props.vertical ? 'w-full ' : ''}mx-auto`}>
                            <LivePreview />
                        </div>

                        {editStatus && (
                            <div className={`${props.vertical ? '' : 'md:w-3/4'} relative w-full`}>
                                <LiveEditor className="rounded-lg" />
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
