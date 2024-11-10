import BaseEntityDto from "../../../common/model/dto/BaseEntityDto.ts";

class Card extends BaseEntityDto {
    public text?: string;
    public translation?: string;

    constructor(
        id?: number,
        createdAt?: Date,
        updatedAt?: Date,
        text?: string,
        translation?: string,
    ) {
        super(id, createdAt, updatedAt);
        this.text = text;
        this.translation = translation;
    }
}

export default Card;