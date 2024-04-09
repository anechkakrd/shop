function Footer() {
    return (
       <footer className="page-footer #6a1b9a purple darken-3">
          <div className="footer-copyright">
             <div className="container">
                by Anna Namanchuk © {new Date().getFullYear()}
                <a className="grey-text text-lighten-4 right" href="#!">
                   Repository
                </a>
             </div>
          </div>
       </footer>
    );
 }
 export {Footer};