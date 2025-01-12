import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {const existingContacts = await readContacts();
        return existingContacts;
    } catch (error) {
    console.error(`Помилка зчитування файлу:`, error);
    throw error;        
    }
 };

console.log(await getAllContacts());


