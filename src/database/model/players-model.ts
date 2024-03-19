import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class Player extends Model {
    static table = 'players'

    @field('nome')
    nome!: string

    @field('goleiro')
    goleiro!: boolean

    @field('isPayed')
    isPayed!: boolean

    @field('game_id')
    game_id!: string

    @field('skill')
    skill!: number

}