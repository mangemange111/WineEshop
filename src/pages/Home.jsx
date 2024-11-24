import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
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
    );
}
