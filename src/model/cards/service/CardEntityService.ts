import BaseEntityService from "../../../common/model/service/BaseEntityService.ts";
import Card from "../dto/Card.ts";
import CardApi from "../api/CardApi.ts";
import {z} from "zod";

class CardEntityService extends BaseEntityService<Card, CardApi> {
    getApi(): CardApi {
        return new CardApi();
    }

    mapToModel(responseObject: object | null): Card {
        const schema = z.object({
            id: z.number(),
            createdAt: z.coerce.date(),
            updatedAt: z.coerce.date(),
            text: z.string(),
            translation: z.string(),
        });
        return schema.parse(responseObject);
    }


}

export default CardEntityService;