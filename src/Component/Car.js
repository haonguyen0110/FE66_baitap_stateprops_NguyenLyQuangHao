import React, { Component } from 'react'

export default class Car extends Component {
    render() {
        let {car} = this.props
        return (
            <div>
                <div className="card">
                    <img src={car.img} alt="..." />
                    <div className="card-body">
                        <h5 className="font-weight-bold">{car.name}</h5>
                        <p>{car.price}</p>
                        <button onClick={() => {
                            
                            this.props.xemChiTiet(car)
                        }} className="btn btn-success" data-toggle="modal" data-target="#exampleModal">Xem chi tiết</button>
                    </div>

                    

                </div>
            </div>
        )
    }
}
