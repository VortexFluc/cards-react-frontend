import EntityTable from "../../common/table/EntityTable.tsx";
import CardsService from "../../model/cards/service/CardsService.ts";
import Card from "../../model/cards/dto/Card.ts";
import {useEffect, useState} from "react";

interface CardsPageProps {
    service: CardsService;
}

interface CardsPageState {
    selectedCard: Card | undefined;
    data: Card[];
}

const TABLE_COLUMNS = [
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
]

const CardsPage = (props: CardsPageProps) => {

    const [state, setState] = useState<CardsPageState>({
        selectedCard: undefined,
        data: []
    });

    const handleSelect = (selectedEntity: Card | undefined) => {
        setState((prevState) => {
            return {selectedCard: selectedEntity, data: prevState.data}
        });
    }

    useEffect(() => {
        const fetchAll = async () => {
            setState({
                data: await props.service.findAll(),
                selectedCard: undefined,
            });
        }

        fetchAll().catch(console.error);
    }, [props])

    return (
        <>
            <EntityTable columns={TABLE_COLUMNS} data={state.data} onSelect={handleSelect}/>
        </>
    )
}

export default CardsPage;