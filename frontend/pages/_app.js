import App from 'next/app';
import CatWikiProvider from '../context/CatWikiContext';
import '../public/static/css/app.css';

const MyApp = props => {
  const {Component, pageProps} = props;

  return (
  <CatWikiProvider>
    <Component {...pageProps} />
  </CatWikiProvider>
  )
}

export default MyApp;
