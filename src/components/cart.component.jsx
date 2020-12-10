import React, {Component} from 'react';


export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {showCheckout : false}
    }
    render() {
        const {cartItems} = this.props
        return (
            <div>
                {cartItems.length === 0 ? <div className='cart cart-header'>Cart is empty</div> 
                :
                <div className='cart cart-header'>
                    you have {cartItems.length} in the cart
                </div>
                }

                <div>
                   <div className='cart'>
                       <ul className='cart-items'>
                           {cartItems.map(item => (
                               <li key={item._id}>
                                   <div>
                                       <img src={item.image} alt={cartItems.title}/>
                                   </div>
                                   <div>
                                       <div>{item.title}</div>
                                       <div className='right'>
                                           {item.price} x {item.count}{' '}
                                        <button className='button' onClick={() => this.props.removeFromCart(item)}>
                                           Remove
                                       </button>
                                       </div>
                                       
                                   </div>
                               </li>
                           ))}
                       </ul>
                   </div>
                   {cartItems.length !== 0 && (
                       <div>
                       <div className='cart'>
                       <div className='total'>
                           <div>
                               Total:{' '}
                               {cartItems.reduce((a, c) => a + (c.price * c.count), 0)}
                           </div>
                           <button onClick={() => {this.setState({showCheckout: true})}} className='button primary'>Proceed</button>
                       </div>
                   </div>
                   {
                       this.state.showCheckout &&  (
                           <div className='cart'>
                           <form onSubmit={this.createOrder}>
                               <ul className='form-container'>
                                   <li>
                                       <label>Email</label>
                                       <input name='email' type='email' required onChange={this.handleInput}></input>
                                   </li>
                                   <li>
                                       <label>Name</label>
                                       <input name='name' type='text' required onChange={this.handleInput}></input>
                                   </li>
                                   <li>
                                       <label>Address</label>
                                       <input name='address' type='text' required onChange={this.handleInput}></input>
                                   </li>
                               </ul>
                           </form>
                           </div>
                       )
                   }
                   </div>
                   )}
                   
                </div>
            </div>
            
        )
    }
}