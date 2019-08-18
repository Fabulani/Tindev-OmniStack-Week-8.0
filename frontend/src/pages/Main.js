import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://storage.googleapis.com/kaggle-avatars/images/1336319-fb.jpg" alt="" />
                    <footer>
                        <strong>Dariana Darindas Drari</strong>
                        <p>Máquiadora estética do cabelo azul.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e blablabla.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e blablabla.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e blablabla.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}