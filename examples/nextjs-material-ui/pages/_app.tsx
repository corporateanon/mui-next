import { AppProps } from 'next/app';
import MuiNext from '../components/MuiNext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MuiNext>
            <Component {...pageProps} />
        </MuiNext>
    );
}

export default MyApp;
