import React from 'react'
import Hero from '../../components/partials/publicPartials/Hero'
import Gallery from '../../components/partials/publicPartials/Gallery'
import Contactus from '../../components/partials/publicPartials/Contactus'
import Aboutus from '../../components/partials/publicPartials/About'
import  Footer  from '../../components/partials/publicPartials/Footer'

const Public = () => {
    const content = (
        <section>
            <Hero />
            <Aboutus />
            <Contactus />
            <Gallery />
            <Footer />
        </section>

    )

    return content
}

export default Public