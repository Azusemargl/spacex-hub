import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCores } from '../../redux/actions/cores';

const Cores = () => {
   const dispatch = useDispatch();

   const cores = useSelector(({ coresReducer }) => coresReducer.cores);

   React.useEffect(() => {
      dispatch(fetchCores());
   }, []);

   return (
     <div className="cores">
        {
           cores.map((core, index) => {
              return (
               <div className="core" key={`${index}-${core.core_serial}`}>
                  <h5 className="core-name">{core.core_serial}</h5>
                  <p><span>Статус: </span>{core.status}</p>
                  <p><span>Всего использований: </span>{core.rtls_attempts}</p>
                  <p><span>Повторных использований: </span>{core.reuse_count}</p>
                  <p><span>Описание: </span>{core.details}</p>
               </div>
              );
           })
        }
     </div>
   );
 };

 export default Cores;