import { useCart } from "react-use-cart";
import { Button } from "@mui/material";
import { Divider } from "antd";
import { useState, useEffect } from "react";
import Navbar from './navbar'
// import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import Swal from "sweetalert2";

function WebMybag() {

    const [Quantity, SetQuantity] = useState(0);
    const [deleteclicked, setdeleteclicked] = useState(false)
    let WomenCollectionLen = JSON.parse(localStorage.getItem('Women'));
    let MenCollectionLen = JSON.parse(localStorage.getItem('Men'));
    let KidsCollectionLen = JSON.parse(localStorage.getItem('Kids'));
    const [TotalItems, setTotalItems] = useState(0)

    let WomenItems = 0;
    let MenItems = 0;
    let KidsItems = 0

    useEffect(() => {
        console.log("Use Effect 1")
        if (localStorage.getItem("Women") === null && localStorage.getItem("Men") === null && localStorage.getItem("Kids") === null) {
            console.log("Use Effect 2")
        }
        else {

            if (WomenCollectionLen?.items) {
                WomenItems = WomenCollectionLen.items.length
                console.log("Total Women Item======>", WomenItems)
            }

            if (MenCollectionLen?.items) {
                MenItems = MenCollectionLen.items.length
            }
            if (KidsCollectionLen?.items) {
                KidsItems = KidsCollectionLen.items.length
            }
            setTotalItems(WomenItems + MenItems + KidsItems)
            console.log("Use Effect 3")
            setdeleteclicked(false)

        }
    }, [deleteclicked === true])
    const deleteitemfromcart = (type, index) => {
        console.log("Type====>", type)
        deletealert()
        setdeleteclicked(true)
        if (JSON.parse(localStorage.getItem(type)).items.length !== null) {
            console.log("Condition-1")
            if (JSON.parse(localStorage.getItem(type)).items[index].type === 'Women') {
                console.log("Condition-2")
                let Women = JSON.parse(localStorage.getItem('Women')).items
                console.log("Deleted Women====>", Women)
                for (var i = 0; i < Women.length; i++) {
                    console.log("i===>", i, index)
                    if (index === i) {
                        Women.splice(index, 1)

                        localStorage.setItem('Women', JSON.stringify({ items: [...Women] }))
                    }
                }
            }
            else if (JSON.parse(localStorage.getItem(type)).items[index].type === 'Men') {
                let Men = JSON.parse(localStorage.getItem('Men')).items
                console.log("Deleted Men====>", Men)
                for (var i = 0; i < Men.length; i++) {
                    console.log("i===>", i, index)
                    if (index === i) {
                        Men.splice(index, 1)
                        console.log("Deleted Men====>", Men)
                        // setallbagitems(allbagitems)
                        localStorage.setItem('Men', JSON.stringify({ items: [...Men] }))
                    }
                }

            }
            else if (JSON.parse(localStorage.getItem(type)).items[index].type === 'Kids') {
                let Kids = JSON.parse(localStorage.getItem('Kids')).items
                console.log("Deleted Kids====>", Kids)
                for (var i = 0; i < Kids.length; i++) {
                    console.log("i===>", i, index)
                    if (index === i) {
                        Kids.splice(index, 1)
                        console.log("Deleted Kids====>", Kids)
                        // setallbagitems(allbagitems)
                        localStorage.setItem('Kids', JSON.stringify({ items: [...Kids] }))
                    }
                }

            }
        }




    }
    console.log("Lengthhhhhhhhhhh", WomenCollectionLen, MenCollectionLen, KidsCollectionLen)

    if ((WomenCollectionLen === null || WomenCollectionLen?.items.length === 0) && (MenCollectionLen === null || MenCollectionLen?.items.length === 0) && (KidsCollectionLen === null || KidsCollectionLen?.items.length === 0))
        <div>
            <Navbar />
            <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '15%' }}>
                {/* <RemoveShoppingCartTwoToneIcon /> */}
                <p className="emptycart-text">Your cart is empty</p>

            </div>
        </div>
    return (

        <div className="webBag-maindiv">
            <Navbar />
            <div style={{ marginTop: '30px' }}>
                <h1 >Mybag</h1>
                <div className="Bag-sub-div">
                    <h3>Total-Items:{TotalItems}</h3>
                    {/* <h3>Cart ({totalUniqueItems})</h3> */}
                </div>

                <Divider className="divcol" />

                <div >

                    {/* For Women Collection */}

                    <ul>
                        {
                            JSON.parse(localStorage.getItem('Women'))?.items.map((item, index) => {
                                console.log("From Women===>", item.type)
                                return (
                                    <>
                                        <div className='lists2' >
                                            <div>
                                                <img src={item.img} style={{ width: '50%', height: '80%' }} />
                                            </div>
                                            <div>
                                                <h4><b>ItemName</b><br />{item.itemName}</h4>
                                                <h4><b>Price:$</b>{item.price}</h4>
                                                <h4><b>Quantity:</b>{Quantity}</h4>
                                            </div>
                                        </div>
                                        <div className="update-quantity" >
                                            <div className="D-quan-btn">
                                                <Button className="quan-btn" variant="contained" color='success'
                                                    onClick={() => SetQuantity(Quantity - 1)}
                                                >
                                                    -
                                                </Button>
                                                <Button className="quan-btn" variant="contained" color='success'
                                                    onClick={() => SetQuantity(Quantity + 1)}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                            <div>
                                                <Button color="error" className='del-btn' variant="contained" onClick={() => deleteitemfromcart(item.type, index)}>Delete</Button>
                                            </div>

                                        </div>

                                        < Divider className="divcol" />
                                    </>
                                )
                            })

                        }
                    </ul>

                    {/* For Men Collections */}

                    <ul>
                        {
                            JSON.parse(localStorage.getItem('Men'))?.items.map((item, index) => {
                                console.log("From Men===>", item.type)

                                return (
                                    <>
                                        <div className='lists2' >
                                            <div>
                                                <img src={item.img} style={{ width: '50%', height: '80%' }} />
                                            </div>
                                            <div>
                                                <h4><b>ItemName</b><br />{item.itemName}</h4>
                                                <h4><b>Price:$</b>{item.price}</h4>
                                                <h4><b>Quantity:</b>{Quantity}</h4>
                                            </div>
                                        </div>
                                        <div className="update-quantity" >
                                            <div className="D-quan-btn">
                                                <Button className="quan-btn" variant="contained" color='success'
                                                    onClick={() => SetQuantity(Quantity - 1)}
                                                >
                                                    -
                                                </Button>
                                                <Button className="quan-btn" variant="contained" color='success'
                                                    onClick={() => SetQuantity(Quantity + 1)}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                            <div>
                                                <Button color="error" className='del-btn' variant="contained" onClick={() => deleteitemfromcart(item.type, index)}>Delete</Button>
                                            </div>

                                        </div>

                                        < Divider className="divcol" />
                                    </>
                                )
                            })

                        }
                    </ul>

                    {/* For Kids Collection */}

                    <ul>
                        {
                            JSON.parse(localStorage.getItem('Kids'))?.items.map((item, index) => {
                                console.log("From Kid===>", item.type)

                                return (
                                    <>
                                        <div className='lists2' >
                                            <div>
                                                <img src={item.img} style={{ width: '50%', height: '80%' }} />
                                            </div>
                                            <div>
                                                <h4><b>ItemName</b><br />{item.itemName}</h4>
                                                <h4><b>Price:$</b>{item.price}</h4>
                                                <h4><b>Quantity:</b>{Quantity}</h4>
                                            </div>
                                        </div>
                                        <div className="update-quantity" >
                                            <div className="D-quan-btn">
                                                <Button className="quan-btn" variant="contained" color='success'
                                                    onClick={() => SetQuantity(Quantity - 1)}
                                                >
                                                    -
                                                </Button>
                                                <Button className="quan-btn" variant="contained" color='success'
                                                    onClick={() => SetQuantity(Quantity + 1)}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                            <div>
                                                <Button color="error" className='del-btn' variant="contained" onClick={() => deleteitemfromcart(item.type, index)}>Delete</Button>
                                            </div>

                                        </div>

                                        < Divider className="divcol" />
                                    </>
                                )
                            })

                        }
                    </ul>


                </div>

            </div>
        </div >
    )

}


