// import React from 'react';
// import './Photos1.scss';
// import Pic1 from '../../assets/Pic1.png';  // Correct path to assets folder
// import Pic2 from '../../assets/Pic2.png';
// import Pic3 from '../../assets/Pic3.png';

// const Photo1 = () => {
//   return (
//     <div className="photo-gallery">
//       <img src={Pic1} alt="Person 1" />
//       <img src={Pic2} alt="Person 2" />
//       <img src={Pic3} alt="Person 3" />
//     </div>
//   );
// }

// export default Photo1;


import React from 'react';
import './Photos1.scss';
import Pic1 from '../../assets/Pic1.png';  // Update these paths as needed
import Pic2 from '../../assets/Pic2.png';
import Pic3 from '../../assets/Pic3.png';

const Photo1 = () => {
  return (
    <div className="photo-gallery1">
      <img src={Pic1} alt="Person 1" className="gallery-img" />
      <img src={Pic2} alt="Person 2" className="gallery-img" />
      <img src={Pic3} alt="Person 3" className="gallery-img" />
    </div>
  );
}

export default Photo1;

