import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CartP1 from '../../../../../assets/images/header-cart-p1.jpg';

class UserCartDropdown extends Component {
    render() {
        const CartDetails = [
            {productTitle: "iBlender", productDetail: "Best Kitchen badge in 2020", productPrice: "350", productQuantity: "5", productImage: CartP1},
            {productTitle: "iBlender", productDetail: "Best Kitchen badge in 2020", productPrice: "350", productQuantity: "5", productImage: CartP1},
            {productTitle: "iBlender", productDetail: "Best Kitchen badge in 2020", productPrice: "350", productQuantity: "5", productImage: CartP1},
            {productTitle: "iBlender", productDetail: "Best Kitchen badge in 2020", productPrice: "350", productQuantity: "5", productImage: CartP1},
            {productTitle: "iBlender", productDetail: "Best Kitchen badge in 2020", productPrice: "350", productQuantity: "5", productImage: CartP1}
        ]
        return (
            <>
                <form className="bg-img-notification-bg pb-6 pt-6 rounded-t-lg">
                    <div>
                        <h4 className="flex justify-between px-6 items-center">
                            <div className="flex cursor-pointer items-center">
                                <i className="material-icons text-green-400 bg-blue-500 bg-opacity-5 rounded p-4">shopping_cart</i>
                                <div className="text-white text-xl font-medium mb-2 leading-none">My Cart</div>
                            </div>
                            <div className="bg-green-400 text-white text-xs rounded-lg py-2 px-3 ml-2 cursor-pointer active:bg-green-800">2 Items</div>
                        </h4>
                    </div>
                </form>
                <div className="product-container max-h-72 toggle-search-submenu overflow-y-auto">
                    {CartDetails.map((item, i) => {
                        return  <div className="product-detail p-7 flex justify-between border-b" key={i}>
                                    <div className="flex flex-col mr-2">
                                        <Link to="#" className="text-sm text-gray-500 font-semibold hover:text-blue-500">{item.productTitle}</Link>
                                        <span className="text-xs text-gray-400">{item.productDetail}</span>
                                        <div className="flex items-center mt-2">
                                            <span className="font-medium text-gray-700 text-xs mr-1 ">$ {item.productPrice}</span>
                                            <span className="text-gray-400 text-xs mr-1">for</span>
                                            <span className="font-medium text-gray-700 text-xs mr-2">{item.productQuantity}</span>
                                            <Link to="#" className="bg-green-100 hover:bg-green-500 mr-2 rounded-md w-6 h-6 inline-block text-center leading-relaxed">
                                                <i className="material-icons text-sm text-green-500 hover:text-white w-6 h-6">remove</i>
                                            </Link>

                                            <Link to="#" className="bg-green-100 hover:bg-green-500 mr-2 rounded-md w-6 h-6 inline-block text-center leading-relaxed">
                                                <i className="material-icons text-sm text-green-500 hover:text-white w-6 h-6">add</i>
                                            </Link>
                                        </div>
                                    </div>

                                    <Link to="#" className="inline-block rounded">
                                        <img src={item.productImage} alt="cart product" className="w-20 h-20 rounded" />
                                    </Link>
                                </div>
                    })}
                    
                </div>
            
                <div className="p-7">
                    <div className="flex justify-between mb-4 items-center">
                        <span className="text-xs font-medium text-gray-400">Total</span>
                        <span className="text-sm text-gray-600 font-semibold">$1840.00</span>
                    </div>

                    <div className="mb-7 items-center flex justify-between">
                        <span className="text-xs font-medium text-gray-400">Sub total</span>
                        <span className="text-sm text-blue-500 font-semibold">$1840.00</span>
                    </div>
                    
                    <div className="text-right">
                        <button className="py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm outline-none focus:outline-none">Place Order</button>
                    </div>
                </div>
            </>
        )
    }
}

export default UserCartDropdown;