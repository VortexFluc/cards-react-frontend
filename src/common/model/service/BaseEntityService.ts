import BaseEntityDto from "../dto/BaseEntityDto.ts";
import BaseEntityApi from "../api/BaseEntityApi.ts";

abstract class BaseEntityService<E extends BaseEntityDto, A extends BaseEntityApi> {
    async findAll(): Promise<Array<E>> {
        const responseObjects = await this.getApi().findAll();
        return responseObjects.map(obj => this.mapToModel(obj));
    }
    async findById(id: number): Promise<E | null> {
        const responseObject = await this.getApi().findById(id);
        return this.mapToModel(responseObject);
    }

    abstract getApi(): A;
    abstract mapToModel(responseObject: object | null): E;
}

export default BaseEntityService;