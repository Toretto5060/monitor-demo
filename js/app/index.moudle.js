/**
 * Created by 石头 on 2017/10/5.
 */
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
// 大地图
    var myChart = echarts.init(document.getElementById('main1'));
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };

    var BJData = [
        [{name:''}, {name:'上海',value:95}],
        [{name:'上海'}, {name:'北京',value:95}],
        [{name:'上海'}, {name:'广州',value:90}],
        [{name:'上海'}, {name:'南宁',value:70}],
        [{name:'上海'}, {name:'拉萨',value:50}],
        [{name:'上海'}, {name:'长治',value:50}],
        [{name:'上海'}, {name:'乌鲁木齐',value:50}],
        [{name:'上海'}, {name:'秦皇岛',value:50}],
        [{name:'上海'}, {name:'西宁',value:50}],
        [{name:'上海'}, {name:'银川',value:150}]
    ];
    var SHData = [
    ];
    var GZData = [
    ];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    var color = ['#56BF8B', '#ffa022', '#46bee9','#fff'];
    var series = [];
    [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
        series.push({
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 2,
                    trailLength: 0.05,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
//                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'none'],
                symbolSize: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                },
                lineStyle: {
                    normal: {
                        color: color[3],
                        width: 0,
                        opacity: 0.1,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
//                id: item[0] + ' City',
//                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });

    option = {
        graphic: {
            type: 'text',
            left: 'center',
            style: {

            },
        },
        tooltip : {
            trigger: 'item',
        },
        position:function (p) {
            return[p[0]+20,p[1]-50];
        },
        formatter: function (params) {
            return params.name+':'+params.value[2] + '万笔';
        }
        ,
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            layoutCenter: ['50%', '50%'],
// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 1100,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(30,144,255,0.5)',//玻璃蓝//240,255,255,0.1
                    borderColor: '#D3D3D3',//浅灰色#D3D3D3
                },
                emphasis: {
                    areaColor: ''
                }
            }
        },
        series: series
    };
    myChart.setOption(option);


    // 流量预测
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        // backgroundColor: 'rgba(166, 255, 255, 0.8)',//背景色
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            bottom: '1%',
            textStyle:{    //图例文字的样式
                color:'#E2E2E2',
            },
            data: ['实际', '预期']
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        color: '#E2E2E2'
                    },
                },
                axisLine:{
                  lineStyle:{
                      color:'#E2E2E2',
                      width:'2'
                  }
                },
                data: ['8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '(万人)',
                min: 30,
                max: 80,
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        color: '#E2E2E2'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#E2E2E2',
                        width:'2'
                    }
                },
                splitLine: {show: false}
            }
        ],
        series: [
            {
                name: '预期',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#21C8F0'
                    }
                },
                data: [40, 60, 63, 72, 60]
            },
            {
                name: '实际',
                type: 'line',
                stack: '实际',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#56BF8B'
                    }
                },
                data: [35, 62]
            }
        ]
    };
    myChart.setOption(option);

// 渠道交易排行
    var myChart = echarts.init(document.getElementById('main2'));
    var colors=['#393939','#f5b031','#fad797','#59ccf7','#c3b4df'];
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data: ['40后', '50后', '60后', '1946-1949', '1950-1954', '1955-1959', '1960-1964', '1965-1969']
        // },
        series: [{
            name: '交易方式',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],


            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 35,
                name: '银联',
                // selected: true
            }, {
                value: 87,
                name: '手机银行'
            }, {
                value: 29,
                name: '柜面'
            }]
        }, {
            name: '交易方式',
            type: 'pie',
            radius: ['50%', '75%'],

            data: [ {
                value: 35,
                name: '银行卡'
            }, {
                value:40,
                name: '第三方'
            }, {
                value:60,
                name: '网银类',
            }]
        }]
    };
    myChart.setOption(option);

