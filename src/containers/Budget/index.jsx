import React, { Component } from "react";
import { BudgetTable as Table, BudgetForm} from "../../components/index"
import "./budget.css";
class BudgetCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            income: [],
            expenses: []
        };
    }

    // toggleChangeHandler() {
    //     this.setState(state => ({
    //         change: state.change === "saving" ? "expenses" : "saving"
    //     }));
    // }

    // submitForm(data) {
    //     if (this.state.change === "saving") {
    //         this.setState(state => ({
    //             income: [...state.income, data]
    //         }));
    //         return;
    //     }
    //     this.setState(state => ({
    //         expenses: [...state.expenses, data]
    //     }));
    // }
    componentDidMount() {   
        var income = localStorage.getItem('income');
        var expenses = localStorage.getItem('expenses');
        
        this.submitIncome(...JSON.parse(income))
        this.submitExpenses(...JSON.parse(expenses))
        
    }

    // shouldComponentUpdate(nextProps, nextState) {
      
    //     localStorage.setItem('expenses', JSON.stringify(nextState.expense));

    // }

    

    submitExpenses(data,titleRef,priceRef) {
        this.setState(state => ({
            expenses: [...state.expenses, data]
        }), () => localStorage.setItem('expenses', JSON.stringify(this.state.expenses)));
        this.clearFields(titleRef);
        this.clearFields(priceRef);
    }
    

    submitIncome(data, titleRef, priceRef) {
        this.setState(state => ({
            income: [...state.income, data]
        }), () => localStorage.setItem('income', JSON.stringify(this.state.income)));
        this.clearFields(titleRef);
        this.clearFields(priceRef);
       
    } 
    
    clearFields(ref){
        if (ref && ref.current) {
            ref.current.value = ""
        }
    }

    calculateSum(items) {
        let price = 0;
        for (let index = 0; index < items.length; index++) {
            price += items[index].price;
        }
        return price;
    }

    render() {
        let savings = this.calculateSum(this.state.income);
        let expenses = this.calculateSum(this.state.expenses)
        let currentSavings = savings - expenses;
        return (
            <div className="budget-container">
                <div className="savings-info">
                    <h5>Total Savings: {savings}</h5>
                    <h5>Total Expenses: {expenses}</h5>
                    <h5>Current Balance: {currentSavings}</h5>
                </div>
                <div className="container clearfix">
                    
                    <div  className="half">
                        <BudgetForm
                            onSubmit={(dataFromChild ,titleRef,priceRef)=>
                                this.submitIncome(dataFromChild,titleRef,priceRef)
                            }
                        />
                    </div>
                    <div className="half">
                        <BudgetForm
                            onSubmit={(dataFromChild ,titleRef,priceRef)=>
                                this.submitExpenses(dataFromChild,titleRef,priceRef)
                            }
                        />
                    </div>
                </div>

                <div className="container">
                    <div className="half">
                        <h4>Income</h4>
                        <Table items={this.state.income} />
                    </div>
                    <div className="half">
                        <h4>Expenses</h4>
                        <Table items={this.state.expenses} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BudgetCalculator;
