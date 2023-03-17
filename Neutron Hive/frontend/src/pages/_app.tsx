import 'rc-collapse/assets/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'react-multi-carousel/lib/styles.css';
import 'assets/styles/scrollbar.css';
import 'assets/styles/rc-collapse.css';
import 'assets/styles/index.css';
import { CartProvider } from 'contexts/cart/cart.provider';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import { SearchProvider } from 'contexts/search/use-search';
import 'typeface-open-sans';
import './login.css'

export default function CustomApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <DrawerProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </DrawerProvider>
    </SearchProvider>
  );
}