// TOPS交易量
    var myChart = echarts.init(document.getElementById('main3'));
    option = {
        //提示框组件
        tooltip: {
            //触发类型
            trigger: 'axis',
            //指示器
            axisPointer: {
                type: 'shadow'
            },
            //提示悬浮文字
            formatter: "{a} <br/>{b} : {c}"
        },
        grid: {
            left: '5%',
            right: '12%',
            bottom: '10%',
            top: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: '(千次)',
            nameLocation: 'end',
            min: 0,
            max: 200,
            position: 'bottom',
            splitLine: {show: false},
            //去掉，坐标尺度
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                fontSize: '16',
                formatter: '{value}',
            },
            axisLine:{
                lineStyle:{
                    color:'#E2E2E2',
                    width:'2'
                }
            },
        },
        yAxis: {
            type: 'category',
            nameLocation: 'start',
            axisTick: {
                show: false
            },

        axisLabel: {
            fontSize: '16'
        },
        axisLine:{
            lineStyle:{
                 color:'#E2E2E2',
                 width:'0'
                }
            },
            inverse: 'true', //排序
            data: ['ATM',
                '手机银行',
                '企业银行',
                '网上银行',
                '银联'
            ]
        },
        series: [{
            name: '访问量',
            type: 'bar',
            barWidth: 25,
            itemStyle: {
                normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function (params) {
                        var colorList = ['rgb(166,166,56)', 'rgb(135,170,102)', 'rgb(89,200,173)', 'rgb(76,179,210)', 'rgb(105,198,255)'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [130, 160, 200, 140, 180]
        }]
    };
    myChart.setOption(option);

    // 24小时交易
    var myChart = echarts.init(document.getElementById('main10'));
    option = {
        // backgroundColor: 'rgba(166, 255, 255, 0.8)',//背景色
        tooltip: {
            trigger: 'axis',
            textStyle:{
                align:'left'
            }
        },
        legend: {
            top: '1%',
            textStyle:{    //图例文字的样式
                color:'#E2E2E2',
            },
            data: ['一卡通登录', '信用卡登录','短信发送验证码','校验验证码','验证码对账汇款',
                '收款方信息维护','一网通用户登录','信用卡对账还款','理财账户校验密码']
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        color: '#E2E2E2'
                    },
                },
                axisLine:{
                    lineStyle:{
                        color:'#E2E2E2',
                        width:'2'
                    }
                },
                data: ['1:00', '2:00', '3:00', '4:00', '5:00','6:00', '7:00', '8:00', '9:00', '10:00','11:00', '12:00', '13:00', '14:00', '15:00','16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '24小时交易图(千次)',
                min: 10,
                max: 80,
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        color: '#E2E2E2'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#E2E2E2',
                        width:'2'
                    }
                },
                splitLine: {show: false}
            }
        ],
        series: [
            {
                name: '一卡通登录',
                symbol:'none',
                type: 'line',
                smooth: true,
                data: [40, 60, 63, 72, 60,69,23,54,31,62,64,25,80,65,22,36,72,36,56]
            },
            {
                name: '信用卡登录',
                symbol:'none',
                type: 'line',
                // stack: '实际',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#36C4E8'
                    }
                },
                data: [35, 55, 60, 68, 55,40, 60, 63, 72, 60,69,23,54,31,62,64,25,80,65]
            },
            {
                name: '短信发送验证码',
                symbol:'none',
                type: 'line',
                stack: '短信发送验证码',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#462635'
                    }
                },
                data: [68, 69, 30, 15, 20,35, 55, 60, 68, 55,40, 60, 63, 72, 60,69,23,54,31]
            },
            {
                name: '校验验证码',
                type: 'line',
                stack: '校验验证码',
                symbol:'none',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#E2E2E2'
                    }
                },
                data: [68, 55,40, 60, 20,68, 69, 30, 15, 20,35, 55, 60, 68, 55,40, 60, 63, 72]
            },
            {
                name: '验证码对账汇款',
                type: 'line',
                stack: '验证码对账汇款',
                symbol:'none',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                },
                data: [63, 70,32, 59, 35,32, 35, 37, 77, 80,65, 60, 32, 49, 55,22, 34, 59, 64]
            },
            {
                name: '收款方信息维护',
                type: 'line',
                stack: '收款方信息维护',
                symbol:'none',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#00FFFF'
                    }
                },
                data: [65, 40,60, 70, 33,72, 35, 62, 54, 63,65, 70, 73, 80, 60,53, 35, 64, 72]
            }
            ,
            {
                name: '一网通用户登录',
                type: 'line',
                stack: '一网通用户登录',
                symbol:'none',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                },
                data: [10, 15,23, 45, 32,65, 50, 43, 69, 32,35, 38, 40, 45, 56,58, 32, 35, 35]
            }
            ,
            {
                name: '信用卡对账还款',
                type: 'line',
                stack: '信用卡对账还款',
                symbol:'none',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#9900cc'
                    }
                },
                data: [56, 49,35, 40, 60,56, 32, 23, 65, 64,63, 62, 56, 58, 59,60, 68, 36, 65]
            }
            ,
            {
                name: '理财账户校验密码',
                type: 'line',
                stack: '理财账户校验密码',
                symbol:'none',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#FF00FF'
                    }
                },
                data: [13, 15,16, 56, 57,59, 63, 32, 56, 70,36, 45, 66, 32, 60,23, 56, 34, 25]
            }
        ]
    };
    myChart.setOption(option);

