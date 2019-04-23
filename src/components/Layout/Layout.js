import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      
      <Fragment>
        <header className="header">
          <SectionTitle className="header__title">Header</SectionTitle>
          <div className="header__content">тест</div>
        </header>
        <main className="main main--with-header main--with-footer">
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        <footer className="footer">
          <SectionTitle className="footer__title">Footer</SectionTitle>
        </footer>
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return 'empty';
  }

  renderFooter(FooterChild) {
    return 'empty';
  }
}

export default Layout;
