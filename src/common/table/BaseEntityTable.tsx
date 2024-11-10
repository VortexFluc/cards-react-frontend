import {Table, TableProps} from "antd";
import BaseEntityDto from "../model/dto/BaseEntityDto.ts";
import BaseEntityService from "../model/service/BaseEntityService.ts";
import {useEffect, useState} from "react";
import BaseEntityApi from "../model/api/BaseEntityApi.ts";

export interface BaseEntityTableProps<E extends BaseEntityDto, A extends BaseEntityApi, S extends BaseEntityService<E, A>> {
    columns: TableProps<E>['columns'],
    entityService: S,
}

const BaseEntityTable = <E extends BaseEntityDto, A extends BaseEntityApi, S extends BaseEntityService<E, A>>(props: BaseEntityTableProps<E, A, S>) => {
    const [data, setData] = useState<E[]>([]);

    useEffect(() => {
        const fetchAll = async () => {
            setData(await props.entityService.findAll());
        }

        fetchAll().catch(console.error);
    }, [])

    return <Table<E> columns={props.columns} dataSource={data}/>
}

export default BaseEntityTable;