import React, { Component } from "react";
import MenuUtama from "./Page/MenuUtama";
import MenuProduct from "./Page/MenuProduct";
import MenuKontak from "./Page/MenuKontak";
import MenuTentangKami from "./Page/MenuTentangKami";

const Header = () => {
    return (
        <div>
            <h4>Ini Halaman Untuk Header</h4>
        </div>
    );
}

const Footer = () => {
    return (
        <div>
            <h4>Ini Halaman Untuk Footer</h4>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MenuUtama />
                <MenuProduct />
                <MenuKontak />
                <MenuTentangKami />
                <Footer />
            </div>
        );
    }
}

export default App;