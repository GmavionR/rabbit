import Mock from "mockjs"
// 内存模拟数据
const arr = []
for (let i = 0; i < 10; i++) {
  arr.push({
    id: Mock.mock("@id"),
    name: Mock.mock("@cname"),
    place: Mock.mock("@county(true)"),
  })
}
const cateDate ={
    "code": "1",
    "msg": "操作成功",
    "result": {
      "id": "1005000",
      "name": "居家",
      "picture": null,
      "children": [
        {
          "id": "1005999003",
          "name": "居家生活用品",
          "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3463003",
              "name": "法国年份雅文邑700毫升",
              "desc": "经典产区限量单一老年份",
              "price": "1480.00",
              "picture": "https://yanxuan-item.nosdn.127.net/0a2fff6e0b55178fbbe99d97d94d20a8.png",
              "discount": null,
              "orderNum": 47
            },
            {
              "id": "3494006",
              "name": "梅乃宿梅酒720毫升",
              "desc": "小藏手工酿造，百年名酒",
              "price": "168.00",
              "picture": "https://yanxuan-item.nosdn.127.net/330913911087b44b0d817dd78233165f.png",
              "discount": null,
              "orderNum": 27
            },
            {
              "id": "1503001",
              "name": "全新升级，四川酸辣粉195克*6杯",
              "desc": "秘制酱包，配料丰富，爽弹滑口更巴适",
              "price": "69.00",
              "picture": "https://yanxuan-item.nosdn.127.net/54d1af8bc1e5e566b1455c8cbe3039aa.jpg",
              "discount": null,
              "orderNum": 1
            },
            {
              "id": "3388018",
              "name": "组合装牛油300克+清油110克*2+番茄110克*2",
              "desc": "川渝火锅魂，地道重庆味",
              "price": "32.80",
              "picture": "https://yanxuan-item.nosdn.127.net/e0c1ffa060d1fd8b81a720212d684945.png",
              "discount": null,
              "orderNum": 4
            },
            {
              "id": "1666009",
              "name": "多米尼加陈年朗姆酒700毫升",
              "desc": "陈年朗姆，香味芬芳",
              "price": "238.00",
              "picture": "https://yanxuan-item.nosdn.127.net/e3f387109491d92c47179d029d340b1f.jpg",
              "discount": null,
              "orderNum": 18
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "1008017",
          "name": "收纳",
          "picture": "https://yanxuan.nosdn.127.net/366989e4d730594e86fcd60b5ab19acc.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "1108008",
              "name": "爆款明星好物，抽屉式透明储物柜",
              "desc": "抽屉随意拉，东西随意拿，7款尺寸，随意叠加搭配",
              "price": "129.00",
              "picture": "https://yanxuan-item.nosdn.127.net/76a5304c9d7378a83e63554f3077d98b.png",
              "discount": null,
              "orderNum": 30
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "1017000",
          "name": "宠物食品",
          "picture": "https://yanxuan.nosdn.127.net/b42a85ef15f856081ea9f49e5f6893e2.png",
          "parentId": null,
          "parentName": null,
          "goods": [],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109243003",
          "name": "艺术藏品",
          "picture": "https://yanxuan.nosdn.127.net/9544b81aaa14c26a8038c2365ff3c2bc.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "4008506",
              "name": "平步青云财神家居摆件",
              "desc": "艺术家瞿广慈作品，手绘上色，礼盒包装",
              "price": "646.00",
              "picture": "https://yanxuan-item.nosdn.127.net/9d5d0083264344b5d85acde13570d025.jpg",
              "discount": null,
              "orderNum": 60
            },
            {
              "id": "4001877",
              "name": "朱炳仁·铜忠义千秋关公风水摆件",
              "desc": "众今礼敬关二爷，祈愿慈恩常荫庇",
              "price": "4280.00",
              "picture": "https://yanxuan-item.nosdn.127.net/cd9060820a1a52f296fa2502e56a5872.jpg",
              "discount": null,
              "orderNum": 19
            },
            {
              "id": "3990698",
              "name": "三重除臭，高效结团，混合猫砂2.5千克",
              "desc": "科学配比，四效合一",
              "price": "29.00",
              "picture": "https://yanxuan-item.nosdn.127.net/93b61911db2b55185aefd4b92bc52d26.png",
              "discount": null,
              "orderNum": 12
            },
            {
              "id": "3986658",
              "name": "快速吸水防回渗，宠物训导垫S码80片/袋",
              "desc": "漏斗般吸水，一垫多用更省心",
              "price": "35.80",
              "picture": "https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg",
              "discount": null,
              "orderNum": 59
            },
            {
              "id": "4001920",
              "name": "朱炳仁铜·猫型吉祥物装饰工艺摆件",
              "desc": "灵性十足的黑色招财猫，周而复始，财源不断",
              "price": "1888.00",
              "picture": "https://yanxuan-item.nosdn.127.net/6e38fc94a8fe72c9d139bc48ba6d9814.jpg",
              "discount": null,
              "orderNum": 16
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109248004",
          "name": "宠物用品",
          "picture": "https://yanxuan.nosdn.127.net/e766b09029ca00680d1e651b5cdc42bd.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3990698",
              "name": "三重除臭，高效结团，混合猫砂2.5千克",
              "desc": "科学配比，四效合一",
              "price": "29.00",
              "picture": "https://yanxuan-item.nosdn.127.net/93b61911db2b55185aefd4b92bc52d26.png",
              "discount": null,
              "orderNum": 12
            },
            {
              "id": "3986658",
              "name": "快速吸水防回渗，宠物训导垫S码80片/袋",
              "desc": "漏斗般吸水，一垫多用更省心",
              "price": "35.80",
              "picture": "https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg",
              "discount": null,
              "orderNum": 59
            },
            {
              "id": "1435025",
              "name": "还原猫咪排泄天性，进口膨润土砂6千克",
              "desc": "进口矿砂，强力除臭凝结",
              "price": "59.00",
              "picture": "https://yanxuan-item.nosdn.127.net/4c271a733bb1461d39162c0d807b1b02.png",
              "discount": null,
              "orderNum": 27
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109293000",
          "name": "家庭医疗",
          "picture": "https://yanxuan.nosdn.127.net/3f34039fa8c26e18e2f4fc96ed8cb6de.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3997974",
              "name": "入门首选，语音播报电子血压计",
              "desc": "全程语音指导，一键测量，监测心率，贴心守护爸妈健康",
              "price": "109.00",
              "picture": "https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png",
              "discount": null,
              "orderNum": 17
            },
            {
              "id": "3997406",
              "name": "支撑颈椎无负担，颈椎固定器",
              "desc": "0.23KG轻量化设计，支撑颈椎，低头族救星",
              "price": "299.00",
              "picture": "https://yanxuan-item.nosdn.127.net/0cdfd546f8675669b87716114ad5900a.jpg",
              "discount": null,
              "orderNum": 26
            },
            {
              "id": "3995913",
              "name": "家庭常备红外线耳温式体温计",
              "desc": "耳温式体温计测量更准确",
              "price": "139.00",
              "picture": "https://yanxuan-item.nosdn.127.net/cb09d868c280608a29c1d131dbc08061.jpg",
              "discount": null,
              "orderNum": 1
            },
            {
              "id": "3987635",
              "name": "语音播报，臂式测量血压计",
              "desc": "臂式测量更准确，给爸妈的礼物",
              "price": "219.00",
              "picture": "https://yanxuan-item.nosdn.127.net/a153def14233781de524ba184389855c.jpg",
              "discount": null,
              "orderNum": 2
            },
            {
              "id": "3988985",
              "name": "医用级缓鼻塞，可调式鼻腔清洗器",
              "desc": "医用级洗鼻器，深度清洁疏通鼻腔",
              "price": "39.00",
              "picture": "https://yanxuan-item.nosdn.127.net/3cfb2027c8644fe4a29d4809f6a3ad7e.png",
              "discount": null,
              "orderNum": 6
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109308000",
          "name": "中医保健",
          "picture": "https://yanxuan.nosdn.127.net/2bfba997fd031317caecc4f0bad17569.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3992367",
              "name": "七夕礼物·挺拔身姿，隐形内穿矫姿带",
              "desc": "众筹爆品回归，专注矫姿20年，轻松矫正身姿",
              "price": "149.00",
              "picture": "https://yanxuan-item.nosdn.127.net/7d1bc78607a08c088b2a7cdbe88c05af.png",
              "discount": null,
              "orderNum": 29
            },
            {
              "id": "3993481",
              "name": "带提手可站立炫彩硅胶热水袋",
              "desc": "杯型式设计，轻松注水防烫伤",
              "price": "35.00",
              "picture": "https://yanxuan-item.nosdn.127.net/0b120e1c37f312981f4f2242997cc862.png",
              "discount": null,
              "orderNum": 22
            },
            {
              "id": "3986121",
              "name": "艾灸理疗随时随地，灸疗装置8头/12头",
              "desc": "哪里不适灸哪里，全身都可灸",
              "price": "99.00",
              "picture": "https://yanxuan-item.nosdn.127.net/941abaee58a88cb104228fe2c4cfdeb1.png",
              "discount": null,
              "orderNum": 20
            },
            {
              "id": "3987204",
              "name": "真空拔罐器",
              "desc": "居家养生必备超简便拔罐套装",
              "price": "49.00",
              "picture": "https://yanxuan-item.nosdn.127.net/16222847be7d090eb538a944a7e0b01b.jpg",
              "discount": null,
              "orderNum": 53
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        }
      ]
    }
  }
