import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'


class Main extends React.Component {

    constructor() {
        super()
        this.foodVenue = {
            Name: "Taco Hell",
            Experience: {
                Cuisines: ["Mexican", "American"],
                Fares: ["Sandwhich", "FingerFood"],
                DiningStyle: ["FastFood", "Casual"],
                CleanlienessRating: 3,
                Atmosphere: 3
            },
            PriceRating: 5,
            NutritionalRating: 5,
            WalkingDistance: false,
            ETA: 15,
            Address: {
                Address1: "100 Street Street",
                Address2: "",
                City: "Charlotte",
                Phone: "800-800-8000",
                Zip: "28273",
                State: "NC"
            }
        }
        this.state = {
            options: {Cuisine:[],Fare:[]},
        }

    }

    componentDidMount() {
      this.loadDropDowns();
    }

loadDropDowns(){
      let dropDowns = ["Cuisine", "Fare",];
        let options = {};
        dropDowns.forEach((x) => {
            $.getJSON("../api/option?Category=" + [x], (data) => {


                options[x] = data;
                this.setState({
                    options
                })
            })
        }, )
}

    handleAddRestaurant() {
        $.ajax(
            {
                url: "../api/foodvenue",
                type: "POST",
                data: JSON.stringify(
                    this.foodVenue
                ),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: () => {
                    location.reload()
                    // this.setState({
                    //     leftTableData: [],
                    //     paymentAmount: null,
                    //     paymentAmountValid: true,
                    //     paymentMethod: 1,
                    //     paymentMethodValid: true,
                    //     paymentNotes: null,
                    //     paymentNumber: null,
                    //     rightTableData: [],
                    //     SupplierKey: null,
                    //     supplierValid: true
                    // })
                }
            })
    }
    handleAddOption() {
        this.option = {
            OptionName: this.state.optionName,
            OptionCategory: this.state.optionCategory
        }
        $.ajax(
            {
                url: "../api/option",
                type: "POST",
                data: JSON.stringify(
                    this.option
                ),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: () => {
                this.loadDropDowns();
                    
                    // this.setState({
                    //     leftTableData: [],
                    //     paymentAmount: null,
                    //     paymentAmountValid: true,
                    //     paymentMethod: 1,
                    //     paymentMethodValid: true,
                    //     paymentNotes: null,
                    //     paymentNumber: null,
                    //     rightTableData: [],
                    //     SupplierKey: null,
                    //     supplierValid: true
                    // })
                }
            })
    }

    onChangeOptionName(e) {
        this.setState({
            optionName: e.target.value,
        })
    }

    onChangeOptionCategory(e) {
        this.setState({
            optionCategory: e.target.value,
        })
    }

    render() {
        return (
            <div>
                Test This out kid you are awesome - you fool
                <button type="button" onClick={() => { this.handleAddRestaurant() }}>Add New Restaurant</button>
                <button type="button" onClick={() => { this.handleAddOption() }}>Add New Option</button>
                <div>
                    <form>
                        <label htmlFor="OptionName">Option Name</label>
                        <input type="text" id="OptionName" onChange={(e) => { this.onChangeOptionName(e) }}></input>
                        <label htmlFor="OptionCategory">Option Category</label>
                        <input type="text" id="OptionCategory" onChange={(e) => { this.onChangeOptionCategory(e) }}></input>
                        <label htmlFor="Cuisineddl">Cuisine</label>
                        <select id="Cuisineddl" >
                            {this.state.options.Cuisine.map((x) => { return (<option key={x._id} value={x._id}>{x.OptionName}</option>) })}
                        </select>
                        <label htmlFor="Fareddl">Fare</label>
                        <select id="Fareddl" >
                            {this.state.options.Fare.map((x) => { return (<option key={x._id} value={x._id}>{x.OptionName}</option>) })}
                        </select>
                    </form>
                </div>
            </div>
        )
    }

}


ReactDom.render(
    <Main />, document.getElementById('react-app')
);