import { request } from './request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid // iid: iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}