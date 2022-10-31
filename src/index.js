// import _ from 'lodash';
//环境变量process.env.NODE_ENV详解  https://blog.csdn.net/qq_30351747/article/details/124668658

// https://juejin.cn/post/7155817544840904712#heading-3
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = '1233333';

  //$start
  // console.log('qhqhhq', SOMETHING);
  //$end

  if (process.env.NODE_ENV == 'development') {
    console.log('qhqhhq development');
  }

  if (process.env.NODE_ENV == 'production') {
    console.log('qhqhhq production');
  }

  return element;
}

document.body.appendChild(component());
