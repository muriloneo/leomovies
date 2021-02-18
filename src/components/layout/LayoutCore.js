import './LayoutCore.css';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}