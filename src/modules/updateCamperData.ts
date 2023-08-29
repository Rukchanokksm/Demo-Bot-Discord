import { CamperInt } from "../database/models/CamperModel";

export const updateCamperdata = async (camper: CamperInt) => {
    camper.day++;
    if (camper.day > 100) {
        camper.day = 1;
        camper.round++;
    }
    camper.timestamp = Date.now();
    await camper.save();
    return camper;
};
