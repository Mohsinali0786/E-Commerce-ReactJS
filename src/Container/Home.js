import { Button, Grid, Container } from "@mui/material";
import ResponsiveAppBar from '../Components/navbar'
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import BookOnlineTwoToneIcon from '@mui/icons-material/BookOnlineTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Home() {


    const Navigate = useNavigate();

    return (


        <Container className='maincont'>
            <Grid>
                <Grid>
                    <ResponsiveAppBar />
                </Grid>

                <h1 className="onlinemall">Your E-Shopping Mall</h1>
                <Grid className='Home-Section'>
                    <Grid className='H-left-section'>
                        <h1 className="Homepage-heading">Every Purchase will be Made with pleasure</h1>
                        <h4>Buying or Selling goods or services using internet</h4>
                        <Button className='start-shopping-btn' variant="contained" color='secondary' onClick={() => { Navigate('/Women') }}>Start Shopping <KeyboardDoubleArrowRightTwoToneIcon /></Button>

                    </Grid>

                    <Grid>
                        <img className="homeimage" src='https://thumbs.dreamstime.com/b/internet-online-shopping-concept-19874908.jpg' />
                        {/* <img className="homeimage" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeR0JqcM3FOadpwR76LjsPX_d4DZrFYh4zHw&usqp=CAU' /> */}
                    </Grid>

                    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiHJ0l1Fyu-Z6wxMMYzEZUEcNCtJwusoSMw&usqp=CAU' /> */}

                </Grid>
                <Grid className="Home-Section2">

                    <h1 style={{ textAlign: 'center' }}>Million of People Use</h1>
                    <Grid className="Home-Section2a">
                        <Grid className='services'>
                            <LocalShippingTwoToneIcon className="home-logoimg" />

                            <h4>Free Shipping</h4>
                        </Grid>
                        <Grid className='services'>
                            <BookOnlineTwoToneIcon className="home-logoimg" />
                            <h4>24/7 Hours Support</h4>
                        </Grid>
                        <Grid className='services'>
                            <GridViewTwoToneIcon className="home-logoimg" />
                            <h4>100% Money Back</h4>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        </Container >


    )
}


export default Home;