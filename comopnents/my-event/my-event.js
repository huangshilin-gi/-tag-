// comopnents/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    buttonEventClick(){
      this.triggerEvent('increment', {message: "点击了"});
    }
  }
})
