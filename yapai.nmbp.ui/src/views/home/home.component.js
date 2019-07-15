/* jshint esversion:6 */

import echart from 'echarts';
import { jsonApi } from '../../api/user';
export default {
  name: 'home',
  data() {
    return {
      name: this.$route.params.username,
      list: [
        { title: '问题数', type: 'questions', total: 11, icon: 'el-icon-question' },
        { title: '文章数', type: 'articles', total: 12, icon: 'el-icon-collection' },
        { title: '专栏数', type: 'columns', total: 14, icon: 'el-icon-s-order' },
        { title: '用户数', type: 'users', total: 55, icon: 'el-icon-s-custom' }
      ],
      message: ''
    };
  },
  methods: {
    charts() {
      var myChart = echarts.init(document.getElementById('echarts'));
      myChart.showLoading();
      jsonApi({}).then(data => {
        myChart.hideLoading();
        let option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },

          series: [
            {
              type: 'tree',

              data: [data],

              left: '2%',
              right: '2%',
              top: '20%',
              bottom: '8%',

              symbol: 'emptyCircle',

              orient: 'BT',

              expandAndCollapse: true,

              label: {
                position: 'bottom',
                rotate: 90,
                verticalAlign: 'middle',
                align: 'right'
              },

              leaves: {
                label: {
                  position: 'top',
                  rotate: 90,
                  verticalAlign: 'middle',
                  align: 'left'
                }
              },

              animationDurationUpdate: 750
            }
          ]
        };
        myChart.setOption(option);
      });
    }
  },
  mounted() {
    this.charts();
  }
};
