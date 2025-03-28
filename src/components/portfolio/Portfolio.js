import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock 
                          image={project.image} 
                          live={project.live} 
                          source={project.source} 
                          title={project.title} 
                          showSource={project.showSource}
                          showLive={project.showLive}
                          icons={project.icons} // Pass the icons array
                          description={project.description} // Pass the description
                       />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
}