import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface CarResponeModel extends ResponseModel{
    data:Car[]
}