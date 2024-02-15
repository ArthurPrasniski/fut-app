import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class Game extends Model {
    static table = 'games'

    @field('nome')
    nome!: string

    @field('data')
    data!: string
}
