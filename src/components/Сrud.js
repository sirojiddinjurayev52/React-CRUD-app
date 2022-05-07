
import React, {Component} from 'react';

class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedIndex: -1
        }
    }
    render() {

        const addProduct = (event) => {

            // sahifa yangilanib ketishini oldini oladi
            event.preventDefault();
            let productName = event.target.productName.value;
            let productPrice = event.target.productPrice.value;
            let productColor = event.target.productColor.value;

            // inputlarni ichini tozalab beradi
            event.target.reset();
            let newProduct = {
                name: productName,
                price: productPrice,
                color: productColor
            }

            if (this.state.products >= 0){
                this.state.products[this.state.selectedIndex] = newProduct;
                this.state.selectedIndex = -1;
            } else {
                this.state.products.push(newProduct);
            }

            this.setState({
                products: this.state.products
            })
        }

        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);
            this.setState({
                products: this.state.products
            })
        }

        const editProduct = (index) => {
            this.setState({
                selectedIndex: index
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 mt-3">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">CRUD</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={addProduct}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Product name"
                                        name="productName"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.name}
                                    />

                                    <input
                                        type="number"
                                        className="form-control mt-3"
                                        placeholder="Product price"
                                        name="productPrice"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.price}
                                    />

                                    <input
                                        type="color"
                                        className="form-control mt-3"
                                        name="productColor"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.color}
                                    />

                                    <button type="submit" className="btn btn-success ml-auto mt-3 d-block">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {this.state.products.map((item, index) => {
                                return (
                                    <div className="col-4 mt-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="card-body">
                                                <p>Price: <b>{item.price}$</b></p>
                                                <p>Color: <b>{item.color}</b></p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-center">
                                                <button type="button" className="btn btn-success" onClick={() => editProduct(index)}>Edit</button>
                                                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(index)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crud;