import Tshirt1 from '../Assets/Images/Tshirt1.jpeg'
import Tshirt2 from '../Assets/Images/tshirt2.jpeg'
import Tshirt3 from '../Assets/Images/tshirt3.jpeg'
import Mensuit1 from '../Assets/Images/mensuit1.jpg'
import JJsuit from '../Assets/Images/JJ suit gents.jpeg'
import Girldress1 from '../Assets/Images/girldress1.jpeg'
import GirlFrocks1 from '../Assets/Images/girlfrocks.jpg'


import img1 from '../Assets/Images/Women Dress.jpeg'
import img2 from '../Assets/Images/Chiffon Long dress.jpeg'
import stylishdress from '../Assets/Images/stylish dress.jpeg'

var Products = {
    Men: [
        {
            id: 1,
            Name: 'T-Shirt 1',
            img: Tshirt1,
            price: 17,
        },
        {
            id: 2,
            Name: 'T-Shirt 2',
            img: Tshirt2,
            price: 13,
        },
        {
            id: 3,
            Name: 'T-Shirt 3',
            img: Tshirt3,
            price: 19,
        },
        {
            id: 4,
            Name: '3 Pc Suit',
            img: Mensuit1,
            price: 31,
        },
        {
            id: 5,
            Name: 'JJsuit',
            img: JJsuit,
            price: 15,
        },
    ],
    Women: [
        {
            id: 6,
            Name: 'Women Dress Design-1',
            img: img1,
            price: 25,
        },
        {
            id: 7,
            Name: 'Chiffon Long dress',
            img: img2,
            price: 15,
        },
        {
            id: 8,
            Name: 'Stylish Dress',
            img: stylishdress,
            price: 30,
        },
    ],
    Kids: [
        {
            id: 9,
            Name: 'Dress-1',
            img: Girldress1,
            price: 8
        },
        {
            id: 10,
            Name: 'Frock-1',
            img: GirlFrocks1,
            price: 11
        },
    ]

}

export default Products;