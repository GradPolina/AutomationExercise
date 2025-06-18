import { v4 as uuidv4 } from 'uuid';

export function generateUniqueEmail() {
    return `user_${uuidv4()}@example.com`;
}