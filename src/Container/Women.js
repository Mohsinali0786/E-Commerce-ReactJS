import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import Data from '../Components/data'
import Swal from 'sweetalert2';
import { useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletestate } from '../Components/mybag'

// console.log(deletestate())

// For Card

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import { Typography } from '@mui/material';


// for Model
import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
    // transform: (0.5)


};
// for model



function Women() {



    const [Quantity, SetQuantity] = useState(1);

    // for model

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () =>
        setOpenModal(true);
    const handleClose = () => {
        setOpenModal(false)
        console.log("Open===>", openModal)
    };
    const [MyModalData, setMyModalData] = useState({})

    const Navigate = useNavigate()


    // For MySelfCart

    const [additems, setAddItems] = useState([])
    const [id, setid] = useState(0)
    const [IsLogin, setislogin] = useState(false)
    const [displaycard, setdisplaycard] = useState(false)

    const AddItemsInCart = (items) => {




        console.log("items in function", items)
        // localStorage.setItem("selectedPeople", JSON.stringify(peopleInfoValue));
        setAddItems([...additems, { img: items.img, itemName: items.Name, quantity: 1, price: items.price, type: 'Women', id: id }])
        setid(id + 1)

    }

    const modalData = (index) => {
        handleOpen()
        setMyModalData({

            ItemName: Data.Women[index].Name,
            Price: Data.Women[index].price,
            img: Data.Women[index].img,
            Des: Data.Women[index].Name + "is available in 3 sizes sm md lg quantity of each item will be given but before placing order please confirm that you selected item will be in our stock or not"


        })
        console.log("MyModalData=========>", MyModalData)

    }
    console.log("Add items state", additems)


    useEffect(() => {

        // Making Problem on reload check it
        // {

        // console.log('UseEffect additems', additems)
        // localStorage.setItem('Women', JSON.stringify({ items: [] }))
        // }

        if (additems.length === 0) {


        }
        else {
            var loginornot = JSON.parse(localStorage.getItem('id'))
            console.log("LoginOrNot====>", loginornot)
            if (loginornot !== null) {

                if (loginornot?.IsLogin === false) {
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
            else {
                myalert1()
            }
        }


        const sp = localStorage.getItem("Women");
        console.log('Use Effect Sppppp=>', sp)
        if (!sp) {
            console.log('!!!!Spppppppp', !sp)
            setAddItems([]);
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




    return (
        <Container className='maincont'>
            <Grid>
                <ResponsiveAppBar />
            </Grid>

            <h1 className='pageheading'>Womens Collection</h1>
            <Grid className='cardstyling'>
                {
                    Data?.Women?.map((items, i) => {

                        console.log("diaplay card=====>", i)
                        return (
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


                                {/* <MediaCard img={items.img} itemName={items.Name} price={items.price} ViewDes={handleOpen} index={index}/> */}
                                <Button variant='contained' className='addtocart-btn' color='success' onClick={() => { AddItemsInCart(items) }}>Add To Cart</Button>
                            </div>
                        )
                    })}
                <Grid className="modal">
                    <Modal
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='mymodal'
                        sx={{ width: '70%', overflow: 'scroll', transform: 'scale(0.9)', marginTop: '20px' }}
                    >
                        <Box sx={style}>
                            <img src={MyModalData.img} className='modalimage' />
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
                </Grid>
            </Grid>


        </Container >
    );
}
export default Women;