// 系统占比
    var myChart = echarts.init(document.getElementById('main7'));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        title: {
        },
        series: [{
            name: '系统占比',
            type: 'pie',
            radius: '60%',
            center: ['50%', '47%'],
            clockwise: false,
            data: [{
                value: 45,
                name: 'Linux'
            }, {
                value: 25,
                name: 'RS6000'
            }, {
                value: 15,
                name: 'AS400'
            }, {
                value: 8,
                name: 'Windows'
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#E2E2E2',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }],
        color: [
            '#00acee',
            '#52cdd5',
            '#79d9f1',
            '#a7e7ff',
            '#c8efff'
        ],
    };
    myChart.setOption(option);


// 内存使用占比
    var myChart = echarts.init(document.getElementById('main8'));
    option = {
        "title": {
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",
                textStyle: {
                    color: "#fff"
                }

            },
        },
        "grid": {
            "borderWidth": 0,
            "top": 110,
            "bottom": 95,
            textStyle: {
                color: "#fff"
            }
        },
        xAxis : [
            {
                type : 'category',
                axisLine:{
                    lineStyle:{
                        color:'#E2E2E2',
                        width:'2'
                    }
                },
                axisLabel: {
                    interval: 0,
                    fontSize: '16',
                    formatter: '{value}',
                },
                axisTick: {
                    show:false
                },
                data : ['RS6000','AS400','Windows','Linux'],
            }
        ],
        "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#E2E2E2',
                    width:'2'
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
                fontSize: '16'

            },
            "splitArea": {
                "show": false
            },

        }],
        "series": [{
            "name": "昨日",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                709,
                1917,
                2455,
                2610,
            ],
        },
            {
                "name": "今日",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(0,191,183,1)",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": [
                    327,
                    1776,
                    507,
                    1200,
                ]
            }, {
                "name": "总数",
                "type": "line",
                "stack": "总量",
                symbolSize:10,
                symbol:'',
                "data": [

                ]
            },
        ]
    }
    myChart.setOption(option);
// 磁盘使用占比
    var myChart = echarts.init(document.getElementById('main9'));
    option = {
        //提示框组件
        tooltip: {
            //触发类型
            trigger: 'axis',
            //指示器
            axisPointer: {
                type: 'shadow'
            },
            //提示悬浮文字
            formatter: "{a} <br/>{b} : {c}"
        },
        grid: {
            left: '5%',
            right: '12%',
            bottom: '10%',
            top: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: '(%)',
            nameLocation: 'end',
            min: 0,
            max: 200,
            position: 'bottom',
            splitLine: {show: false},
            //去掉，坐标尺度
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                fontSize: '16',
                formatter: '{value}',
            },
            axisLine:{
                lineStyle:{
                    color:'#E2E2E2',
                    width:'2'
                }
            },
        },
        yAxis: {
            type: 'category',
            name: '单位：%',
            nameLocation: 'start',
            axisTick: {
                show: false
            },

            axisLabel: {
                fontSize: '16'
            },
            axisLine:{
                lineStyle:{
                    color:'#E2E2E2',
                    width:'0'
                }
            },
            inverse: 'true', //排序
            data: ['RS600',
                'AS400',
                'Windows',
                'Linux',
            ]
        },
        series: [{
            name: '访问量',
            type: 'bar',
            barWidth: 28,
            itemStyle: {
                normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function (params) {
                        var colorList = ['rgb(253,140,87)', 'rgb(71,207,173)', 'rgb(236,135,191)', 'rgb(254,206,84)'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            data: [130, 160, 200, 140]
        }]
    };
    myChart.setOption(option);
    // cpu运行状态
    var myChart = echarts.init(document.getElementById('main6'));//定义折线图显示的位置对象
    option_inter = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
            }
        },
        legend: {
            data: ['誉达⑩号', '上证指数', '深证指数', '中小板指', '沪深300', '创业板指']
        },
        calculable: true,
        title: {
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        color:'#fff'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#E2E2E2',
                        width:'2'
                    }
                },
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '单位：%',
                max: 100,
                min: 0,
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        color:'#E2E2E2'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#E2E2E2',
                        width:'2'
                    }
                },
                boundaryGap: [0.2, 0.2],
                splitLine: {show: false}

            }
        ],
        series: [
            {
                name:'windows',
                type:'line',
                symbol:'none',//去除原点
                smooth:true,//曲线平滑
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                data:[]
            },
            {
                name:'Linux',
                symbol:'none',
                smooth:true,
                type:'line',
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                data:[]
            }
            ,
            {
                name:'AS400',
                symbol:'none',
                smooth:true,
                showSymbol: false,
                type:'line',
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                data:[]
            }
            ,
            {
                name:'RS6000',
                symbol:'none',
                smooth:true,
                showSymbol: false,
                type:'line',
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                data:[]
            }
        ]
    }
    setInterval(function (){
        axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
        var in_data = (Math.random() * 48 + 5).toFixed(1) - 0;
        var out_data = (Math.random() * 70 + 5).toFixed(1) - 0;
        var AS_data = (Math.random() * 80 + 5).toFixed(1) - 0;
        var RS_data = (Math.random() * 60 + 5).toFixed(1) - 0;

        var data_inter_out = option_inter.series[0].data;
        var data_inter_in = option_inter.series[1].data;
        var data_inter_AS = option_inter.series[2].data;
        var data_inter_RS = option_inter.series[3].data;
        if(data_inter_out.length<=20){
            data_inter_out.push(out_data);
            data_inter_in.push(in_data);
            data_inter_AS.push(AS_data);
            data_inter_RS.push(RS_data);
            option_inter.xAxis[0].data.push(axisData);
        }else{
            data_inter_out.shift();
            data_inter_out.push(out_data);
            data_inter_in.shift();
            data_inter_in.push(in_data);
            data_inter_AS.shift();
            data_inter_AS.push(AS_data);
            data_inter_RS.shift();
            data_inter_RS.push(RS_data);
            option_inter.xAxis[0].data.shift();
            option_inter.xAxis[0].data.push(axisData);
        }
        myChart.setOption(option_inter);
    },5000);
