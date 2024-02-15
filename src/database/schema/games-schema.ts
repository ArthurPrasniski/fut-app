import { tableSchema } from '@nozbe/watermelondb'

export const GameSchema = tableSchema({
    name: 'games',
    columns: [
        { name: 'nome', type: 'string' },
        { name: 'data', type: 'string' },
    ],
})