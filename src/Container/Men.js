import MediaCard from '../Components/card';
import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



import Data from '../Components/data'

function Men() {
    const Navigate = useNavigate()
    const [additems, setAddItems] = useState([])
    const [id, setid] = useState(0)

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
                localStorage.setItem('Men', JSON.stringify({ items: [...additems] }))
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
                    Data.Men.map((items, index) => {
                        return (
                            <Grid key={index} className='productcard' >
                                <MediaCard img={items.img} itemName={items.Name} price={items.price} />
                                <Button variant='contained' className='addtocart-btn' color='success' onClick={() => AddItemsInCart(items)}>Add To Cart</Button>

                            </Grid>
                        )
                    })

                }
            </Grid>
        </Container >
    )

}
export default Men;