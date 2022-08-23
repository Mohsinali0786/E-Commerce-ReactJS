import MediaCard from '../Components/card';
import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button, Typography, Box } from '@mui/material';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Data from '../Components/data'


// For Card

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


// for Model
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    width: '100%',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
// for model


function Men() {
    const Navigate = useNavigate()
    const [additems, setAddItems] = useState([])
    const [id, setid] = useState(0)


    // for model

    const [openModal, setOpenModal] = useState(false);
    const [MyModalData, setMyModalData] = useState({})

    const handleOpen = () =>
        setOpenModal(true);
    const handleClose = () => {
        setOpenModal(false)
        console.log("Open===>", openModal)
    };

    console.log("state change", openModal)

    const modalData = (index) => {
        handleOpen()
        setMyModalData({

            ItemName: Data.Men[index].Name,
            Price: Data.Men[index].price,
            img: Data.Men[index].img,
            Des: Data.Men[index].Name + " is available in 3 sizes sm md lg quantity of each item will be given but before placing order please confirm that you selected item will be in our stock or not"


        })
        console.log("MyModalData=========>", MyModalData)

    }

    useEffect(() => {

        if (additems.length === 0) {

        }
        else {
            var loginornot = JSON.parse(localStorage.getItem('id'))
            if (loginornot !== null) {
                if (loginornot.IsLogin === false) {
                    myalert1()
                }
                else {
                    Swal.fire(
                        'Succeed!',
                        'You Item has been added to cart sucessfuly!',
                        'success'
                    )
                    localStorage.setItem('Men', JSON.stringify({ items: [...additems] }))
                }
            }
            else {
                myalert1()
            }
        }

    }, [additems])
    const AddItemsInCart = (items) => {

        console.log("Add items in cart", additems)
        var myobject = {
            img: items.img,
            itemName: items.Name,
            price: items.price,
            type: 'Men',
        }
        setAddItems([...additems, myobject])

        // additemsincart([...additems, getdatafromLS?.items, myobject])
        setid(id + 1)
        // console.log('getdatafromLS', getdatafromLS)
        // console.log("all_data", (all_data))
    }
    console.log("additems", additems)
    const myalert1 = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Please Login First?',
            text: "You won't be able to add your product now!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Login!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                Navigate('/form')
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    '',
                    'error'
                )
            }
        })
    }
    // var data = JSON.parse(localStorage.getItem('id'))
    // const AddItemsInCart = (item) => {
    //     if (localStorage.getItem("id") === null) {
    //         myalert1()
    //     }
    //     else {
    //         var data = JSON.parse(localStorage.getItem('id'))
    //         if (data.IsLogin) {
    //             addItem(item)
    //             Swal.fire(
    //                 'Succeed!',
    //                 'You Item has been added to cart sucessfuly!',
    //                 'success'
    //             )

    //         }
    //         else {
    //             Swal.fire(
    //                 'Please LogIn!',
    //                 'To Add Item in Cart you should Login first!',
    //                 'warning'
    //             )
    //             Navigate('/form')
    //         }
    //     }
    // }

    return (
        <Container className='maincont'>
            <Grid>
                <ResponsiveAppBar />
            </Grid>

            <h1 className='pageheading'>Men Collection</h1>
            <Grid className='cardstyling'>

                {
                    Data.Men.map((items, i) => {
                        return (
                            // <Grid key={index} className='productcard' >
                            <div key={i} className='productcard' >


                                <Card className='Card-main-cont' >

                                    <img src={items.img} className='p-img' />
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="div">

                                            <h5><b>Product</b><br /><i>{items.Name}</i></h5>

                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Price:${items.price}
                                        </Typography>
                                    </CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Button onClick={() => { modalData(i) }}>View Description</Button>
                                    </Typography>
                                    <CardActions>
                                    </CardActions>
                                </Card >
                                <Button variant='contained' className='addtocart-btn' color='success' onClick={() => { AddItemsInCart(items) }}>Add To Cart</Button>
                            </div>

                        )
                    })

                }
                <div>
                    <Modal
                        // index={index}
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='mymodal'
                        sx={{ width: '70%', overflow: 'scroll', transform: 'scale(0.9)', marginTop: '20px' }}
                    >
                        <Box sx={style}>
                            <img className='modalimage' src={MyModalData.img} style={{ width: '100%', height: '300px' }} />
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Name:{MyModalData.ItemName}
                            </Typography>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Price:${MyModalData.Price}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <h3>Description</h3>
                                <p>{MyModalData.Des}</p>
                            </Typography>
                            <Button onClick={() => handleClose()}>Close</Button>
                        </Box>
                    </Modal>
                </div>

            </Grid>
        </Container >
    )

}
export default Men;