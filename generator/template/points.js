const Point = require('@guanghe-pub/onion-points/CreatePointFile').default

/**
 * localUrl (必填) 埋点文件存放路径，src 文件夹下
 * query (必填) 埋点数据查询条件
 * proEnv (必填) 项目环境 vue/react，默认值是 vue
 */
const options = {
  localUrl: 'views/sprint-course',
  query: {
    eventcategory: 'learn',
    status: 2
  },
  proEnv: 'vue'
}

const point = new Point(options)
point.init()
