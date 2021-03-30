import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
   return (
      <div className="breadcrumbs">
         {items.map(item => {
            return (
               <>
                  <Link to={item.path} key={item.id}>{item.name}</Link>
                  <span>&#62;</span>
               </>
            )
         })}
      </div>
   );
};

export default Breadcrumbs; 