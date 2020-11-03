import App from 'next/app';
import CatWikiProvider from '../context/CatWikiContext';


const MyApp = props => {
  const {Component, pageProps} = props;

  return (
  <CatWikiProvider>
    <Component {...pageProps} />
  </CatWikiProvider>
  )
}

export default MyApp;
