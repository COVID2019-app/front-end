import React from 'react';
import DataGrid, { Column, Sorting, Summary, TotalItem } from 'devextreme-react/data-grid';
//import { CheckBox } from 'devextreme-react';
import { countrydata } from '../../shared/allcountries';

function CountryTable ({country}) {


    var dataGrid = null
    //var positionDisableSorting = false

    /*function onPositionSortingChanged() {

    positionDisableSorting = !positionDisableSorting
    dataGrid.instance.columnOption(5, 'sortOrder', void 0);

    }*/


        return (
            <div>
                <DataGrid
                    dataSource={countrydata[country]}
                    showBorders={true}
                    showRowLines= {true}
                    ref={(ref) => dataGrid = ref}
                >
                    <Sorting mode="multiple" />

                    {
                        Object.keys(countrydata[country][0]).map((x) => {
                            console.log(x)
                            return (
                                <Column
                                    key={x}
                                    dataField={x}
                                    width={90}
                                    
                                />
                            )
                        })
                        }

                    <Summary>
                        {
                        Object.keys(countrydata[country][0]).slice(1, ((Object.keys(countrydata[country][0])).length)).map((x) => {
                            return(
                        <TotalItem
                            column={x}
                            summaryType="sum" />
                        
                            )
                        })}
                    </Summary>

                </DataGrid>
                {/*<div className="options">
                    <div className="caption">Options</div>
                    <div className="option">
                        <CheckBox text="Disable Sorting for the Position Column"
                            value={positionDisableSorting}
                            onValueChanged={onPositionSortingChanged} />
                    </div>
                </div>*/}
            </div>
        );


  
}

export default CountryTable;
