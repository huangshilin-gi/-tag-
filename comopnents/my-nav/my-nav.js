// comopnents/my-nav/my-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal){ //监听
        console.log(newVal, oldVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNavTitleClick(event){
      const s_index = event.currentTarget.dataset.index;
      this.setData({
        selectedIndex: s_index
      })
      this.triggerEvent("navSelected", {index: s_index});
    }
  },

  observers: {
    selectedIndex: function(newVal){
      console.log(newVal);
    }
  },


  /**
   * 组件中监听生命周期函数
   */
  pageLifetimes: {
    show(){
      console.log('组件所在页面显示');
    },
    hide(){
      console.log('组件所在页面隐藏');
    },
    resize(){
      console.log('页面尺寸发生改变');
    }
  },

  lifetimes: {
    created(){
      console.log('组件初始化，被创建');
    },
    attached(){
      console.log('组件被添加');
    },
    ready(){
      console.log('组件被渲染出来');
    },
    move(){
      console.log('组件被移动到另外一个节点');
    },
    detached(){
      console.log('组件被移除');
    }
  }
})
