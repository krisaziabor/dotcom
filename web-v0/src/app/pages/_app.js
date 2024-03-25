import localFont from 'next/font/local'

const editorialNew = localFont({
    src: [
        {
            path: '.fonts/editorial-new/woff2/PPEditorialNew-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '.fonts/editorial-new/woff2/PPEditorialNew-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '.fonts/editorial-new/woff2/PPEditorialNew-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '.fonts/editorial-new/woff2/PPEditorialNew-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
})

export default function App({ Component, pageProps }) {
    return (
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
    )
}