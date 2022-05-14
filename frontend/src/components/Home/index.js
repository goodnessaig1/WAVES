import React, { Component } from 'react'
import HomePromotion from './home_promotion'
import HomeSlider from './home_slider'

import { connect } from 'react-redux'
import {  getProductByArrival, getProductBySell } from '../../actions/products_actions'
import CardBlock from '../utils/card_block'

  
class Home extends Component {
  
  componentDidMount(){
    this.props.dispatch(getProductBySell());
    this.props.dispatch(getProductByArrival());
  }
  
  render() {
    return (
      <div>
          <HomeSlider/>
          <CardBlock
            list={this.props.products.bySell}
            title="Best Selling Guitars"
          />
          <HomePromotion/>
          <CardBlock
            list={this.props.products.byArrival}
            title="New Products"
          />
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStatetoProps)(Home)