import '@/styles/globals.css'
import Navbar from './Comp/Navbar'
import Footer from './Comp/Footer'


export default function App({ Component, pageProps }) {
  return (<><Navbar/><Component {...pageProps} /><Footer/></>)
}
