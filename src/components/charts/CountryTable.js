import React from 'react';
import DataGrid, {
  Sorting,
  /*Summary,
  TotalItem,*/
  Column,
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

  const { region_data, isFetching, field } = props;

  const onCellPrepared = e => {
    if (field === 'confirmed_cases') {
      if (e.columnIndex !== 0) {
        e.cellElement.style.backgroundColor = `rgba(255, 171, 0, ${e.value /
          500})`;
      }
    } else {
      if (e.columnIndex !== 0) {
        e.cellElement.style.backgroundColor = `rgba(255, 0, 0, ${e.value /
          100})`;
      }
    }
  };

  console.log(region_data);

  if (region_data.length < 1 || isFetching) {
    return <Loading />;
  } else {
    return (
      <div>
        <DataGrid
          elementAttr={{
            id: 'gridContainer',
          }}
          dataSource={region_data}
          showBorders={true}
          showRowLines={false}
          showColumnLines={false}
          columnMinWidth={80}
          wordWrapEnabled={true}
          onCellPrepared={onCellPrepared}
        >
          <Sorting mode="multiple" />

          {/*To do: Lazy load / masonry!!*/}

          {Object.keys(region_data[region_data.length - 1]).map(x => {
            return <Column key={x} dataField={x} />;
          })}
          {/*
          <Summary>
            {Object.keys(region_data[region_data.length - 1])
              .slice(1, Object.keys(region_data[region_data.length - 1]).length)
              .map(x => {
                return <TotalItem key={x} column={x} summaryType="sum" />;
              })}
          </Summary>
          */}
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
