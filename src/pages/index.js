import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: '1', description: '1'},
    { id: '2', src: full02, thumbnail: thumb02, caption: '2', description: '2'},
    { id: '3', src: full03, thumbnail: thumb03, caption: '3', description: '3'},
    { id: '4', src: full04, thumbnail: thumb04, caption: '4', description: '4'},
    { id: '5', src: full05, thumbnail: thumb05, caption: '5', description: '5'},
    { id: '6', src: full06, thumbnail: thumb06, caption: '6', description: '6'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Ciro Gallo - Pittore "
        const siteDescription = "Il sito web personale di Ciro Gallo"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Biografia</h2>
                        </header>
                        <p>Nato a Trieste nel 1938.</p>
                        <p>
                            Autodidatta. Si è formato nell'ambiente teatrale dove è stato per lunghi anni in contatto con vari scenografi (S. D'Osmo, L. Damiani, E. Luzzati, J. Svoboda)
                            e registi (O. Costa, F. Crivelli, F. Enriquez, G. Menotti, G. Pressburger, V. Puecher, A. Trionfo, F. Tolusso) operanti nel teatro di prosa e lirico a Trieste. 
                        </p><p>
                            Dal mondo teatrale assorbiva il senso della creatività ma anche la disciplina costruttivista alimentando la sua naturale vocazione pittorica. 
                            Le sue prove iniziali appaiono in mostre collettive regionali nel 1982 mentre nell'anno successivo è la prima personale. 
                            Da allora ha allestito alcune personali a Trieste ed è stato presente in varie collettive in Italia, a New York, a Kranj in Slovenia, Graz in Austria.
                        </p>
                    </section>

                    <section id="two">
                        <h3 className='no-margin'>Secondo Maria Campitelli</h3>
                        <sub>
                            Ciro Gallo, Trieste, 1995; C.H. Martelli<br/>
                            Dizionario degli artisti di Trieste, dell'Isontino, dell'Istria e della Dalmazia, Hammerle Editori, Trieste 1996.
                        </sub>
                        <p></p>
                        <p>
                            Artista capace di "ridurre l'empito dei sentimenti e la volontà cognitiva attraverso rarefatti elementi visivi"
                            in una consumata manipolazione di elementi concreti al fine di inventare un linguaggio consono alla narrazione dell'indagine fantastica. 
                        </p>
                        <p>
                            Un'equilibrata concezione dello spazio, l'uso del colore in funzione catalizzante, l'innesto materico attraverso il collage, la trasposizione di testi, 
                            sono caratterizzanti dell'equilibrio raggiunto da questo artista dotato di originalità ed autonomia espressiva sempre alla ricerca di nuovi elementi di comunicazione.
                        </p>
                    </section>

                    <section id="three">
                        <h2>Alcuni dei miei lavori</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="four">
                        <h2>Contatti</h2>
                        <p></p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Nome" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Messaggio" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Trieste<br />
                                        Italia                                    
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Telefono</span></h3>
                                        +39 338 422 9001
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">ciro.gallo.ts@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex