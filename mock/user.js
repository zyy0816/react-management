import Mock from 'mockjs';

Mock.mock(
  '/api/login/account',{
    'code': 1,
    'data':{
      'username':'zisu',
      'authority':[{
        'icon': null,
        'id': 126,
        'key': "test",
        'name': "客户管理",
        'path': null,
        'type': "MENU",
      }]
    },
  }
);