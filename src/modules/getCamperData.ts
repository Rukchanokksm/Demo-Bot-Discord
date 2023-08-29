import CamperModel, { CamperInt } from "../database/models/CamperModel";

export async function getCamperData(id: string): Promise<CamperInt> {
    const camperData =
        (await CamperModel.findOne({ id })) ||
        (await CamperModel.create({
            discord: id,
            round: 1,
            day: 0,
            date: Date.now()
        }));
    return camperData;
}
