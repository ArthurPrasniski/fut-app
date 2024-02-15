import { appSchema } from '@nozbe/watermelondb'
import { PlayerSchema } from './players-schema'
import { GameSchema } from './games-schema'

export const Schemas = appSchema({
  version: 1,
  tables: [GameSchema, PlayerSchema]
})