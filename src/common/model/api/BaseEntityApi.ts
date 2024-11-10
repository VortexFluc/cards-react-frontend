import axios, {AxiosInstance, AxiosResponse} from "axios";

abstract class BaseEntityApi {
    public client: AxiosInstance = axios.create({
        baseURL: this.getUrl(),
    })

    abstract getUrl(): string;

    public async findAll(): Promise<object[]> {
        try {
            const response: AxiosResponse<object[]> = await this.client.get<object[]>('');
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public async findById(id: number): Promise<object | null> {
        try {
            const response: AxiosResponse<object> = await this.client.get<object>(`/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default BaseEntityApi;