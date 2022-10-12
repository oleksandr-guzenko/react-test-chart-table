import React, {useContext, useState} from 'react'
import Chart from "./Chart";
import Table from "./Table";
import { useQuery } from 'react-query';
import axios from 'axios';
import { DataContext } from "../Context";

function Show() {
    const [data, setData] = useState([]);
    const dataContext = useContext(DataContext);
    useQuery('data', () => {
        axios
            .get('/data.json')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    })

    return (
        <DataContext.Provider value={{data}}>
            <div className=''>
                <div className="row m-0">
                    <div className="col-lg-6">
                    <Chart />
                    </div>
                    <div className="col-lg-6">
                    <Table />
                    </div>
                </div>
                
                
            </div>
        </DataContext.Provider>
    )
}

export default Show