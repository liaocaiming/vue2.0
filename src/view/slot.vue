<div id="test">
  <h1>{{name}}</h1>
</div>
<script>
  var test = document.getElementById('test')
  import slot from '../components/slot.vue'
  export default {
    methods: {
      handder() {
        console.log(66666)
      }
    },
    created() {
      console.log(9999)
    },
    // render(createElement) {
    //   let list = []
    //   list.push(createElement(slot, { props: { name: 'liaocaiming', age: 18, sex: '男' }, on: { click: this.handder } }))
    //   return createElement(
    //     'div',
    //     {
    //       // 'class': {
    //       //   'app-body' : true
    //       // }
    //       'class': 'app-body',
    //       // on: {
    //       //   click: this.handder
    //       // }
    //     },
    //     list
    //   )
    // },
    // render: function (createElement) {
    //   return createElement(
    //     'div',
    //     {
    //       'class': 'app',
    //       style: {
    //         color: 'red',
    //         fontSize: '30px'
    //       },
    //       props: {
    //         name: '大保健'
    //       }
    //     },
    //     Array.apply(null, { length: 20 }).map(function () {
    //       return createElement('p', 'hi')
    //     })
    //   )
    // }
    data() {
      return {
        items: [
          { name: '大保健' },
          { name: '小包间' }
        ]
      }
    },
    render (createElement) {
      if (this.items.length) {
        return createElement('ul', this.items.map((value) => {
          return createElement('li', [value.name])
        }))
      } else {
        return createElement('div', '没有item')
      }
    }
  }

</script>