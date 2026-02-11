import { DatabaseInfoDTO } from "./database-info-dto.interface";

export interface StatusDTO {
    updatedAt: Date,
    database: DatabaseInfoDTO
}