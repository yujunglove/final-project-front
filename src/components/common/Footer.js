import FooterCSS from './Footer.module.css';

function Footer() {

    return (
        <div className={ FooterCSS.footerDiv }>
            <h3 style={ { width: '100%', textAlign: 'center'} }>
                Copyright 2023. Greedy All rights reserved.
            </h3>
        </div>
    );
}

export default Footer;