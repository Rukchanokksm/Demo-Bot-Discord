import axios from "axios";
import { IPrice } from "../interface/Command";

export async function oliPrice95(): Promise<IPrice | null> {
    const url = "https://oil-price.bangchak.co.th/ApiOilPrice2/th";
    try {
        const res = await axios.get(url);
        if (res.status === 200) {
            const data = res.data;
            const isList = JSON.parse(data[0].OilList);
            for (const typeOli of isList) {
                if (typeOli.OilName === "แก๊สโซฮอล์ 95 S EVO") {
                    return typeOli;
                }
            }
        }
        return null;
    } catch (error) {
        if (error.respon) {
            console.log(error.response.status);
        }
        return null;
    }
}
