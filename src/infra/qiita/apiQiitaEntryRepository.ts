import axios, { Axios } from 'axios'
import QiitaEntry from '@/domain/models/qiitaEntry'
import QiitaEntryRepository from '@/domain/repositories/qiitaEntryRepository'

export default class ApiQiitaEntryRepository implements QiitaEntryRepository {
  // curl -H 'accept: application/json' 'https://qiita.com/api/v2/items?page=1'
  // infra層ここでキータと接続しとってきたデータを使えるようにする
  async items(page: number): Promise<QiitaEntry[]> {
    return axios
      .get('https://qiita.com/api/v2/items', {
        params: {
          page,
        },
      })
      .then((res) => {
        return res.data.map((row: any) => {
          return new QiitaEntry({
            id: row.id,
            title: row.title,
            userName: row.user.name !== '' ? row.user.name : row.user.id,
            createdAt: new Date(row.created_at),
            renderedBody: row.rendered_body,
          })
        })
      })
  }
}
