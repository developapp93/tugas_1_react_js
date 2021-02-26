import React, { Component } from "react";

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
                <Footer />
            </div>
        );
    }
}

export default App;