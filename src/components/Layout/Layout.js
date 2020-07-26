import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
// import Footer from '../Footer/Footer';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />
            <Menu />
            {props.children}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
