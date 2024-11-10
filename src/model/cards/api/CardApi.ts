import BaseEntityApi from "../../../common/model/api/BaseEntityApi.ts";

class CardApi extends BaseEntityApi {
    getUrl(): string {
        return "http://127.0.0.1:8080/cards";
    }
}

export default CardApi;