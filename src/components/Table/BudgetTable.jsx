import React from "react";
import "./table.css";
function BudgetTable(props) {
    return (
        <div className="budget-table">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items &&
                        props.items.length > 0 &&
                        props.items.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.title}</td>
                                    <td>{value.price}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default BudgetTable;
