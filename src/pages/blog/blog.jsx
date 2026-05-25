import Footer from "../../components/footer/footer"
import Nav_bar from "../../components/nav_bar/nav_bar"

import { useEffect } from 'react'
import { setMeta } from '../../utils/seo'

const Blog = () => {
    useEffect(()=>{
        setMeta({
            title: 'Blog - Henesis',
            description: 'Artículos y consejos sobre reformas, materiales y tendencias en construcción y diseño.'
        })
    }, [])

    return (

            <div className="Container">
            <Nav_bar />
                <h1 className="Home">Blog</h1>
            <Footer />
            </div>

    )
}

export default Blog