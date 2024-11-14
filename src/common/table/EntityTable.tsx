import {Table, TableProps} from "antd";
import BaseEntityDto from "../model/dto/BaseEntityDto.ts";
import {useEffect, useState} from "react";

export interface BaseEntityTableProps<E extends BaseEntityDto> {
    columns: TableProps<E>['columns'],
    data: Array<E>,
    onSelect: (selectedEntity: E | undefined) => void,
}

export interface BaseEntityTableState<E extends BaseEntityDto> {
    selectedEntity: E | undefined;
}

const EntityTable = <E extends BaseEntityDto>(props: BaseEntityTableProps<E>) => {
    const [state, setState] = useState<BaseEntityTableState<E>>({selectedEntity: undefined});

    const handleRowSelection = (selectedItem: E) => {
        setState((prevState) => {
            if (prevState.selectedEntity?.id === selectedItem.id) {
                return {selectedEntity: undefined};
            }
            return {selectedEntity: selectedItem};
        })
    }

    useEffect(() => {
        props.onSelect(state.selectedEntity);
    }, [state.selectedEntity]);

    return <Table<E> columns={props.columns} dataSource={props.data} rowKey={(record) => `${record.id}`} rowSelection={{
        type: 'radio',
        selectedRowKeys: [`${state?.selectedEntity?.id}`],
    }} onRow={(selectedItem: E) => {
        return {
            onClick: () => handleRowSelection(selectedItem),
        }
    }}/>
}

export default EntityTable;