import React,{useState} from 'react'

const Displaystat = ({data, statecode}) => {

    const [statedata, setStatedata] = useState({empty: "yes"})

    const fetchstatedata = () => {
        if(statedata.empty === "yes" && data.empty !== "yes"){
            for(var i = 0 ; i < 38 ; i++){
                if(data.statewise[i].statecode === statecode){
                    setStatedata(data.statewise[i])
                    break;
                }
            }
        }
    }

    return (
        <div>
            <p>State Code: {statecode}</p>
            {fetchstatedata()}
            {console.log(statedata)}
        </div>
    )
}

export default Displaystat
