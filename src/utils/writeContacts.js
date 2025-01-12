import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    const data = JSON.stringify(updatedContacts, null, 2);

    try {await fs.writeFile(PATH_DB, data,'utf-8');
        console.log('дані успішно записані у файл');
  } catch (error) {
        console.error(`Помилка запису у файл:`, error);
        throw error;
  }};






