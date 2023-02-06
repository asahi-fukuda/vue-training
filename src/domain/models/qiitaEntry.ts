// QiitaEntry は、Qiitaに投稿された記事を表す。
// domain/model領域、データ構造
export default class QiitaEntry {
  id?: string
  title?: string
  userName?: string
  createdAt?: Date
  renderedBody?: string

  constructor(attr: Partial<QiitaEntry>) {
    Object.assign(this, attr)
  }
}
