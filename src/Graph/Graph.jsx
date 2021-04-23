import React,{useState} from 'react'

const Graph = ({data}) => {

    const data_length = data.length - 1;
    const dailyconfirmed = []
    const dailyrecovered = []
    const dates = []

    const storeconfirmed = () => {
        for(var i = 0 ; i <= data_length ; i++){
            dailyconfirmed.push(data[i].dailyconfirmed)
            dailyrecovered.push(data[i].dailyrecovered)
            dates.push(data[i].dateymd)
        }
    }

    return (
        <div>
            {storeconfirmed()}
            {console.log(data_length)}
            {console.log(dailyconfirmed)}
            {console.log(dailyrecovered)}
            {console.log(dates)}
        </div>
    )
}

export default Graph
