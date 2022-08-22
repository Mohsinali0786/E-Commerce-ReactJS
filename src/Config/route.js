import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Container/Home'
import Women from '../Container/Women'
import Men from '../Container/Men'
import Kids from '../Container/Kids'
// import Mybag from '../Components/bag'
import WebMybag from '../Components/webbag'
import { CartProvider } from 'react-use-cart'
import MyForm from '../Container/form'
import SignUp from '../Container/signup'

var Allpaths = [

    { path: '/', Component: Home },
    { path: '/women', Component: Women },
    { path: '/men', Component: Men },
    { path: '/kids', Component: Kids },
    { path: '/webbag', Component: WebMybag },
    { path: '/form', Component: MyForm },
    { path: '/signup', Component: SignUp }

]

function AppRouter() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    {
                        Allpaths.map((myroutes, index) => {
                            return (
                                <Route key={index} path={myroutes.path} element={<myroutes.Component />} />
                            )
                        })

                    }

                    {/* <Route path='/Men' element={<Men />} />
                     <Route path='/kids' element={<Kids />} />
                     <Route path='/webbag' element={<WebMybag />} /> */}
                </Routes>
            </CartProvider>

        </BrowserRouter>


    )
}
export default AppRouter