import { LightningElement, api } from 'lwc';

export default class DatatableWithInlineEdit extends LightningElement {
    @api records = [];

    @api fieldColumns = [
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Inicio', fieldName: 'Inicio_Atividade__c', type: 'date', editable: true },
        { label: 'Termino', fieldName: 'Termino_Atividade__c', type: 'date', editable: true },
        { label: 'Local da Atividade', fieldName: 'Local_da_Atividade__c', type: 'text', editable: true },
        { label: 'Total de Quilômetros', fieldName: 'Total_de_Km__c', type: 'number', editable: true },
        { label: 'Modalidade', fieldName: 'Modalidade__c', type: 'picklist', editable: true },
    ];    
}
