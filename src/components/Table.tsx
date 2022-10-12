import React, {useContext, useState, useEffect} from 'react'
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

import { DataContext } from "../Context";

function Table() {
    const dataContext = useContext(DataContext);
    const columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    return (
        <div>
            <div
                className="ag-theme-alpine"
                style={{
                    height: '400px',
                    width: '100%'
                }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={dataContext.data}>
                </AgGridReact>
            </div>
        </div>
    )
}

export default Table