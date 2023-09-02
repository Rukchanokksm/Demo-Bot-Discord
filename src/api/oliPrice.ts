interface IPrice {
    PriceToday: number;
    OilName: string;
}

export async function oliPrice(): Promise<IPrice[] | null> {
    try {
        const res = await fetch(
            "https://oil-price.bangchak.co.th/ApiOilPrice2/th"
        );
        if (!res.ok) {
            throw new Error(`${res.status}`);
        }
        const jsonData = await res.json();

        if (!Array.isArray(jsonData)) {
            throw new Error("API response is not an array");
        }

        const oilList = jsonData[0].OilList; // Assuming OilList is in the first object of the array

        if (!Array.isArray(oilList)) {
            throw new Error("OilList is not an array");
        }

        const prices: IPrice[] = oilList.map((item: IPrice) => ({
            PriceToday: item.PriceToday,
            OilName: item.OilName
        }));

        return prices;
    } catch (err) {
        console.error(err);
        return null;
    }
}
