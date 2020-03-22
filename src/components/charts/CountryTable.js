import React from 'react';
import DataGrid, {
  Sorting,
  Summary,
  TotalItem,
  /*Column*/
} from 'devextreme-react/data-grid';
import Loading from '../Loading';
//import { CheckBox } from 'devextreme-react';

function CountryTable(props) {
  /*var dataGrid = null
    var positionDisableSorting = false

    function onPositionSortingChanged() {

    positionDisableSorting = !positionDisableSorting
    dataGrid.instance.columnOption(5, 'sortOrder', void 0);

    }*/

  const { region_data, isFetching } = props

    
  if (region_data.length < 1 || isFetching){
    return (
      <Loading />
    )
  }

  else {
    return (
    <div>
      <DataGrid
          elementAttr={{
            id: 'gridContainer'
          }}
        dataSource={region_data}
        showBorders={true}
        showRowLines={true}
        columnMinWidth={80}
        wordWrapEnabled={true}

      >
        <Sorting mode="multiple" />

          {/*To do: Lazy load / masonry!!*/}
        
        
        <Summary>
          
          {Object.keys(region_data[4])
            .slice(1, Object.keys(region_data[4]).length)
            .map(x => {
              return <TotalItem key={x} column={x} summaryType="sum" />;
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
  
}

export default CountryTable;
