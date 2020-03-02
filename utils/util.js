const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getImg = () => {
  const imgList = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582781566180&di=a0ba0382a508be8c01687691369693ef&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp90995552.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582782722376&di=e1636e3066655a6751a3568997f2bcef&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20190821ac%2F344%2Fw750h394%2F20190821%2Fe530-icmpfxc0754495.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582782771093&di=5f364b4719c34b28c924075451a5d724&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F10%2F20190310092843_clusj.thumb.700_0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582782860190&di=4e3936aaa3f474e4c915e49ab60847f4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F11%2F20180411110044_vTZQY.thumb.400_0.jpeg'
  ]
  return imgList[Math.floor(Math.random() * imgList.length)]
}

export const request = (url, method, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApp().globalData.baseURL + url,
      method: method,
      data: data,
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}

module.exports = {
  formatTime: formatTime,
  getImg: getImg
}
