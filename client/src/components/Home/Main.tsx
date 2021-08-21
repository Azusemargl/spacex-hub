import React from 'react';
import MainImage from '../../static/images/main.png';

const Main: React.FC = () => {
   return (
      <section>
         <main className="main">
            <div className="main-content main-info">
               <h1 className="main-title">SpaceX Hub</h1>
               <p className="main-description">Энциклопедия SpaceX</p>
               <a className="btn" href="https://spacex.com" target="_blank">Перейти на сайт</a>
            </div>
            <div className="main-content main-image">
               <img src={MainImage} alt="SpaceX"/>
            </div>
         </main>
      </section>
   );
};

export default Main;