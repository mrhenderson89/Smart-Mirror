export interface ShoppingList {
    id: string;
    items: ShoppingListItem[];
}

export interface ShoppingListItem {
    name: string;
    description: string;
    createdBy: string;
    dateCreated: Date;
}

export interface PlantSensorItem{
    deviceId: string;
    name: string;
    temperature: number;
    humidity: number;
    soilMoisture: number;
    lastTimestamp: Date;
}