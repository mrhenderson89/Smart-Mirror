import { ICard } from './interfaces/ICard';
import { CardConfigurationModel } from './models/card-configuration.model';
import { ClockCard } from './models/ClockCard';
import { QuoteCard } from './models/QuoteCard';
import { SportScoreCard } from './models/SportScoreCard';
import { WeatherCard } from './models/WeatherCard';

// Configurations
import * as cardConfigurationDevice_home from '../../src/assets/configuration/dashboardConfig_home.json';

export class ConfigurationLoader {

    static loadConfiguration(deviceId: string): CardConfigurationModel[] {

        let cardConfigurationData: any;
        if (deviceId === 'home') {
            cardConfigurationData = cardConfigurationDevice_home;
        } 

        const result: CardConfigurationModel[] = [];

        ConfigurationLoader.validate(cardConfigurationData);

        const pages = cardConfigurationData.default.pages;

        for (let i = 0; i < pages.length; i++) {
            const newPage = new CardConfigurationModel(pages[i].name, pages[i].icon, pages[i].index);

            // add widgets
            const cards = pages[i].cards;
            cards.forEach(card => {
                // create card based on type
                let cardInstance: ICard;
                try {
                    switch (card.type) {
                        case 'clock':
                            cardInstance = ClockCard.parser(card);
                            break;
                            case 'quote':
                            cardInstance = QuoteCard.parser(card);
                            break;
                            case 'sportsScore':
                            cardInstance = SportScoreCard.parser(card);
                            break;
                            case 'weather':
                            cardInstance = WeatherCard.parser(card);
                            break;
                        default:
                            throw Error('Could not match card type ' + card.type);
                    }
                } catch (error) {
                    console.error('Could not parse card for page ' + i + '. Error: ' + error);
                    return;
                }

                newPage.addCard(cardInstance);
            });
            result.push(newPage);
        }

        return result;
    }

    private static validate(cardConfigurationData) {
        if (!cardConfigurationData) {
            throw Error('Could not load card configuration data.');
        }

        if (!cardConfigurationData.default.pages) {
            throw Error('Could not get pages attribute from configuration data.');
        }

        const pages = cardConfigurationData.default.pages as any[];

        if (pages.length === 0) {
            throw Error('Card configuration data does not contain any pages');
        }
    }
}