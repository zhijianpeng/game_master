const Mock = require("mockjs");
let data = Mock.mock({
    "data|100": [ //生成100条数据 数组
        {
            "shopId|+1": 1,//生成商品id，自增1
            "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
            "shopName": "@cname",//生成商品名 ， 都是中国人的名字
            "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "shopAddress": "@county(true)", //随机生成地址
            "shopStar|1-5": "★", //随机生成1-5个星星
            "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
            "shopLogo": "@Image('100x40','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
            "food|7": [ //每个商品中再随机生成七个food
                {
                    "foodName": "@cname", //food的名字
                    "foodPic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
                    "foodPrice|1-100": 20,//生成1-100的随机数
                    "aname|14": [
                        {
                            "aname": "@cname",
                            "aprice|30-60": 20
                        }
                    ]
                }
            ]
        }
    ]
})


let sideBarData = Mock.mock(
    [
        {
            "main_name": "数据统计",
            "bgurl":"../../assets/img/leftBar/shujutongji.svg",
            "item_list": [
                {
                    "id": 1,
                    "item_name": "联运游戏数据",
                    "bgurl":"../../assets/img/leftBar/lianyunyouxishuju.svg",
                    "item_list": [
                        {"real_name": "联运用户统计",'url': 'yonghutongji',"index":"a"},{ "real_name": "联运留存分析", 'url': 'liucunfenxi' ,"index":"b"}, { "real_name": "联运提现统计", 'url': 'tixiantongji', "index":"c"}, { "real_name": "联运实时安装", 'url': 'shishianzhuang', "index":"d" }, { "real_name": "联运时段数据", 'url': 'shiduanshuju' , "index":"e"}]
                },
                {
                    "id": 1,
                    "item_name": "自研游戏数据",
                    "bgurl":"../../assets/img/leftBar/ziyanyouxishuju.svg",
                    "item_list": [{ "real_name": "用户统计", 'url': 'yonghutongji2' , "index":"f"}, { "real_name": "留存分析", 'url': 'liucunfenxi2' , "index":"g"}, { "real_name": "提现统计", 'url': 'tixiantongji2' , "index":"h"}, { "real_name": "实时安装", 'url': 'shishianzhuang2' , "index":"i"}, { "real_name": "时段数据" ,'url':'shiduanshuju2', "index":"j"}]
                }
            ]
        },
        {
            "id": 1,
            "main_name": "系统管理",
            "bgurl":"../../assets/img/leftBar/xitongguanli.svg",
            "item_list": [
                { "real_name": "渠道管理" ,'url':'qudaoguanli', "index":"k"},
                { "real_name": "游戏管理" ,'url':'youxiguanli', "index":"l"},
                { "real_name": "媒体管理" ,'url':'meitiguanli', "index":"m"},
                { "real_name": "游戏密钥管理" ,'url':'miyaoguanli', "index":"n"}
            ]
        },
        {
            "id": 1,
            "main_name": "游戏数据分析",
            "bgurl":"../../assets/img/leftBar/youxishujufenxi.svg",
            "item_list": [
                { "real_name": "激励视频广告" ,'url':'jiliguanggao', "index":"o"},
                { "real_name": "用户行为数据",'url':'xinweishuju' , "index":"p"},
            ]
        },
        {
            "id": 1,
            "main_name": "投放数据分析",
            "bgurl":"../../assets/img/leftBar/toufangshujufenxi.svg",
            "item_list": [
                { "real_name": "投放数据",'url':'toufangshuju' , "index":"q"},
                { "real_name": "安装走势分析" ,'url':'zoushifenxi', "index":"r"},
            ]
        },
        {
            "id": 1,
            "main_name": "权限管理",
            "bgurl":"../../assets/img/leftBar/quanxianguanli.svg",
            "item_list": [
                { "real_name": "用户管理" ,'url':'yonghuguanli', "index":"s"},
                { "real_name": "角色管理" ,'url':'jueseguanli', "index":"y"},
                { "real_name": "节点管理" ,'url':'jiedianguanli', "index":"u"}
            ]
        },
        {
            "id": 1,
            "main_name": "日志查询管理",
            "bgurl":"../../assets/img/leftBar/rizhichaxunguanli.svg",
            "item_list": [
                { "real_name": "第三方回传日志查询" ,'url':'rizichaxun', "index":"v"},
                { "real_name": "设备渠道记录" ,'url':'qudaojilu', "index":"w"},
                { "real_name": "ios IP渠道日志查询" ,'url':'ioschaxun', "index":"x"},
                { "real_name": "今日头条日志查询" ,'url':'toutiaochaxun', "index":"y"},
                { "real_name": "快手日志查询" ,'url':'kuaishouchaxun', "index":"z"}
            ]
        },
    ]
)

let tixiantongji_data = Mock.mock(
    {
        top_title_list:['联运游戏数据','联运提现统计'],
        select_data: {
            hasInput: false,
            select_list: [
                {
                    select_name: '渠道类型',
                    choose_list: ["全部", "7477", "传趣", "其他"]
                },
                {
                    select_name: '推广活动',
                    choose_list: ["全部", "7477", "传趣", "其他"]
                },
                {
                    select_name: '性别',
                    choose_list: ["男", "女", "中性", "其他"]
                },
            ]
        },
        table_data: {
            table_title:"《天天打弹珠》",
            info_num_list:[777],
            title_list: [
                {
                    titleName: "日期",
                    "data1|5":["100"]
                },
                {
                    titleName: "注册数",
                    "data1|5":["200"]
                },
                {
                    titleName: "活跃数",
                    "data1|5":["300"]
                },
                {
                    titleName: "提现人数",
                    "data1|5":["400"]
                },
                {
                    titleName: "(当天注册的)提现金额",
                    "data1|5":["500"]
                },
                {
                    titleName: "总提现金额",
                    "data1|5":["600"]
                },
                {
                    titleName: "1档提现人数/比例",
                    "data1|5":["700"]
                },
                {
                    titleName: "2档提现人数/比例",
                    "data1|5":["800"]
                },
                {
                    titleName: "3档提现人数/比例",
                    "data1|5":["900"]
                },
                {
                    titleName: "4档提现人数/比例",
                    "data1|5":["1-100"]
                },
                {
                    titleName: "5档提现人数/比例",
                    "data1|5":["1-300"]
                },
            ]
        }
    }
)

Mock.mock(/goods\/goodAll/, 'post', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return data
})

Mock.mock(/left/, 'post', () => {
    return sideBarData;
})

Mock.mock(/tixiantongji/, 'post', () => {
    return tixiantongji_data
})