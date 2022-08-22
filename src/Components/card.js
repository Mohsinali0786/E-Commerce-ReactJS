import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

function MediaCard(props) {
    return (
        <Card className='Card-main-cont' sx={{}}>

            <img src={props.img} className='p-img' />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">

                    <h5><b>Product</b><br /><i>{props.itemName}</i></h5>

                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Price:{props.price}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card >
    );
}
export default MediaCard;