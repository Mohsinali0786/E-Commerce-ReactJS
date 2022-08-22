import MediaCard from '../Components/card';
import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import Data from '../Components/data'
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';



// for Model
import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
// for model




function Women() {


    // for model

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const Navigate = useNavigate()


    // For MySelfCart

    const [additems, setAddItems] = useState([])
    const [id, setid] = useState(0)
    const [IsLogin, setislogin] = useState(false)
    const [displaycard, setdisplaycard] = useState(false)

    const AddItemsInCart = (items) => {

        console.log("items in function", items)
        setAddItems([...additems, { img: items.img, itemName: items.Name, price: items.price, type: 'Women' }])
        setid(id + 1)

    }
    console.log("Add items state", additems)

    useEffect(() => {

        if (additems.length === 0) {

        }
        else {
            var loginornot = JSON.parse(localStorage.getItem('id'))
            if (loginornot.IsLogin === false) {
                myalert1()
            }
            else {
                Swal.fire(
                    'Succeed!',
                    'You Item has been added to cart sucessfuly!',
                    'success'
                )

                localStorage.setItem('Women', JSON.stringify({ items: [...additems] }))
            }
        }

    }, [additems])

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

    // console.log("outside===>", additems)
    // const AddItemsInCart = (item) => {
    //     if (localStorage.getItem("id") === null) {
    //         myalert1()
    //         // Navigate('/form')
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

            <h1 className='pageheading'>Womens Collection</h1>
            <Grid className='cardstyling'>
                {
                    Data?.Women?.map((items, index) => {

                        // console.log("diaplay card", displaycard)
                        return (
                            <Grid key={index} className='productcard' onClick={handleOpen}>


                                <MediaCard img={items.img} itemName={items.Name} price={items.price} />
                                <Button variant='contained' className='addtocart-btn' color='success' onClick={() => { AddItemsInCart(items) }}>Add To Cart</Button>




                                {/* for model */}

                                <div>

                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <img id="modal-modal-title" src={items.img} variant="h6" component="h2" />


                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                <h2>Product:{items.Name}</h2>
                                                <h5>Price:{items.price}</h5>
                                                <h3>Description:</h3>
                                                <h5>{items.Name} is available in 3 sizes sm md lg quantity of each item will be given but before placing order please confirm that you selected item will be in our stock or not</h5>
                                            </Typography>
                                            <Button variant='contained' onClick={handleClose}>Close</Button>
                                        </Box>
                                    </Modal>
                                </div>

                            </Grid>

                        )
                    })
                }
            </Grid>

        </Container >
    )

}
export default Women;