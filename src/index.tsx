import { renderToString } from 'react-dom/server';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Head from 'next/head';
import React, { FC } from 'react';

const isServer = () => process && !(process as any).browser;

const MUINext: FC = ({ children }) => {
    if (isServer()) {
        const sheets = new ServerStyleSheets();
        const output = sheets.collect(children);
        const html = renderToString(output);
        return (
            <>
                <Head>{sheets.getStyleElement()}</Head>
                <div
                    id="ssr-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </>
        );
    } else {
        return (
            <>
                <Head>
                    <style id="jss-server-side"></style>
                </Head>
                <div id="ssr-content">{children}</div>
            </>
        );
    }
};

export default MUINext;
