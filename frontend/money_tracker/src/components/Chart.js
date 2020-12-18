import React, { Component } from 'react';
import Header from './Header'
import {Pie} from 'react-chartjs-2';
// import { Card, Button, Container} from 'react-bootstrap'


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Food', 'Beauty', 'Car', 'Groceries', 'Clothes', 'Entertainment', 'House', 'Utilities', 'Education'],
                datasets: [
                    {
                        label: 'amount',
                        data:[
                            6.23,
                            7.35,
                            20.00,
                            78.73,
                            37.35,
                            32.57,
                            500.00,
                            120.00,
                            600.00
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 0, 255, 0.6)',
                            'rgba(0, 255, 255, 0.6)',
                        ]
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div>
                <Header handleLogin={this.props.handleLogin} history={this.props.history}/>
                <div className="chart">

                <h3>Monthly Expenses Chart</h3>
                
                <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text: 'Monthly Expenses',
                            frontSize: 25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />


                </div>


                    
                    
                

               
            </div>
        )
    }
}

export default Chart;