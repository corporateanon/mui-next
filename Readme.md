# mui-next

The simplest SSR helper for Next.js and MaterialUI.

## Installing

Run:

```
npm install mui-next
```

or:

```
yarn add mui-next
```

## Usage

Create `pages/_app.tsx` file:

```tsx
import { AppProps } from 'next/app';
import MuiNext from 'mui-next';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MuiNext>
            <Component {...pageProps} />
        </MuiNext>
    );
}

export default MyApp;
```
