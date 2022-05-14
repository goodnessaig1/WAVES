import React, { Component } from 'react'
import PageTop from '../utils/page_top'
import { connect } from 'react-redux'

import { getProductDetail, clearProductDetail } from '../../actions/products_actions';
import ProdNfo from './productInfo';
import ProdImg from './prodImg';
import { addToCart } from '../../actions/user_actions';

 class ProoductPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id)).then(() =>{
            if(!this.props.products.prodDetail){
                alert('No article found')
                this.props.history.push('/')
            }
        })
    } 

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }

    addToCartHandler(id){
        this.props.dispatch(addToCart(id))
    }


  render() {
    return (
      <div> 
        <PageTop
            title='Product Detail' 
        />   
        <div className='container'>
            {
                this.props.products.prodDetail ?
                <div className='product_detail_wrapper'>
                    <div className='left'>
                       <div style={{width: '500px'}}>
                          <ProdImg
                                detail={this.props.products.prodDetail}
                            />
                        </div>
                    </div>
                    <div className='right'>
                         <ProdNfo
                            addToCart={(id)=> this.addToCartHandler(id)}
                            detail={this.props.products.prodDetail}
                         />
                    </div>
                </div>
                :'Loading' 
            }
        </div>   
     </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProoductPage)