import React from 'react';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';

interface DataTableProps {
    value: any[],
    paginator?: boolean,
    rows?: number,
    selectionMode: string,
    onRowDoubleClick?: any,//Function
    onRowClick?: any,//Function
    onCellClick?: any,
    emptyMessage: string,
    columns: { field: string, header: string }[],
    columnOptions?: { field: String, options: any }[]
    sortable?: boolean
}


const columnData = (rowData: any, fieldData: any, onCellClick: any, columnOptions: { field: String, options: any }[] | undefined) => {
    let nestedProps = fieldData.field ? fieldData.field.split('.') : [];
    let text = rowData;
    if (nestedProps && nestedProps.length > 0) {
        for (let i = 0; i < nestedProps.length; i++) {
            text = text[nestedProps[i]];
        }
    }
    columnOptions = columnOptions || [];
    const fieldOptions = columnOptions.find(col => col.field == fieldData.field) || {} as any;
    const options = fieldOptions.options || {};
    const onClick = () => {
        onCellClick && onCellClick(rowData, fieldData)
    }
    return <p onClick={onClick} style={{ margin: 0, fontWeight: options.bold ? 'bold' : 'normal' }}> {text}</p >
}

const DataTableComponent: React.FC<DataTableProps> = (props) => {
    const { onRowDoubleClick, onRowClick, onCellClick, columnOptions, sortable } = props;
    return (
        <DataTable value={props.value}
            paginator={props.paginator} rows={props.rows}
            selectionMode={props.selectionMode}
            onRowDoubleClick={(e: { originalEvent: Event, data: any, index: number }) => onRowDoubleClick && onRowDoubleClick(e)}
            onRowClick={(e: { originalEvent: Event, data: any, index: number }) => onRowClick && onRowClick(e)}
            emptyMessage={props.emptyMessage}>

            {
                props.columns.map(column =>
                    <Column
                        field={column.field}
                        header={column.header} sortable={sortable}
                        body={(rowData: any, fieldData: any) => columnData(rowData, fieldData, onCellClick, columnOptions)}
                    />
                )
            }
        </DataTable>
    )
}

export default DataTableComponent;