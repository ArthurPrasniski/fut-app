import {Database} from '@nozbe/watermelondb' 
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import {Schemas} from './schema'
import {Game} from './model/games-model'
import {Player} from './model/players-model'

const adapter = new SQLiteAdapter({
  schema: Schemas
})

export const database = new Database({
    adapter,
    modelClasses: [Game, Player],
})




