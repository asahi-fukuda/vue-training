import QiitaEntry from '@/domain/models/qiitaEntry'

// QiitaEntryRepository は、Qiitaの記事を扱うためのリポジトリ。
// domain/repository層 qiitaEntryがどんなものかを決めている
export default interface QiitaEntryRepository {
  items(page: number): Promise<QiitaEntry[]>
}
