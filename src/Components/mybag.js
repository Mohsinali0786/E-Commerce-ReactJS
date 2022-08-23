import { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { Divider } from "antd";
import Swal from "sweetalert2";
import Women from "../Container/Women";
const Mybag = () => {
    const [Quantity, SetQuantity] = useState(1);
    const [deleteclicked, setdeleteclicked] = useState(false)
    const [allbagitems, setallbagitems] = useState([])
    const [aa, setaa] = useState()

    let AllItemsInBag;

    // let WomenItems=[];
    // let MenItems=[];
    // let KidsItems=[];

    const [TotalItems, setTotalItems] = useState(0)
    let WomenItems = 0;
    let MenItems = 0;
    let KidsItems = 0

    let WomenCollectionLen = JSON.parse(localStorage.getItem('Women'));
    let MenCollectionLen = JSON.parse(localStorage.getItem('Men'));
    let KidsCollectionLen = JSON.parse(localStorage.getItem('Kids'));



    useEffect(() => {
        console.log("Use Effect 1")
        if (localStorage.getItem("Women") === null && localStorage.getItem("Men") === null && localStorage.getItem("Kids") === null) {
            console.log("Use Effect 2")
        }
        else {
            console.log(WomenCollectionLen?.items.length)
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
            // setTotalItems(WomenCollectionLen?.items.length + MenCollectionLen?.items.length + KidsCollectionLen?.items.length)
            // AllItemsInBag.items = [null]
            console.log("Use Effect 3")
            // console.log("localStorage.getItem('Women')===>", JSON.parse(localStorage.getItem('Women')).items)
            // setWomenItems(JSON.parse(localStorage.getItem('Women')).items)

            setdeleteclicked(false)

            // AllItemsInBag = JSON.parse(localStorage.getItem('mycart'))
            // setallbagitems(AllItemsInBag?.items)
        }


    }, [deleteclicked === true])

    // console.log("WomenData=====>", WomenItems.items)

    console.log(allbagitems, 'allbagitems')
    useEffect(() => {
        // if (allbagitems.length === 0) {

        // }
        // else {
        //     setdeleteclicked(false)
        // }

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
                        console.log("Deleted Women====>", Women)
                        // setallbagitems(allbagitems)
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




        console.log("index", index)
        // for (var i = 0; i < allbagitems.length; i++) {
        //     console.log("i===>", i, index)
        //     if (index === i) {
        //         allbagitems.splice(index, 1)
        //         setallbagitems(allbagitems)
        //         localStorage.setItem('mycart', JSON.stringify({ items: [...allbagitems] }))
        //     }
        // }
    }
    console.log("Lengthhhhhhhhhhh", WomenCollectionLen, MenCollectionLen, KidsCollectionLen)

    if ((WomenCollectionLen === null || WomenCollectionLen?.items.length === 0) && (MenCollectionLen === null || MenCollectionLen?.items.length === 0) && (KidsCollectionLen === null || KidsCollectionLen?.items.length === 0))
        return <p className="emptycart-text">Your cart is empty</p>;
    return (

        <div className="Bag-maindiv">
            <h1 >Mybag</h1>
            <div className="Bag-sub-div">
                <h3>Total-Items:{TotalItems}</h3>

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
                                                onClick={() => {


                                                    // localStorage.setItem('Women', JSON.stringify({ img: item.img, itemName: item.Name, price: item.price, type: 'Women', quantity: item.quantity + 1 }))

                                                }
                                                }

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

                {/* <ul >
                    {allbagitems?.map((item, index) => {
                        console.log('item', item)
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
                                        <Button color="error" className='del-btn' variant="contained" onClick={() => deleteitemfromcart(index)}>Delete</Button>
                                    </div>

                                </div>

                                < Divider className="divcol" />
                            </>

                        )
                    })}
                </ul> */}

            </div>



        </div >
    )

}


export default Mybag;



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