import { LightningElement, api, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

const NAME_FIELD = 'Treino__c.Name';
const LOCATION_LATITUDE_FIELD = 'Treino__c.Localizacao__Latitude__s';
const LOCATION_LONGITUDE_FIELD = 'Treino__c.Localizacao__Longitude__s';

const trainFields = [
    NAME_FIELD,
    LOCATION_LATITUDE_FIELD,
    LOCATION_LONGITUDE_FIELD
];

export default class TrainMap extends LightningElement {
    @api recordId;    
    
    name;

    mapMarkers = [];
    
    @wire(getRecord, { recordId: '$recordId', fields: trainFields})
    loadTrain({ error, data}) {
        if (error) {
            console.log("Wire error.");
            //implement error handling
        } else if (data) {
            this.name = getFieldValue(data, NAME_FIELD);
            const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
            const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);

            this.mapMarkers = [{
                location: { Latitude, Longitude },
                title: this.name,
                desciption: `Coords: ${Latitude}, ${Longitude}`
            }];
        }        
    }
    get cardTitle() {
        return (this.name) ? `${this.name}'s location` : 'Train location';
    } 

}