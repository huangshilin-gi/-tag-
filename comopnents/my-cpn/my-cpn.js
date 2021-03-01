// comopnents/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: "isolated"  //默认属性， 组件样式不被页面样式影响; apply-shared 页面样式可以影响; shared 相互影响
  },
  properties: {
    title: {
      type: String,
      value: '默认'
    }
  },

  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
