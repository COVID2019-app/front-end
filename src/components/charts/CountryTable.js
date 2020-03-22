import React from 'react';
import DataGrid, {
  Sorting
  /*Column,
  Summary,
  TotalItem,*/
} from 'devextreme-react/data-grid';
//import { CheckBox } from 'devextreme-react';

function CountryTable(props) {
  /*var dataGrid = null
    var positionDisableSorting = false

    function onPositionSortingChanged() {

    positionDisableSorting = !positionDisableSorting
    dataGrid.instance.columnOption(5, 'sortOrder', void 0);

    }*/

  const { region_data } = props

  console.log("region data 4", region_data[4])

  return (
    <div>
      <DataGrid
        dataSource={region_data}
        showBorders={true}
        showRowLines={true}
      >
        <Sorting mode="multiple" />
        {/*

        might need to lazy load to get this working again (should lazy load anyay)

        {Object.keys(region_data[0]).map(x => {
          return <Column key={x} dataField={x} width={90} />;
        })}
      
        <Summary>
          
          {Object.keys(region_data[4])
            .slice(1, Object.keys(region_data[4]).length)
            .map(x => {
              return <TotalItem key={x} column={x} summaryType="sum" />;
            })}
        </Summary>*/}
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