const deletealert = () => {
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
            // removeItem(id)
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
// const deleteall = () => {
//     const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//             confirmButton: 'btn btn-success',
//             cancelButton: 'btn btn-danger',
//         },
//         buttonsStyling: true
//     })

//     swalWithBootstrapButtons.fire({
//         title: 'Are you sure?',
//         text: "On Clicking Yes All Cart Item will be removed!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//         reverseButtons: true
//     }).then((result) => {
//         if (result.isConfirmed) {
//             emptyCart()
//             swalWithBootstrapButtons.fire(
//                 'Deleted!',
//                 'Your All Items has been Removed from cart Sucessfuly.',
//                 'success'
//             )
//         } else if (
//             /* Read more about handling dismissals below */
//             result.dismiss === Swal.DismissReason.cancel
//         ) {
//             swalWithBootstrapButtons.fire(
//                 'Cancelled',
//                 // 'Your imaginary file is safe :)',
//                 // 'error'
//             )
//         }
//     })

// }


// if (isEmpty) return (
//     <div>
//         <Navbar />
//         <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '15%' }}>
//             <RemoveShoppingCartTwoToneIcon />
//             <p className="emptycart-text">Your cart is empty</p>

//         </div>
//     </div>

// )
// return (

//     <div className="webBag-maindiv">
//         <Navbar />
//         <div style={{ marginTop: '30px' }}>
//             <h1 >Mybag</h1>
//             <div className="Bag-sub-div">
//                 <h3>Total-Items:{totalItems}</h3>
//                 <h3>Cart ({totalUniqueItems})</h3>
//             </div>
//             <Divider className="divcol" />
//             <div >
//                 <ul >
//                     {items.map((item) => (
//                         <li key={item.id} className='lists'>
//                             <div className='lists2' >
//                                 <div>
//                                     <img src={item.img} style={{ width: '30%', height: 'auto' }} />
//                                 </div>
//                                 <div>
//                                     <h4><b>ItemName</b>:{item.Name}</h4>
//                                     <h4><b>Price:$</b>{item.price}</h4>
//                                     <h4><b>Quantity:</b>{item.quantity}</h4>

//                                 </div>

//                             </div>


//                             <div className="update-quantity" >
//                                 <div className="D-quan-btn">
//                                     <Button className="quan-btn" variant="contained" color='success'
//                                         onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//                                     >
//                                         -
//                                     </Button>
//                                     <Button className="quan-btn" variant="contained" color='success'
//                                         onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//                                     >
//                                         +
//                                     </Button>
//                                 </div>
//                                 <div>
//                                     <Button color="error" className='del-btn' variant="contained" onClick={() => deleteitemfromcart(item.id)}>Delete</Button>
//                                 </div>

//                             </div>
//                             <Divider className="divcol" />
//                         </li>

//                     ))}
//                 </ul>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
//                     <h2 style={{ marginLeft: '8%' }}><b>Total:</b>${cartTotal}</h2>
//                     <Button variant='contained' color='error' onClick={() => deleteall()}>Delete All</Button>
//                 </div>

//             </div>
//         </div>
//     </div>
// )

export default WebMybag;