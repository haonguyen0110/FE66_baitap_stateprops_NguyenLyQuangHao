import React, { Component } from 'react'
import Car from './Car'
export default class CarStore extends Component {
    products = [
        { id: 1, name: 'Black car', img:'./images/products/black-car.jpg', price: 1000},
        { id: 2, name: 'Red car', img:'./images/products/red-car.jpg', price: 2000},
        { id: 3, name: 'Silver car', img:'./images/products/silver-car.jpg', price: 3000},
        { id: 4, name: 'Steel car', img:'./images/products/steel-car.jpg', price: 4000}
    ]
    state = { CarDetail:{ id: 1, name: 'Black car', img:'./images/products/black-car.jpg', price: 1000}}
    renderCarList= () => {
        return this.products.map((car, index) => {
            return <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <Car car={car} xemChiTiet={this.xemChiTiet}/>
               
            </div>
        })
    }
    xemChiTiet= (carClick) =>{

        this.setState({
            CarDetail:carClick
        })
    }
    render() {
        let {CarDetail}=this.state;
        return (
            
            <div className="container mt-5">
                <h3>Danh sách xe</h3>
                <div className="row">
            {this.renderCarList()}

            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{CarDetail.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body car-detail">
                                    <img src={CarDetail.img} className="w-100" alt="..."/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
