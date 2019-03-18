export function getUrl() {
  let location = window.location,
    hostname = location.hostname;
  if (hostname == 'localhost' || hostname == '127.0.0.1') {   //本地启动接口地址
    return ''
  } else if (hostname == 'XXX.com') {
    return 'https://test-smartlife-api.zje.com'
  }
}
