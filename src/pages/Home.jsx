import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (

        <div className="home-container">
            <div className="buttons-container">
                <button 
                    className="wine-button white-wine"
                    onClick={() => navigate('/whites')}
                >
                    Whites
                </button>
                
                <button 
                    className="wine-button red-wine"
                    onClick={() => navigate('/reds')}
                >
                    Reds
                </button>
            </div>

            <section className="section">
                <img 
                    src="/whitewine.webp" 
                    alt="White Wine Selection" 
                    className="section-image"
                />
                <div className="section-content">
                    <h2 className="section-title">Discover Our White Wines</h2>
                    <p className="section-text">
                        Immerse yourself in the crisp, refreshing world of our white wines. 
                        From vibrant Chardonnays to elegant Sauvignon Blancs, our carefully 
                        curated selection offers the perfect companion for any occasion.
                        Each bottle tells a unique story of its terroir and craftsmanship.
                    </p>
                </div>
            </section>

            <section className="section section-reverse">
                <img 
                    src="/realredwine.webp" 
                    alt="Red Wine Selection" 
                    className="section-image"
                />
                <div className="section-content">
                    <h2 className="section-title">Explore Our Red Wines</h2>
                    <p className="section-text">
                        Delve into the rich, complex flavors of our red wine collection. 
                        From bold Cabernet Sauvignons to smooth Merlots, each wine is 
                        selected for its exceptional quality and character. Experience 
                        the passion and tradition in every glass.
                    </p>
                </div>
            </section>
        </div>
    );
}