//    var data_inter_out = option_inter.series[0].data;
//    var data_inter_in = option_inter.series[1].data;
//    var data_inter_AS = option_inter.series[2].data;
//    var data_inter_RS = option_inter.series[3].data;
//    var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
//    var in_data = (Math.random() * 45 + 5).toFixed(1) - 0;
//    var out_data = (Math.random() * 45 + 5).toFixed(1) - 0;
//    var AS_data = (Math.random() * 50 + 5).toFixed(1) - 0;
//    var RS_data = (Math.random() * 50 + 5).toFixed(1) - 0;
//    data_inter_out.push(out_data);
//    data_inter_in.push(in_data);
//    data_inter_AS.push(AS_data);
//    data_inter_RS.push(RS_data);
//    option_inter.xAxis[0].data.push(axisData);
//    myChart.setOption(option_inter);





});
$(function () {
// 点击全屏
    function fullScreen(el) {
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
            wscript;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
            return;
        }
        if (typeof window.ActiveXObject != "undefined") {
            wscript = new ActiveXObject("WScript.Shell");
            if (wscript) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    $(document).keydown(function (event) {
        if (event.keyCode == 27) {
            $(".tabbox .tabs").css("display", "block")
        }
    })
    function exitFullScreen(el) {
        var el = document,
            cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
            wscript;
        if (typeof cfs != "undefined" && cfs) {
            cfs.call(el);
            return;
        }
        if (typeof window.ActiveXObject != "undefined") {
            wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    var btn = document.getElementById('btn');
    var content = document.getElementById('print');
    btn.onclick = function () {
        fullScreen(content);
    }
//    var quite = document.getElementById('quite');
//    quite.onclick = function(){
//        exitFullScreen();
//    }
//     全屏按钮
    $("#btn").hide();
    $(".header,#btn,.time").mousemove(function () {
        $("#btn").css("display", "block");
    })
    $(".header,#btn,.time").mouseout(function () {
        $("#btn").css("display", "none");
    })

})
// 获取当前时间日期
function showTime() {
    //创建Date对象
    var today = new Date();
    //分别取出年、月、日、时、分、秒
    var year = today.getFullYear();
    var month = today.getMonth() + 1-1;
    var day = today.getDate()-8;
    var hours = today.getHours()+7;
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var week = today.getDay();
    switch (week) {
        case 1:
            week = "一";
            break;
        case 2:
            week = "二";
            break;
        case 3:
            week = "三";
            break;
        case 4:
            week = "四";
            break;
        case 5:
            week = "二";
            break;
        case 6:
            week = "六";
            break;
        default:
            week = "日";
            break;
    }
    //如果是单个数，则前面补0
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //构建要输出的字符串
    var str = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds + " " + "星期" + week;
    //获取id=result的对象
    var obj = document.getElementById("nowTime");
    //将str的内容写入到id=result的<div>中去
    obj.innerHTML = str;
    //定时器
    setTimeout("showTime()", 1000);
}

// 交易额
var sum = 87131077;
$(function () {
    setInterval(function () {
        show_num1(sum)
    }, 3000);
});
function show_num1(n) {
    sum = sum + 163;
    // console.log(n);
    var it = $(".t_num1 i");
    var len = String(n).length;
    for (var i = 0; i < len; i++) {
        if (it.length <= i) {
            $(".t_num1").append("<i></i>");
        }
        var num = String(n).charAt(i);
        //根据数字图片的高度设置相应的值
        var y = -parseInt(num) * 58;
        var obj = $(".t_num1 i").eq(i);
        obj.animate({
            backgroundPosition: '(0 ' + String(y) + 'px)'
        }, 'slow', 'swing', function () {
        });
    }
    $("#cur_num").val(n);
}