const cateDate1 ={
    "code": "1",
    "msg": "操作成功",
    "result": { 
      "id": "1005002",
      "name": "美食",
      "picture": null,
      "children": [
        {
          "id": "1005999003",
          "name": "居家生活用品",
          "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3463003",
              "name": "法国年份雅文邑700毫升",
              "desc": "经典产区限量单一老年份",
              "price": "1480.00",
              "picture": "https://yanxuan-item.nosdn.127.net/0a2fff6e0b55178fbbe99d97d94d20a8.png",
              "discount": null,
              "orderNum": 47
            },
            {
              "id": "3494006",
              "name": "梅乃宿梅酒720毫升",
              "desc": "小藏手工酿造，百年名酒",
              "price": "168.00",
              "picture": "https://yanxuan-item.nosdn.127.net/330913911087b44b0d817dd78233165f.png",
              "discount": null,
              "orderNum": 27
            },
            {
              "id": "1503001",
              "name": "全新升级，四川酸辣粉195克*6杯",
              "desc": "秘制酱包，配料丰富，爽弹滑口更巴适",
              "price": "69.00",
              "picture": "https://yanxuan-item.nosdn.127.net/54d1af8bc1e5e566b1455c8cbe3039aa.jpg",
              "discount": null,
              "orderNum": 1
            },
            {
              "id": "3388018",
              "name": "组合装牛油300克+清油110克*2+番茄110克*2",
              "desc": "川渝火锅魂，地道重庆味",
              "price": "32.80",
              "picture": "https://yanxuan-item.nosdn.127.net/e0c1ffa060d1fd8b81a720212d684945.png",
              "discount": null,
              "orderNum": 4
            },
            {
              "id": "1666009",
              "name": "多米尼加陈年朗姆酒700毫升",
              "desc": "陈年朗姆，香味芬芳",
              "price": "238.00",
              "picture": "https://yanxuan-item.nosdn.127.net/e3f387109491d92c47179d029d340b1f.jpg",
              "discount": null,
              "orderNum": 18
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "1008017",
          "name": "收纳",
          "picture": "https://yanxuan.nosdn.127.net/366989e4d730594e86fcd60b5ab19acc.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "1108008",
              "name": "爆款明星好物，抽屉式透明储物柜",
              "desc": "抽屉随意拉，东西随意拿，7款尺寸，随意叠加搭配",
              "price": "129.00",
              "picture": "https://yanxuan-item.nosdn.127.net/76a5304c9d7378a83e63554f3077d98b.png",
              "discount": null,
              "orderNum": 30
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "1017000",
          "name": "宠物食品",
          "picture": "https://yanxuan.nosdn.127.net/b42a85ef15f856081ea9f49e5f6893e2.png",
          "parentId": null,
          "parentName": null,
          "goods": [],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109243003",
          "name": "艺术藏品",
          "picture": "https://yanxuan.nosdn.127.net/9544b81aaa14c26a8038c2365ff3c2bc.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "4008506",
              "name": "平步青云财神家居摆件",
              "desc": "艺术家瞿广慈作品，手绘上色，礼盒包装",
              "price": "646.00",
              "picture": "https://yanxuan-item.nosdn.127.net/9d5d0083264344b5d85acde13570d025.jpg",
              "discount": null,
              "orderNum": 60
            },
            {
              "id": "4001877",
              "name": "朱炳仁·铜忠义千秋关公风水摆件",
              "desc": "众今礼敬关二爷，祈愿慈恩常荫庇",
              "price": "4280.00",
              "picture": "https://yanxuan-item.nosdn.127.net/cd9060820a1a52f296fa2502e56a5872.jpg",
              "discount": null,
              "orderNum": 19
            },
            {
              "id": "3990698",
              "name": "三重除臭，高效结团，混合猫砂2.5千克",
              "desc": "科学配比，四效合一",
              "price": "29.00",
              "picture": "https://yanxuan-item.nosdn.127.net/93b61911db2b55185aefd4b92bc52d26.png",
              "discount": null,
              "orderNum": 12
            },
            {
              "id": "3986658",
              "name": "快速吸水防回渗，宠物训导垫S码80片/袋",
              "desc": "漏斗般吸水，一垫多用更省心",
              "price": "35.80",
              "picture": "https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg",
              "discount": null,
              "orderNum": 59
            },
            {
              "id": "4001920",
              "name": "朱炳仁铜·猫型吉祥物装饰工艺摆件",
              "desc": "灵性十足的黑色招财猫，周而复始，财源不断",
              "price": "1888.00",
              "picture": "https://yanxuan-item.nosdn.127.net/6e38fc94a8fe72c9d139bc48ba6d9814.jpg",
              "discount": null,
              "orderNum": 16
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109248004",
          "name": "宠物用品",
          "picture": "https://yanxuan.nosdn.127.net/e766b09029ca00680d1e651b5cdc42bd.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3990698",
              "name": "三重除臭，高效结团，混合猫砂2.5千克",
              "desc": "科学配比，四效合一",
              "price": "29.00",
              "picture": "https://yanxuan-item.nosdn.127.net/93b61911db2b55185aefd4b92bc52d26.png",
              "discount": null,
              "orderNum": 12
            },
            {
              "id": "3986658",
              "name": "快速吸水防回渗，宠物训导垫S码80片/袋",
              "desc": "漏斗般吸水，一垫多用更省心",
              "price": "35.80",
              "picture": "https://yanxuan-item.nosdn.127.net/17f5a18b4125733023cad09d6b7852db.jpg",
              "discount": null,
              "orderNum": 59
            },
            {
              "id": "1435025",
              "name": "还原猫咪排泄天性，进口膨润土砂6千克",
              "desc": "进口矿砂，强力除臭凝结",
              "price": "59.00",
              "picture": "https://yanxuan-item.nosdn.127.net/4c271a733bb1461d39162c0d807b1b02.png",
              "discount": null,
              "orderNum": 27
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109293000",
          "name": "家庭医疗",
          "picture": "https://yanxuan.nosdn.127.net/3f34039fa8c26e18e2f4fc96ed8cb6de.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3997974",
              "name": "入门首选，语音播报电子血压计",
              "desc": "全程语音指导，一键测量，监测心率，贴心守护爸妈健康",
              "price": "109.00",
              "picture": "https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png",
              "discount": null,
              "orderNum": 17
            },
            {
              "id": "3997406",
              "name": "支撑颈椎无负担，颈椎固定器",
              "desc": "0.23KG轻量化设计，支撑颈椎，低头族救星",
              "price": "299.00",
              "picture": "https://yanxuan-item.nosdn.127.net/0cdfd546f8675669b87716114ad5900a.jpg",
              "discount": null,
              "orderNum": 26
            },
            {
              "id": "3995913",
              "name": "家庭常备红外线耳温式体温计",
              "desc": "耳温式体温计测量更准确",
              "price": "139.00",
              "picture": "https://yanxuan-item.nosdn.127.net/cb09d868c280608a29c1d131dbc08061.jpg",
              "discount": null,
              "orderNum": 1
            },
            {
              "id": "3987635",
              "name": "语音播报，臂式测量血压计",
              "desc": "臂式测量更准确，给爸妈的礼物",
              "price": "219.00",
              "picture": "https://yanxuan-item.nosdn.127.net/a153def14233781de524ba184389855c.jpg",
              "discount": null,
              "orderNum": 2
            },
            {
              "id": "3988985",
              "name": "医用级缓鼻塞，可调式鼻腔清洗器",
              "desc": "医用级洗鼻器，深度清洁疏通鼻腔",
              "price": "39.00",
              "picture": "https://yanxuan-item.nosdn.127.net/3cfb2027c8644fe4a29d4809f6a3ad7e.png",
              "discount": null,
              "orderNum": 6
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        },
        {
          "id": "109308000",
          "name": "中医保健",
          "picture": "https://yanxuan.nosdn.127.net/2bfba997fd031317caecc4f0bad17569.png",
          "parentId": null,
          "parentName": null,
          "goods": [
            {
              "id": "3992367",
              "name": "七夕礼物·挺拔身姿，隐形内穿矫姿带",
              "desc": "众筹爆品回归，专注矫姿20年，轻松矫正身姿",
              "price": "149.00",
              "picture": "https://yanxuan-item.nosdn.127.net/7d1bc78607a08c088b2a7cdbe88c05af.png",
              "discount": null,
              "orderNum": 29
            },
            {
              "id": "3993481",
              "name": "带提手可站立炫彩硅胶热水袋",
              "desc": "杯型式设计，轻松注水防烫伤",
              "price": "35.00",
              "picture": "https://yanxuan-item.nosdn.127.net/0b120e1c37f312981f4f2242997cc862.png",
              "discount": null,
              "orderNum": 22
            },
            {
              "id": "3986121",
              "name": "艾灸理疗随时随地，灸疗装置8头/12头",
              "desc": "哪里不适灸哪里，全身都可灸",
              "price": "99.00",
              "picture": "https://yanxuan-item.nosdn.127.net/941abaee58a88cb104228fe2c4cfdeb1.png",
              "discount": null,
              "orderNum": 20
            },
            {
              "id": "3987204",
              "name": "真空拔罐器",
              "desc": "居家养生必备超简便拔罐套装",
              "price": "49.00",
              "picture": "https://yanxuan-item.nosdn.127.net/16222847be7d090eb538a944a7e0b01b.jpg",
              "discount": null,
              "orderNum": 53
            }
          ],
          "categories": null,
          "brands": null,
          "saleProperties": null
        }
      ]
    }
  }
export default [
    // 二级分类页
    {
        url: "/category/:id",
        method: "get",
        response: (query) => {
          let cate=query.id
          // if(cate === '1005000'){
          return cateDate
          // }else {
          // return cateDate1
          // }
        },
      },
  {
    url: "/list",
    method: "get",
    response: () => {
      return arr
    },
  },
  {
    url: "/del/:id",
    method: "delete",
    response: (req) => {
      const index = arr.findIndex((item) => item.id === req.query.id)
      if (index > -1) {
        arr.splice(index, 1)
        return { success: true }
      } else {
        return { success: false }
      }
    },
  },
  {
    url: "/edit/:id",
    method: "patch",
    response: ({ query, body }) => {
      const item = arr.find((item) => item.id === query.id)
      if (item) {
        item.name = body.name
        item.place = body.place
        return { success: true }
      } else {
        return { success: false }
      }
    },
  },
]
