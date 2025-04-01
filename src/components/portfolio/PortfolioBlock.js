import React, { useState } from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
//import { Tooltip } from "@mui/material";

function PortfolioBlock({ image, live, source, title, showSource, showLive, icons, description }) {
   const [showDescription, setShowDescription] = useState(false);

   // const handleMouseEnter = () => {
   //    setShowDescription(true);
   // };

   // const handleMouseLeave = () => {
   //    setShowDescription(false);
   // };

   const handleClick = () => {
      setShowDescription(!showDescription);
   };

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}> 
         <Box component={'img'} src={image} alt={'mockup'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>

         {/* Display Icons */}
         {icons && icons.length > 0 && (
            <Box display="flex" gap="0.5rem" mt={1}>
               {icons.map((icon, index) => (
                  <div
                     key={index}
                     // onMouseEnter={handleMouseEnter}
                     // onMouseLeave={handleMouseLeave}
                     onClick={handleClick}
                  >
                     <i
                        className={icon}
                        style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                     ></i>
                  </div>
               ))}
            </Box>
         )}

         {/* Display Description on Click/Hover */}
         {showDescription && description && (
            <Box mt={2} textAlign="center" fontSize="1.2rem" color="text.secondary">
               {description}
            </Box>
         )}

         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            
            {/* Conditionally show Live Demo button */}
            {showLive && live && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
               </Box>
            )}

            {/* Conditionally show Source Code button */}
            {showSource && source && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
               </Box>
            )}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
