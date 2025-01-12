import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const contactsNumber = contacts.length;
        return contactsNumber;
} catch (error) {
    console.error(`Помилка зчитування файлу:`, error);
    throw error;
}
};

console.log(await countContacts());
