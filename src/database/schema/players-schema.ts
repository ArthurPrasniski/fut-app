import {tableSchema} from '@nozbe/watermelondb'

export const PlayerSchema = tableSchema({
    name: 'players',
    columns: [
        { name: 'nome', type: 'string' },
        { name: 'goleiro', type: 'boolean' },
        { name: 'isPayed', type: 'boolean' },
        { name: 'game_id', type: 'string', isIndexed: true },
    ],
})