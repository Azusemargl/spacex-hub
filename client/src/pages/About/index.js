import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAbout } from '../../redux/actions/about';
import Title from '../../components/common/Title';
import Logo from '../../static/images/logo.png';

const About = () => {
   const dispatch = useDispatch();

   const about = useSelector(({ aboutReducer }) => aboutReducer.about);

   React.useEffect(() => {
      dispatch(fetchAbout());
   }, []);

   return (
      <div className="about">
        <Title>О компании</Title>
        <div className="about-container">
            <div className="about-content">
               <div className="about-item">
                  <p className="about-name">Компания:</p>
                  <p className="about-value">{about.name}</p>
               </div>
               <div className="about-item">
                  <p className="about-name">Основатель:</p>
                  <p className="about-value">{about.founder}</p>
               </div>
               <div className="about-item">
                  <p className="about-name">Год основаня:</p>
                  <p className="about-value">{about.founded}</p>
               </div>
               <div className="about-item">
                  <p className="about-name">Количество рабочих:</p>
                  <p className="about-value">{about.employees}</p>
               </div>
               <div className="about-item">
                  <p className="about-name">Рыночная стоимость:</p>
                  <p className="about-value">{about.valuation}$</p>
               </div>
               <div className="about-item">
                  <p className="about-name">Адрес:</p> 
                  {about.headquarters &&
                     <p className="about-value">
                        {about.headquarters.address},
                        {about.headquarters.city},
                        {about.headquarters.state}
                     </p>
                  }
               </div>
            </div>
            <div className="about-image">
               <img src={Logo} alt={about.name}/>
            </div>
        </div>
      </div>
   );
};

export default About;
