import urls from './urls'
import Qs from 'qs'

const globalUrl = 'https://sell.shidiankeji.com'

class API {
  constructor(baseProjectUrl) {
    this.baseProjectUrl = baseProjectUrl
  }

  async resolve(
    type,
    data = {},
    options = {
      data: {}
    }
  ) {
    let [url, method, requestType] = urls(type, options)

    if (!url.includes('http')) {
      url = this.baseProjectUrl + url
    }

    let contentType = ''

    if (requestType === 1) {
      contentType = 'application/x-www-form-urlencoded;charset=UTF-8'
    } else if (requestType === 2) {
      contentType = 'application/json'
    } else {
      contentType = 'multipart/form-data'
    }

    options.data = options.data || {}

    data = { ...options.data, ...data }

    // 删除无用的键值
    for (const key in data) {
      if (data[key] === undefined || data[key] === null) {
        delete data[key]
      }
    }

    options = {
      method,
      headers: {
        'Content-Type': contentType
      },
      ...options
    }

    // get请求方式，直接在url中拼上查询字符串
    if (method.toLowerCase().trim() === 'get') {
      if (data) {
        url += '?' + Qs.stringify(data)
      }
    } else if (method.toLowerCase().trim() === 'post') {
      // post、put、delete请求方式，解析body
      if (requestType === 1) {
        options.body = Qs.stringify(data)
      } else if (requestType === 2) {
        options.body = JSON.stringify(data)
      }
    } else {
      options.body = JSON.stringify(data)
    }

    const res = await fetch(url, options)

    try {
      // 错误的处理，根据实际情况进行处理
      if (res.status === 500) {
        console.error('500: 服务器错误')
        throw res.status
      } else if (res.status === 404) {
        console.error('404: 请求资源不存在')
        throw res.status
      } else if (res.status === 400) {
        console.error('400: 参数错误')
        throw res.status
      }
      // 响应正常：200
      const resData = await res.json()
      if (Number(resData.code) === 1) {
        // 成功返回的数据结构：
        // {"code": 1, "data": {}, "message":"操作成功！"}
        if (resData.data.constructor === String) {
          return JSON.parse(resData.data).data
        } else {
          return resData.data
        }
      } else {
        // 失败返回的数据结构：
        // {"code": 0, "data": {}, "message":"操作失败！"}
        throw resData.msg
      }
    } catch (e) {
      // 失败的处理
      console.error(e)
    }
  }

  // 上传图片
  async upload(file) {
    // 获取签名
    const sign = await api.resolve('token')
    const fileType = file.type.split('/').pop()
    const formData = new FormData()
    formData.append('name', 'file')
    formData.append('key', `imgs/${file.lastModified}.${fileType}`)
    formData.append('token', sign.token)
    formData.append('file', file)

    await fetch('https://up.qiniup.com/', {
      method: 'POST',
      body: formData
    })
    return `https://qiniu.shidiankeji.com/imgs/${file.lastModified}.${fileType}`
  }
}

export const api = new API(globalUrl)
