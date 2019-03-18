import Mock from 'mockjs';

Mock.mock(
  '/api/login/account',{
    'code': 1,
    'data':{
      'username':'zisu',
    },
  }
);