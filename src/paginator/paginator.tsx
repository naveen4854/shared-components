import { Paginator, PageState } from 'primereact/components/paginator/paginator';
import React from 'react';

interface PaginatorProps {
    first?: number,
    rows: number,
    totalRecords: number,
    rowsPerPageOptions?: number[]
    pageLinkSize?: number
    onPageChange?: Function
}

const CustomPaginator: React.FC<PaginatorProps> = (props) => {

    const onPageChange = (event: PageState): void => {
        if (props.onPageChange)
            props.onPageChange(event);
    }

    return (
        <Paginator
            first={props.first}
            rows={props.rows}
            totalRecords={props.totalRecords}
            rowsPerPageOptions={props.rowsPerPageOptions}
            pageLinkSize={props.pageLinkSize}
            onPageChange={onPageChange}
        />
    )
}

export default CustomPaginator;