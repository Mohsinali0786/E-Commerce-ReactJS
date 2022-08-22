import { useCart } from "react-use-cart";
import { Button } from "@mui/material";
import { Divider } from "antd";
import Swal from "sweetalert2";

function Mybag() {



    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal,
    } = useCart();

    const deleteitemfromcart = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id)
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your Item has been Removed from cart Sucessfuly.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    // 'Your imaginary file is safe :)',
                    // 'error'
                )
            }
        })
    }
    const deleteall = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "On Clicking Yes All Cart Item will be removed!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCart()
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your All Items has been Removed from cart Sucessfuly.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    // 'Your imaginary file is safe :)',
                    // 'error'
                )
            }
        })

    }
    if (isEmpty) return <p className="emptycart-text">Your cart is empty</p>;

    return (

        <div className="Bag-maindiv">
            <h1 >Mybag</h1>
            <div className="Bag-sub-div">
                <h3>Total-Items:{totalItems}</h3>
                <h3>Cart ({totalUniqueItems})</h3>
            </div>
            <Divider className="divcol" />

            <div >
                <ul >
                    {items.map((item) => (
                        <li key={item.id} className='lists'>
                            <div className='lists2' >
                                <div>
                                    <img src={item.img} style={{ width: '50%', height: '80%' }} />
                                </div>
                                <div>
                                    <h4><b>ItemName</b><br />{item.Name}</h4>
                                    <h4><b>Price:$</b>{item.price}</h4>
                                    <h4><b>Quantity:</b>{item.quantity}</h4>

                                </div>

                            </div>


                            <div className="update-quantity" >
                                <div className="D-quan-btn">
                                    <Button className="quan-btn" variant="contained" color='success'
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </Button>
                                    <Button className="quan-btn" variant="contained" color='success'
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </Button>
                                </div>
                                <div>
                                    <Button color="error" className='del-btn' variant="contained" onClick={() => deleteitemfromcart(item.id)}>Delete</Button>
                                </div>

                            </div>
                            <Divider className="divcol" />
                        </li>

                    ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
                    <h2 style={{ marginLeft: '8%' }}><b>Total:</b>${cartTotal}</h2>
                    <Button variant='contained' color='error' onClick={() => deleteall()}>Delete All</Button>
                </div>

            </div>



        </div>
    )

}

export default Mybag;