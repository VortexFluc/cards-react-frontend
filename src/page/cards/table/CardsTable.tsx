import BaseEntityTable from "../../../common/table/BaseEntityTable.tsx";
import CardEntityService from "../../../model/cards/service/CardEntityService.ts";


const CardsTable = () => {
    return (
        <>
            <BaseEntityTable columns={[
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: 'Создано',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    render: (date: Date) => <>{date?.toLocaleDateString('ru-RU')}</>
                },
                {
                    title: 'Обновлено',
                    dataIndex: 'updatedAt',
                    key: 'updatedAt',
                    render: (date: Date) => <>{date?.toLocaleDateString('ru-RU')}</>
                },
                {
                    title: 'Текст',
                    dataIndex: 'text',
                    key: 'text',
                },
                {
                    title: 'Перевод',
                    dataIndex: 'translation',
                    key: 'translation',
                }
            ]} entityService={new CardEntityService()}/>
        </>
    )
}

export default CardsTable;