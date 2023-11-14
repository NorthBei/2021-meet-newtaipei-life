import { DistrictColor, DistrictType } from './types';

export enum EventStatus {
  Apply = 'apply',
  SoldOut = 'soldout',
  Finished = 'finished'
}

export enum EventCategoryValue {
  Offline = 'offline',
  Online = 'online'
}

export enum EventTimeType {
  Sun = 'sun',
  Moon = 'moon'
}

export type Event = {
  home: {
    image: string;
    theme: string[];
    time: string | null;
  };
  meta: {
    path: string;
    title: string;
    description: string;
    image: string;
    keywords: string;
  };
  category: {
    value: EventCategoryValue;
    text: string;
  };
  banners: string[];
  district: {
    name: string;
    type: DistrictType;
    color: DistrictColor;
  };
  title: string;
  tags: string[];
  type: string;
  price: string;
  peopleLimit: string;
  ageLimit: string;
  date: string;
  day: string;
  time: string;
  endDate: string;
  timeType: EventTimeType;
  timeZone: string;
  during: string;
  location: string;
  guide: Guide[];
  eventIntro: {
    paragraphs: string[];
    notice: string[];
  };
  communityIntro: {
    teams: string[]; // team's name list
  };
  applyUrl: string;
  status: EventStatus;
};

type Guide = {
  avatar: string;
  title: string;
  intro: string;
};

const events: Event[] = [
  {
    home: {
      image: 'taishan_cover.jpg',
      theme: ['山的社區', '手作DIY'],
      time: '下晡'
    },
    meta: {
      path: '/online/taishan',
      title: '從砍竹子到編成竹扇！親手編織自己的秋日涼風',
      description:
        '大科竹編的農俗文化，已沒落多時，為了讓農俗文化技藝傳承，能夠風華再現，阿員姐和團隊很努力的重拾早期居民的生活點點滴滴。從進竹林砍竹子、削竹子、到一條一條的編織成竹器、竹扇，親自體驗過才明白前人的智慧以及更懂得珍惜日常生活物件。',
      image: 'taishan_fb.jpg',
      keywords: '在地記憶, 竹編, 自然取材, 泰山, 大科社區, 蔡黃阿員'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'taishan_01.jpg',
      'taishan_02.jpg',
      'taishan_03.jpg',
      'taishan_04.jpg',
      'taishan_05.jpg',
      'taishan_06.jpg',
      'taishan_07.jpg',
      'taishan_08.jpg',
      'taishan_09.jpg',
      'taishan_10.jpg'
    ],
    district: {
      name: '泰山',
      type: DistrictType.Mountain,
      color: DistrictColor.Green
    },
    title: '從砍竹子到編成竹扇！親手編織自己的秋日涼風',
    tags: ['在地技藝', '竹編', '自然取材'],
    type: '線上直播、部分預錄影片',
    price: '每人 $ 200 元（適用信用卡五倍券）',
    peopleLimit: '20',
    ageLimit: '適合12歲以上',
    date: '2021/11/07',
    day: '日',
    time: '16:00~18:00',
    endDate: '11/02 12:00',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '2小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'taishan_guide.jpg',
        title: '蔡黃阿員｜泰山最會做竹編的阿嬤',
        intro:
          '在大科社區推展傳統技藝「竹編」已擁有16年之久，大多深耕於自身社區，配合社區照顧關懷據點或是社區活動，帶領長者或居民一同學習。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '大科竹編的農俗文化，已沒落多時，為了讓農俗文化技藝傳承，能夠風華再現，阿員姐和團隊很努力的重拾早期居民的生活點點滴滴。',
        '從進竹林砍竹子、削竹子、到一條一條的編織成竹器、竹扇，親自體驗過才明白前人的智慧以及更懂得珍惜日常生活物件。',
        '待在家一起走進竹林，收到來自泰山大科社區的竹子材料包，透過視訊跟著阿員姐，一起親手編織秋日涼扇。',
        '@✦✦體驗內容✦✦',
        '① 一探阿員姐如何上山砍竹子<br/>② 一起在家中編織涼扇<br/>③ 阿員姐聊聊她在社區發起的有趣活動',
        '@✦✦材料包內容✦✦',
        '阿員姐親手準備之小竹扇材料包：成品尺寸約長29公分、寬23公分，也可以依照喜好做小支竹扇<br/>① 竹扇柄 1支<br/>② 細長竹片 約 22片<br/>③ 橡膠手套',
        '@✦✦自行準備✦✦',
        '① 噴水器（編織前噴水於竹片表面，使竹片不會破裂）<br/>② 剪刀<br/>③ 鑽子（有尖端可調整竹片位置即可）'
      ],
      notice: [
        '活動當天請準時上線，逾時不候，亦不退費。（提前5分鐘開放入場）',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。（若因參加者個人網路問題，恕無法退費）',
        '活動材料包限寄送台灣本島，離島及其他地區恕無法配送，若有其他需求或問題，請洽本網站活動客服。',
        '本次付費體驗活動以人數計算，並非以觀賞螢幕數量計算，亦不接受臨時報名。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '退費說明：考量行政成本與系統手續費，在報名截止前取消將退回50%體驗費用；於報名截止後或材料包出貨後取消，將無法退還體驗費用。體驗費用將統一於11月底所有體驗結束後進行退還。若有臨時無法出席之情形，建議可自行將票券轉讓給親友，再將新的參加者資訊(姓名、email、手機)告知客服即可。其他取消或轉讓相關問題請洽活動網站客服。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['蔡黃阿員']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15545?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'xinzhuang03_cover.jpg',
      theme: ['城的社區', '主題導覽'],
      time: '暗晡'
    },
    meta: {
      path: '/online/xinzhuang03',
      title: '都市生活可以門前有小河嗎？逛中港大排聊我們與水的愛恨糾葛',
      description:
        '家門前，不是應該有小河嗎？對大部分的城市人來說，河流不是生活，是存在在遠方的景觀。但其實城市的河，是隨著發展慢慢被蓋起來的，而新莊的中港大排，是雙北都會少見被重新打開、整治的水流。都市人如何跟水生活在一起，看得見的水，對都市人來說為什麼重要？新莊嚮導旭輝大哥將利用GoogleMap和現場照片，線上走讀中港大排，分享大排如何興建、為何興建、興建前後與人們生活的連結。',
      image: 'xinzhuang03_fb.jpg',
      keywords: '城市水文, 水資源, 城市發展'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'xinzhuang03_01.jpg',
      'xinzhuang03_02.jpg',
      'xinzhuang03_03.jpg',
      'xinzhuang03_04.jpg',
      'xinzhuang03_05.jpg',
      'xinzhuang03_06.jpg',
      'xinzhuang03_07.jpg',
      'xinzhuang03_08.jpg',
      'xinzhuang03_09.jpg'
    ],
    district: {
      name: '新莊',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    title: '都市生活可以門前有小河嗎？逛中港大排聊我們與水的愛恨糾葛',
    tags: ['城市水文', '水資源', '城市發展'],
    type: '線上直播、投影片播放',
    price: '免費',
    peopleLimit: '30',
    ageLimit: '適合7歲以上',
    date: '2021/10/24',
    day: '日',
    time: '16:00~18:00',
    endDate: '10/23 23:59',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '2小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'xinzhuang03_guide.jpg',
        title: '旭輝｜中港大排走99遍',
        intro: '住中港大排旁20幾年，長期於中港大排進行導覽，介紹新莊豐富的文史、中港大排的故事，分享給民眾。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '家門前，不是應該有小河嗎？<br/>對大部分的城市人來說，河流不是生活，是存在在遠方的景觀。',
        '但其實城市的河，是隨著發展慢慢被蓋起來的，而新莊的中港大排，是雙北都會少見被重新打開、整治的水流。',
        '都市人如何跟水生活在一起，看得見的水，對都市人來說為什麼重要？',
        '新莊嚮導旭輝大哥將利用Google Map和現場照片，線上走讀中港大排，分享大排如何興建、為何興建、興建前後與人們生活的連結。',
        '@✦✦中港大排介紹✦✦',
        '新莊的母親河——後村圳，曾經陪伴著新莊，成為北部的大米倉，中港厝的母親河中港大排，則讓中港厝生生不息。但隨著時間演替，慢慢良田內種滿了高樓大廈，排出的生活廢水，污染了河川溝渠，原本賴以為生的母親河，轉變成大家嫌惡的臭水溝。',
        '因著新莊副都心都市重劃，中港大排水溝重新被整治，並再度把活力找回來，轉變成排洪與遊憩休閒空間。'
      ],
      notice: [
        '活動當天請準時上線，逾時不候。（提前5分鐘開放入場）',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['劉旭輝']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15463?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'sanzhi_cover.jpg',
      theme: ['海的社區', '手作DIY'],
      time: '下晡'
    },
    meta: {
      path: '/online/sanzhi',
      title: '型染日曆：染製自己的2022，創作生活的每一個日子',
      description:
        '在人口高齡化的三芝，解析度團隊透過藝術與美感教育，在社區巷弄、公共區域做了許多可愛溫暖的小裝置，也帶孩子一起做手作DIY，讓孩子重新看見家鄉的特色與價值。',
      image: 'sanzhi_fb.jpg',
      keywords: '型染，藝術創作，設計進入社區'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'sanzhi_01.jpg',
      'sanzhi_02.jpg',
      'sanzhi_03.jpg',
      'sanzhi_04.jpg',
      'sanzhi_05.jpg',
      'sanzhi_06.jpg',
      'sanzhi_07.jpg',
      'sanzhi_08.jpg',
      'sanzhi_09.jpg',
      'sanzhi_10.jpg'
    ],
    district: {
      name: '三芝',
      type: DistrictType.Ocean,
      color: DistrictColor.Blue
    },
    title: '型染日曆：染製自己的2022，創作生活的每一個日子',
    tags: ['型染', '藝術創作', '設計進入社區'],
    type: '線上直播',
    price: '體驗價 每人 $ 400 元（適用信用卡五倍券）',
    peopleLimit: '20',
    ageLimit: '適合7歲以上',
    date: '2021/11/06',
    day: '六',
    time: '14:00~15:30',
    endDate: '11/02 12:00',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '1.5小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'sanzhi_guide.jpg',
        title: '小周老師｜三芝最傲嬌的人',
        intro:
          '外地讀書時的假台北人，土生土長的真三芝人，想在自己的家鄉做自己擅長的事，然後可以的話，希望能順便把家鄉變得更美好。2013從台中畢業回到三芝，工作沒多久後就栽進社區營造aka地方創生的大坑，在與夥伴一起的解析度設計團隊中出張嘴，偶爾設計點東西畫點圖。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '你的2021年是什麼樣子？也是充滿許多未知的變化？<br/>但這一年，也教導我們，如何在變化中過好每一個日子：）',
        '在這個年末時間，讓我們透過螢幕進入時間流速緩慢的三芝，跟著在地青年小周老師一起染製2022的每一個日子！。',
        '一起染染日子，聊聊日子，分享各種人生的轉變。',
        '@✦✦關於三芝的日子✦✦',
        '在人口高齡化的三芝，解析度團隊透過藝術與美感教育，在社區巷弄、公共區域做了許多可愛溫暖的小裝置，也帶孩子一起做手作DIY，讓孩子重新看見家鄉的特色與價值。',
        '@✦✦體驗內容✦✦',
        '① 型染圖案和顏色設計<br/>② 型染年曆圖案印製 <br/>③ 小周老師聊聊如何和孩子、長輩看見三芝之美',
        '@✦✦材料包內容✦✦',
        '成品尺寸約50*70公分<br/>① 年曆印布 1份<br/>② 絹印基底顏料 1罐<br/>③ 色母 4色<br/>④ 調色刀 1支<br/>⑤ 調色板 1個<br/>⑥ 紙膠帶 1個<br/>⑦ 膠片 A4尺寸 1個<br/>⑧ 海綿 1塊<br/>⑨ 水彩紙 1張、A4影印紙2張<br/>⑩ 紙碟子 4 個',
        '@✦✦自行準備✦✦',
        '① 文具類：鉛筆、橡皮擦、剪刀、美工刀<br/>② 切割墊<br/>③ 報紙 ',
        '<br/>【關於體驗價】<br/>為推廣民眾走進社區，參與社區體驗，本行程由文化局部分補助，社區團隊自辦體驗之售價以各社區平台為準，鼓勵民眾一起多多支持各社區體驗！'
      ],
      notice: [
        '收到材料包後請先拆開檢查品項，並將年曆印布先攤平減少壓痕。',
        '活動當天請準時上線，逾時不候，亦不退費（提前5分鐘開放入場）。',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。（若因參加者個人網路問題，恕無法退費）',
        '活動材料包限寄送台灣本島，離島及其他地區恕無法配送，若有其他需求或問題，請洽本網站活動客服。',
        '本次付費體驗活動以人頭計算，並非以觀賞螢幕數量計算，亦不接受臨時報名。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '退費說明：考量行政成本與系統手續費，在報名截止前取消將退回50%體驗費用；於報名截止後或材料包出貨後取消，將無法退還體驗費用。體驗費用將統一於11月底所有體驗結束後進行退還。若有臨時無法出席之情形，建議可自行將票券轉讓給親友，再將新的參加者資訊(姓名、email、手機)告知客服即可。其他取消或轉讓相關問題請洽活動網站客服。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['解析度設計有限公司']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15478?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'pinglin_cover.jpg',
      theme: ['山的社區', '機智地方生活TALK'],
      time: '下晡'
    },
    meta: {
      path: '/online/pinglin',
      title: '《坪林尋怪地圖》策劃分享：我們和孩子們一起山中尋怪',
      description:
        '幾個月前，有一群年輕人帶著一群學生，走進坪林的山裡、洞穴、各種小徑，尋找藏身在坪林的妖怪。有在北勢溪收集人類丟棄垃圾的「垃圾怪」、讓坪林成為雨不停濕滑山城的「愛哭鬼」、在雪隧和北宜公路催眠汽車駕駛的「山隧妖」、生前是保坪宮華麗歌仔戲演員的「歌神仔」、讓坪林人口不斷流失的「吸人怪」，以及喜歡偷走時間讓載滿乘客的公車遲到的「碰碰胡」⋯⋯',
      image: 'pinglin_fb.jpg',
      keywords: '生活覺察，藝術共創，策展分享，坪林，妖怪地圖，坪林國中'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'pinglin_01.jpg',
      'pinglin_02.jpg',
      'pinglin_03.jpg',
      'pinglin_04.jpg',
      'pinglin_05.jpg',
      'pinglin_06.jpg',
      'pinglin_07.jpg',
      'pinglin_08.jpg',
      'pinglin_09.jpg',
      'pinglin_10.jpg',
      'pinglin_11.jpg',
      'pinglin_12.jpg',
      'pinglin_13.jpg'
    ],
    district: {
      name: '坪林',
      type: DistrictType.Mountain,
      color: DistrictColor.Green
    },
    title: '《坪林尋怪地圖》策劃分享：我們和孩子們一起山中尋怪',
    tags: ['生活覺察', '藝術共創', '策展分享'],
    type: '線上直播',
    price: '免費',
    peopleLimit: '30',
    ageLimit: '適合12歲以上',
    date: '2021/10/24',
    day: '日',
    time: '14:00~16:00',
    endDate: '10/23 23:59',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '2小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'pinglin_guide.jpg',
        title: '採集人陳科廷｜坪林最沒有生意頭腦的人',
        intro:
          '自許為採集人，原從事生物多樣性研究並關注生活、環境議題，因為民族植物研究進入社區，關切人與自然如何永續共生，並將傳統智慧付諸實行於當代社會，於坪林社區與校園展開實踐。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '你最近有聽到消息嗎...?<br/>噓！小聲一點...聽說坪林最近很多妖怪出沒，而且，都是以前沒看過的妖怪！',
        '幾個月前，有一群年輕人帶著一群學生，走進坪林的山裡、洞穴、各種小徑，尋找藏身在坪林的妖怪。有在北勢溪收集人類丟棄垃圾的「垃圾怪」、讓坪林成為雨不停濕滑山城的「愛哭鬼」、在雪隧和北宜公路催眠汽車駕駛的「山隧妖」、生前是保坪宮華麗歌仔戲演員的「歌神仔」、讓坪林人口不斷流失的「吸人怪」，以及喜歡偷走時間讓載滿乘客的公車遲到的「碰碰胡」⋯⋯',
        '下次來坪林，小心注意，也許一轉身，哪個妖怪就躲在暗處出來嚇你呢！',
        '@✦✦關於坪林尋怪地圖✦✦',
        '這份尋怪地圖，不是真的鄉野傳說的「妖怪」，而是坪林故事採集團隊透過妖怪的意象，帶著國中生一起去觀察坪林在地生活，和同學們討論出造成他們生活困擾的「怪」。',
        '這場分享裡，我們將聽到採集人陳科廷如何做故事的採集，並帶著國中生走入社區一起挖掘，完成這份精彩可期的尋怪地圖。',
        '@✦✦聽分享前先來逛逛✦✦',
        '超級精美可愛的尋怪地圖網站！ <a href="https://strangepinglin.collective.tw/" target="_blank">https://strangepinglin.collective.tw/</a>'
      ],
      notice: [
        '活動當天請準時上線，逾時不候。（提前5分鐘開放入場）',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['坪林故事採集']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15477?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'pingxi_cover.jpg',
      theme: ['山的社區', '主題導覽'],
      time: '下晡'
    },
    meta: {
      path: '/online/pingxi',
      title: '乘坐Gather Town時光機：回到半世紀前菁桐女礦工的一天',
      description:
        '在菁桐，住著許多女性長者，她們就像你我的阿嬤一樣，但她們還有一個身份：「曾經的女礦工」。瑋揚和團隊一起蹲點菁桐，以女性視角切入，紀錄阿嬤們的礦工歲月。跟著菁桐阿嬤的故事，將自己化身成為礦男的媳婦，走入當年的美麗與憂傷。透過Gather互動劇場，一起穿越到過去的時光裡！',
      image: 'pingxi_fb.jpg',
      keywords: '互動劇場，女礦工，礦業故事'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'pingxi_01.jpg',
      'pingxi_02.jpg',
      'pingxi_03.jpg',
      'pingxi_04.jpg',
      'pingxi_05.jpg',
      'pingxi_06.jpg',
      'pingxi_07.jpg',
      'pingxi_08.jpg',
      'pingxi_09.jpg'
    ],
    district: {
      name: '平溪',
      type: DistrictType.Mountain,
      color: DistrictColor.Green
    },
    title: '乘坐Gather Town時光機：回到半世紀前菁桐女礦工的一天',
    tags: ['互動劇場', '女礦工', '礦業故事'],
    type: '線上直播',
    price: '免費',
    peopleLimit: '20',
    ageLimit: '適合7歲以上',
    date: '2021/10/23',
    day: '六',
    time: '14:00~15:30',
    endDate: '10/22 23:59',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '1.5小時',
    location: 'Gather Town、Google meet',
    guide: [
      {
        avatar: 'pingxi_guide.jpg',
        title: '瑋揚 Josh｜平溪最跳tone的人',
        intro:
          '是來自彰化的熱血青年，從學生時代就對志工服務活動相當熱衷。2020年，執行『編織菁桐的時代記憶』採訪了社區十來位的阿嬤，將阿嬤精彩的生命歷程撰寫成故事書，獲得不錯的迴響，今年預計以線上實境解謎的形式，讓更多人能認識這個地方的歷史文化。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '講到礦業，就和大部分的產業故事一樣，總是從男性敘事與觀點出發。明明是一起生活，卻很少被聽見的女性聲音去哪了？',
        '在菁桐，住著許多女性長者，她們就像你我的阿嬤一樣，但她們還有一個身份：「曾經的女礦工」。瑋揚和團隊一起蹲點菁桐，以女性視角切入，紀錄阿嬤們的礦工歲月。',
        '跟著菁桐阿嬤的故事，將自己化身成為礦男的媳婦，走入當年的美麗與憂傷。<br/>透過Gather Town 互動劇場，一起穿越到過去的時光裡！',
        '@✦✦關於菁桐煤礦家庭✦✦',
        '菁桐石底煤礦從日治時期一路開採到民國六零年代，在礦工家庭裡，男性入礦坑難免遭遇礦災，就算得以倖存，晚年也難逃矽肺症纏身；而女性需要撐起這個家，除了相夫教子的工作外，還必須扛起家計重擔。',
        '@✦✦線上導覽需配合✦✦',
        '① 線上體驗將使用Gather Town及Google Meet，請全程使用桌上型電腦或筆電，請勿使用手機或平板。<br/>② 請確保可以開啟視訊、麥克風，並且待在一個網路收訊良好的地方。'
      ],
      notice: [
        '活動當天請準時上線，逾時不開放進場。（提前5分鐘開放入場）',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。',
        '本活動使用Gather Town及Google Meet，為了保持您良好的參與體驗，請全程使用「桌上型電腦」或「筆電」，請勿使用手機或平板。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['新北市平溪區菁桐社區發展協會']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15543?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'xizhi_cover.jpg',
      theme: ['城的社區', '主題導覽', '在地料理'],
      time: '透早'
    },
    meta: {
      path: '/online/xizhi',
      title: '賣擱睏啦！溜進開市前的菜市場，居然要先去田裡拔菜',
      description:
        '要貼近一個地方的生活，傳統市場是一定要走闖ㄉ啦！你買過菜，但你參與過開市前「擺攤準備ing」的生猛混亂期間嗎？拜日透早，透過視訊跟著汐止的在地嚮導智佳一起逛汐止的「金龍市場」。為了更貼近自己生活20年的家，智佳開啟了挖掘市場故事的旅程。而這趟線上之旅，將帶大家直擊每個特色攤販的備料過程，以及如何買菜挑菜的小知識教學，順便跟頭家們談汐止故事、大聊在地八卦（？）。 如果你也愛死傳統市場，卻常霧裡看花，站在攤販前不知如何下手，趕快起床跟我們一起走闖市場吧！ ',
      image: 'xizhi_fb.jpg',
      keywords: '市場秘辛，攤販故事，職人絕活'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'xizhi_01.jpg',
      'xizhi_02.jpg',
      'xizhi_03.jpg',
      'xizhi_05.jpg',
      'xizhi_06.jpg',
      'xizhi_07.jpg',
      'xizhi_08.jpg',
      'xizhi_09.jpg'
    ],
    district: {
      name: '汐止',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    title: '賣擱睏啦！溜進開市前的菜市場，居然要先去田裡拔菜',
    tags: ['市場秘辛', '攤販故事', '職人絕活'],
    type: '線上直播、部分預錄影片',
    price: '免費',
    peopleLimit: '70',
    ageLimit: '適合7歲以上',
    date: '2021/10/24',
    day: '日',
    time: '10:00~12:00',
    endDate: '10/23 23:59',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '2小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'xizhi_guide.jpg',
        title: '智佳（小Ｍ）｜新上任調查員，帶您穿越時空的知性小編',
        intro:
          '在汐止住了20年，因緣際會走入「社后」蹲點。希望用行動串起大台北與社后，讓大家在這裡重新感受城市桃花源的美好，並發展成為汐止關係人的共同創想與交流。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '要貼近一個地方的生活，傳統市場是一定要走闖ㄉ啦！<br/>你買過菜，但你參與過開市前「擺攤準備ing」的生猛混亂期間嗎？',
        '拜日透早，透過視訊跟著汐止的在地嚮導智佳一起逛汐止的「金龍市場」。 ',
        '為了更貼近自己生活20年的家，智佳開啟了挖掘市場故事的旅程。<br/>而這趟線上之旅，將帶大家直擊每個特色攤販的備料過程，以及如何買菜挑菜的小知識教學，順便跟頭家們談汐止故事、大聊在地八卦（？）',
        '如果你也愛死傳統市場，卻常霧裡看花，站在攤販前不知如何下手，趕快起床跟我們一起走闖市場吧！',
        '@✦✦體驗內容✦✦  ',
        '① 偷看攤販老闆們開賣前的備料時刻<br/>② 拜託頭家偷偷分享買菜挑菜撇步<br/>③攤位預告：小鮮肉豬肉攤、賣龜山島漁獲的魚販、三十年米粉湯、雛菊草草仔粿、難忘阿母的豬腳<br/>④ 在地故事及田野過程分享'
      ],
      notice: [
        '活動當天請準時上線，逾時不開放進場（提前5分鐘開放入場）',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['田間文創工作室']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15544?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'sanzhi_tamsui_cover.jpg',
      theme: ['淡水河出海口', '漁人體驗', '藝術進入社區', 'DIY'],
      time: null
    },
    meta: {
      path: '/offline/sanzhi_tamsui',
      title: '北海岸的真空練習：跟著潮汐呼吸、沙洲中耙文蛤、三芝型染年曆',
      description:
        '這是淡水漁人的工作日常，只有一些人知道，原來可以待著的河中央，是他們採集海味的地方。〈第一道真空練習〉，跟著漁人，背上裝備，在沙洲上耙文蛤，專注感受耙子和沙地的接觸，挖掘一個個長長滋味。〈第二道真空練習〉，沿著北海岸來到三芝福成社區——一個時間慢慢流淌的社區。在這裡，一群在地長大的青年，將設計和藝術帶回社區，與孩子一起勞作、妝點社區的大小角落，佈置屬於大家的美感街區。 ',
      image: 'sanzhi_tamsui_fb.jpg',
      keywords: '淡水河出海口，漁人體驗，藝術進入社區，DIY'
    },
    category: {
      value: EventCategoryValue.Offline,
      text: '在地體驗'
    },
    banners: [
      'sanzhi_tamsui_01.jpg',
      'sanzhi_tamsui_02.jpg',
      'sanzhi_tamsui_03.jpg',
      'sanzhi_tamsui_04.jpg',
      'sanzhi_tamsui_05.jpg',
      'sanzhi_tamsui_06.jpg',
      'sanzhi_tamsui_07.jpg',
      'sanzhi_tamsui_08.jpg',
      'sanzhi_tamsui_09.jpg',
      'sanzhi_tamsui_10.jpg',
      'sanzhi_tamsui_11.jpg',
      'sanzhi_tamsui_12.jpg',
      'sanzhi_tamsui_13.jpg',
      'sanzhi_tamsui_14.jpg',
      'sanzhi_tamsui_15.jpg'
    ],
    district: {
      name: '淡水、三芝',
      type: DistrictType.Ocean,
      color: DistrictColor.Blue
    },
    title: '北海岸的真空練習：跟著潮汐呼吸、沙洲中耙文蛤、三芝型染年曆',
    tags: ['淡水河出海口', '漁人體驗', '藝術進入社區', 'DIY'],
    type: '實體活動',
    price: '體驗價 每人 $ 1000 元（適用信用卡五倍券）',
    peopleLimit: '20',
    ageLimit: '16歲以上',
    date: '2021/10/31',
    day: '日',
    time: '11:00~17:00',
    endDate: '10/26 12:00',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '6小時',
    location: '淡水河沙洲、三芝福成社區',
    guide: [
      {
        avatar: 'tamsui_guide.jpg',
        title: '國忠｜淡水湯瑪士',
        intro: '陳國忠，一位漁二代，談起淡水河口生態眼裡總是閃閃發亮，字字句句全是他對海上生活的熱愛。'
      },
      {
        avatar: 'sanzhi_guide.jpg',
        title: '小周老師｜三芝最傲嬌的人',
        intro: '外地讀書時的假台北人，土生土長的真三芝人，想在自己的家鄉做自己擅長的事，希望能順便把家鄉變得更美好。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '人群中，聲音四面八方而來。<br/>你是否想過瞬移，到一個喧鬧被抽掉的真空環境，去聽見自己急促的呼吸，逐漸緩和。',
        '只有一些人知道，出了淡水捷運站，上舟筏，渡往河中央，站上沙洲，就能進入只剩呼吸的真空環境。前望著八里渡港喧囂，背後淡水老街吵吵鬧鬧。',
        '這是淡水漁人的工作日常，只有一些人知道，原來可以待著的河中央，是他們採集海味的地方。<br/>〈第一道真空練習〉，跟著漁人，拿上裝備，在沙洲上耙文蛤，專注感受耙子和沙地的接觸，挖掘一個個長長滋味。',
        '〈第二道真空練習〉，沿著北海岸來到三芝福成社區——一個時間慢慢流淌的社區。在這裡，一群在地長大的青年，將設計和藝術帶回社區，與孩子一起勞作、妝點社區的大小角落，佈置屬於大家的美感街區。',
        '在三芝，我們將一起染製2022的年曆，一起、一心、一意，染製自己的一個個日子。',
        '@✦✦真空體驗包含✦✦  ',
        '① 滬青行動：淡水耙文蛤體驗（2-2.5hrs）<br/>② 解析度設計工作室：三芝社區導覽及型染日曆DIY（2hrs）<br/>③ 地方特色小點心及在地野味小食（不包含午餐，午餐可於淡水老街自理）<br/>④ 淡水站到三芝來回真空運送遊覽車（若運氣好回程也許會看到夕陽！）<br/>⑤ 參加者平安險',
        '【特別注意】<br/>耙文蛤體驗活動，若遇潮汐及天氣變化等因素而有安全風險疑慮，將視情況改為室內淡水文化活動。',
        '【特別感謝】<br/>感謝攝影作品提供者｜滬青行動<br/>攝影師｜ 高正彥、劉秋燕、陳威志',
        '<br/>【關於體驗價】<br/>為推廣民眾走進社區，參與社區體驗，本行程由文化局部分補助，社區團隊自辦體驗之售價以各社區平台為準，鼓勵民眾一起多多支持各社區體驗！'
      ],
      notice: [
        '活動當天請提前10-15分鐘於集合地點報到。 ',
        '本活動會有水上行程，請評估自身體力狀況。',
        '本活動過程中，會有活動影像紀錄，僅作為本活動宣傳及相關使用。',
        '本活動蒐集個資，僅作為保險、活動行程安排用；保險內容為：旅遊平安險：每一個人體傷或死亡：200萬元。每一事故之自負額上限：2,500元。',
        '本活動將依政府防疫規範進行滾動式調整，若您於14日內曾至新冠肺炎疫區接觸疑似或確診個案，體溫超過37℃、有乾咳、疲勞等症狀，請避免參加活動！另活動過程中敬請全程配戴口罩。',
        '本活動停辦標準：疫情達三級警戒時停辦、降雨量達豪雨等級停辦，活動延期，將另行通知。',
        '耙文蛤體驗活動，若遇潮汐及天氣變化等因素而有安全風險疑慮，將視情況改為室內淡水文化活動。',
        '本活動退費機制：活動日前11~13日辦理退款，須扣除定價30%為手續費。活動日前3~10日辦理退款，須扣除定價50%為手續費。活動日前2日至活動當日，不予退款。退款相關事宜請聯繫活動客服。',
        '本場次合作旅行社為翔旅國際旅行社有限公司。',
        '主辦單位保有調整、修改活動之權利。'
      ]
    },
    communityIntro: {
      teams: ['解析度設計有限公司', '滬青行動']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15479?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'zhonghe_cover.jpg',
      theme: ['城的社區', '手作DIY', '在地料理'],
      time: '透早'
    },
    meta: {
      path: '/online/zhonghe',
      title: 'Việt Nam故事廚房：嚐一口檸檬醃漬&超Chill鹹檸檬特調',
      description:
        '我們都有這樣的經驗，嚐到某個滋味，立刻穿越到某個不屬於現在的時空。可能被帶回某一次旅行、某一個難忘時刻、想起某一個人。而將一顆顆檸檬洗淨、存放、浸泡在日子裡醃漬，最後將酸酸鹹鹹的滋味，重新展開——這是屬於黃鶯的家鄉記憶，有酸有甜，令人難忘的青春歲月。一起調製一杯鹹檸檬飲，一邊啜飲，一邊聽著黃鶯聊越南日子、聊來台19年的故事，分享彼此的家鄉味和人生。',
      image: 'zhonghe_fb.jpg',
      keywords: '新住民，居家特調，東南亞'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'zhonghe_01.jpg',
      'zhonghe_02.jpg',
      'zhonghe_03.jpg',
      'zhonghe_04.jpg',
      'zhonghe_05.jpg',
      'zhonghe_06.jpg',
      'zhonghe_07.jpg',
      'zhonghe_08.jpg',
      'zhonghe_09.jpg'
    ],
    district: {
      name: '中和',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    title: 'Việt Nam故事廚房：嚐一口檸檬醃漬&超Chill鹹檸檬特調',
    tags: ['新住民', '居家特調', '東南亞'],
    type: '線上直播、部分預錄影片',
    price: '每人 $ 350 元（適用信用卡五倍券）',
    peopleLimit: '20',
    ageLimit: '適合10歲以上',
    date: '2021/11/06',
    day: '六',
    time: '10:00~11:30',
    endDate: '11/02 12:00',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '1.5小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'zhonghe_guide.jpg',
        title: '黃鶯｜社區裡最喜歡分享的人',
        intro:
          '來台灣結婚19年了，台灣、越南都是家！很關心其他東南亞婚姻移民，與新二代的孩子。用力地推廣母國文化、母語，盼望我們都能不忘根本，也希望孩子，能對自己新住民家長身分感到驕傲！'
      }
    ],
    eventIntro: {
      paragraphs: [
        '我們都有這樣的經驗，嚐到某個滋味，立刻穿越到某個不屬於現在的時空。<br/>可能被帶回某一次旅行、某一個難忘時刻、想起某一個人。',
        '而將一顆顆檸檬洗淨、存放、浸泡在日子裡醃漬，最後將酸酸鹹鹹的滋味，重新展開——這是屬於黃鶯的家鄉記憶，有酸有甜，令人難忘的青春歲月。',
        '一起調製一杯鹹檸檬飲，一邊啜飲，一邊聽著黃鶯聊越南日子、聊來台19年的故事，分享彼此的家鄉味和人生。',
        '@✦✦體驗內容✦✦',
        '① 鹹檸檬醃漬：一起等待6個月後開封食用<br/>② 鹹檸七飲品製作<br/>③ 東南亞香料、飲食文化、移民故事分享',
        '@✦✦準備材料✦✦',
        '嚮導寄送給你：）<br/>① 真空包裝鹹檸檬兩顆（嚮導專業製作，無任何添加，採用友善檸檬，可烘焙入菜，冷熱皆宜。）',
        '@✦✦自行準備✦✦',
        '① 檸檬兩顆（若想要多醃可準備多顆）<br/>② 糖/蜂蜜、鹽、醋<br/>③ 刨刀及水果刀<br/>④ 密封玻璃罐<br/>⑤ 可加熱之瓦斯爐、電磁爐<br/>（可依個人口味另準備冰塊、七喜或雪碧）'
      ],
      notice: [
        '活動當天請準時上線，逾時不開放進場，亦不退費。（提前5分鐘開放入場）',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。（若因參加者個人網路問題，恕無法退費）',
        '活動材料包限寄送台灣本島，離島及其他地區恕無法配送，若有其他需求或問題，請洽本網站活動客服。',
        '本次付費體驗活動以人數計算，並非以觀賞螢幕數量計算，亦不接受臨時報名。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '退費說明：考量行政成本與系統手續費，在報名截止前取消將退回50%體驗費用；於報名截止後或材料包出貨後取消，將無法退還體驗費用。體驗費用將統一於11月底所有體驗結束後進行退還。若有臨時無法出席之情形，建議可自行將票券轉讓給親友，再將新的參加者資訊(姓名、email、手機)告知客服即可。其他取消或轉讓相關問題請洽活動網站客服。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['台灣新住民家庭成長學會']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15473?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'xindian_cover.jpg',
      theme: ['山的社區', '主題導覽'],
      time: '暗時'
    },
    meta: {
      path: '/online/xindian',
      title: '【深夜的全台語導覽】帶你夜訪家裡附近的古戰場，共聊先祖故事',
      description:
        '你知道嗎？其實《斯卡羅》的故事不只發生在恆春，各族群的械鬥對戰其實發生在台灣各個角落。如果你家附近剛好有一座大眾爺廟，也許你家旁邊就是戰場！這個晚上，我們跟著新店的在地嚮導們，一起夜訪安坑的大眾爺廟，聊聊彼此先祖在這片土地上的故事。',
      image: 'xindian_fb.jpg',
      keywords: '台語導覽，閩粵械鬥，大眾爺'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'xindian_01.jpg',
      'xindian_02.jpg',
      'xindian_03.jpg',
      'xindian_04.jpg',
      'xindian_05.jpg',
      'xindian_06.jpg',
      'xindian_07.jpg',
      'xindian_08.jpg'
    ],
    district: {
      name: '新店',
      type: DistrictType.Mountain,
      color: DistrictColor.Green
    },
    title: '【深夜的全台語導覽】帶你夜訪家裡附近的古戰場，共聊先祖故事',
    tags: ['台語導覽', '閩粵械鬥', '大眾爺'],
    type: '線上直播',
    price: '每人 $ 200 元（含向大眾爺祈福的香油錢）',
    peopleLimit: '70',
    ageLimit: '適合7歲以上',
    date: '2021/11/06',
    day: '六',
    time: '19:00~21:00',
    endDate: '11/02 12:00',
    timeType: EventTimeType.Moon,
    timeZone: 'GMT+8',
    during: '2小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'xindian_guide.jpg',
        title: '吳柏瑋｜暗坑囡仔',
        intro: '我們是在地的「暗坑囡仔」講著祖先的故事，走的長輩走過的路，努力復興屬於庄頭的文化與靈魂'
      }
    ],
    eventIntro: {
      paragraphs: [
        '你知道嗎？其實《斯卡羅》的故事不只發生在恆春，各族群的械鬥對戰其實發生在台灣各個角落。<br/>如果你家附近剛好有一座大眾爺廟，也許你家旁邊就是戰場！',
        '這個晚上，我們跟著新店的在地嚮導們，一起夜訪安坑的大眾爺廟，聊聊彼此先祖在這片土地上的故事。（他們可是今年才受訓，努力練習說在地故事給大家聽的素人喔～）',
        '注意：本場全台語導覽！',
        '@✦✦超專業素人嚮導✦✦',
        '本場導覽的新新嚮導，都是新店在地民眾，透過暗坑文化工作室的導覽培訓，成為主題路線的嚮導，各個來自不同行業背景，一起來說新店的故事。',
        '① 賴昱伸 ｜離開故鄉後，因為培訓計畫回來尋根．全台語導覽<br/>② 陳藍雲｜泰雅族，職業為木柵高工教官',
        '@✦✦線上導覽需配合儀式✦✦',
        '① 活動前您會收到在地大廟平安符，保佑整個體驗順遂（請斟酌自身宗教信仰參加）<br/>② 跟隨直播觀看現場導覽前儀式<br/>③ 為更能夠感受現場環境，建議視訊環境可隨時調控燈光'
      ],
      notice: [
        '活動當天請準時上線，逾時不開放進場，亦不退費。（提前5分鐘開放入場）。',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。（若因參加者個人網路問題，恕無法退費）',
        '活動材料包限寄送台灣本島，離島及其他地區恕無法配送，若有其他需求或問題，請洽本網站活動客服。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '退費說明：考量行政成本與系統手續費，在報名截止前取消將退回50%體驗費用；於報名截止後或材料包出貨後取消，將無法退還體驗費用。體驗費用將統一於11月底所有體驗結束後進行退還。若有臨時無法出席之情形，建議可自行將票券轉讓給親友，再將新的參加者資訊(姓名、email、手機)告知客服即可。其他取消或轉讓相關問題請洽活動網站客服。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['暗坑文化工作室']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15474?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'xinzhuang02_cover.jpg',
      theme: ['城的社區', '機智地方生活TALK'],
      time: '透早'
    },
    meta: {
      path: '/online/xinzhuang02',
      title: '在大都會裡做地方誌：《新莊騷》創辦經驗分享',
      description:
        '每個「地方」，每時每刻都發生著故事，但要將故事串在一起，讓地方的「樣子」更具象，一本刊物功不可沒！你對新莊的印象是什麼？新莊是什麼模樣？是工廠、廟街、副都心、還是動畫電影《幸福路上》？原從事博物館工作的在地青年梁子，從2020年開始想將新莊的多元面貌記錄下來，以「新莊其實不悶，新莊騷！」為概念，編輯撰寫了6期的《新莊騷》在地誌。透過雜誌從不同主題切入聊新莊，隨著一期一期的採訪串連更多新莊有趣的人事物，也開啟了彼此的交流對話。',
      image: 'xinzhuang02_fb.jpg',
      keywords: '地方誌, 職人分享, 地方連結, 新莊, 新莊騷, 雜誌'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'xinzhuang02_01.jpg',
      'xinzhuang02_02.jpg',
      'xinzhuang02_03.jpg',
      'xinzhuang02_04.jpg',
      'xinzhuang02_05.jpg',
      'xinzhuang02_06.jpg'
    ],
    district: {
      name: '新莊',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    title: '在大都會裡做地方誌：《新莊騷》創辦經驗分享',
    tags: ['地方誌', '職人對談', '地方連結'],
    type: '線上直播、部分預錄影片',
    price: '免費',
    peopleLimit: '70',
    ageLimit: '適合16歲以上',
    date: '2021/10/31',
    day: '日',
    time: '10:00~11:00',
    endDate: '10/30 23:59',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '1小時',
    location: 'Google meet',
    guide: [
      {
        avatar: 'xinzhuang02_guide.jpg',
        title: '梁勝欽(梁子)｜從科普策展人到地方誌主編的奇幻之旅',
        intro:
          '從小到大居住在新莊，卻一點也不了解家鄉？希望運用10年以上的品牌行銷經驗，創辦地方刊物，串聯在地藝文，提升年輕世代對於家鄉的認同感！'
      }
    ],
    eventIntro: {
      paragraphs: [
        '每個「地方」，每時每刻都發生著故事，但要將故事串在一起，讓地方的「樣子」更具象，一本刊物功不可沒！',
        '你對新莊的印象是什麼？新莊是什麼模樣？是工廠、廟街、副都心、還是動畫電影《幸福路上》？',
        '原從事博物館工作的在地青年梁子，從2020年開始想將新莊的多元面貌記錄下來，以「新莊其實不悶，新莊騷！」為概念，編輯撰寫了6期的《新莊騷》在地誌。透過雜誌從不同主題切入聊新莊，隨著一期一期的採訪串連更多新莊有趣的人事物，也開啟了彼此的交流對話。',
        '這場分享，梁子將為大家解答：<br/>「新莊騷是一本什麼樣的刊物？」<br/>「為何這裡會需要一本地方誌？」<br/>「從策展人到主編的知識跨界！」<br/>「地方誌其實不只是刊物？」<br/>「從地方平台到地域品牌的願景？」',
        '@✦✦同場超特別加映✦✦',
        '梁子特別預錄當期《新莊騷》職人對談，帶你一起認識在新莊在地做有趣事情的新新人類！',
        '@✦✦新莊騷各期主題✦✦',
        '<a href="https://issuu.com/xz-sao" target="_blank">https://issuu.com/xz-sao</a>',
        '第一期：咖啡覺醒力<br/>第二期：下一站幸福<br/>第三期 廟街好神<br/>第四期：給我好好聽<br/>第五期：誰跟你下新莊<br/>第六期：敬請期待'
      ],
      notice: [
        '活動當天請準時上線，逾時不候。（提前5分鐘開放入場）。',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['好滙造事工作室']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15411?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'xinzhuang01_cover.jpg',
      theme: ['城的社區', '手作DIY'],
      time: '下晡'
    },
    meta: {
      path: '/online/xinzhuang01',
      title: '新北也有大型遶境？召喚神明左右護法！一起畫官將首臉譜',
      description:
        '說到大型宮廟遶境你想到什麼？是桃園的大溪大禧？一年一度的媽祖遶境？如果你生活在雙北不可不知！新莊地藏庵就有著百年傳承的大慶典「五一大拜拜」。「新莊有三熱：火燒厝、扒龍船、迎五月初一。」清朝時期還是河港的新莊，由於貿易發達而店面林立，沿街興建廟宇，形成今日大漢溪河畔的新莊廟街。位於新莊國小旁的地藏庵（大眾廟），源於祭祀因開墾、械鬥死亡的無主孤魂，而後逐漸興盛擴張，成為新莊最具代表的廟宇，保存官將首和新莊大拜拜之傳統習俗。',
      image: 'xinzhuang01_fb.jpg',
      keywords: '宮廟文化，手作DIY，畫臉'
    },
    category: {
      value: EventCategoryValue.Online,
      text: '線上體驗'
    },
    banners: [
      'xinzhuang01_01.jpg',
      'xinzhuang01_02.jpg',
      'xinzhuang01_03.jpg',
      'xinzhuang01_04.jpg',
      'xinzhuang01_05.jpg',
      'xinzhuang01_06.jpg'
    ],
    district: {
      name: '新莊',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    title: '新北也有大型遶境？召喚神明左右護法！一起畫官將首臉譜',
    tags: ['宮廟文化', '手作DIY', '畫臉'],
    type: '線上直播',
    price: '每人 $ 100 元（適用信用卡五倍券）',
    peopleLimit: '20',
    ageLimit: '適合7歲以上',
    date: '2021/11/07',
    day: '日',
    time: '14:00~16:00',
    endDate: '11/02 12:00',
    timeType: EventTimeType.Sun,
    timeZone: 'GMT+8',
    during: '2小時',
    location: 'Gather Town',
    guide: [
      {
        avatar: 'xinzhuang01_guide.jpg',
        title: 'Fish俞君｜新莊最愛逛博物館的人',
        intro:
          '2014年移居新莊，就讀於輔大博館所，研究領域為博物館的社區參與，碩士論文題目為北美館的街事美術館計畫；曾參與新莊宗教田野研究計畫和國文庫種子師資培訓；目前擔任遊境感知所的企畫統籌，帶領團隊執行新北市文化局社造計畫。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '說到大型宮廟遶境你想到什麼？是桃園的大溪大禧？一年一度的媽祖遶境？',
        '如果你生活在雙北不可不知！新莊地藏庵就有著百年傳承的大慶典「五一大拜拜」。',
        '「新莊有三熱：火燒厝、扒龍船、迎五月初一。」',
        '清朝時期還是河港的新莊，由於貿易發達而店面林立，沿街興建廟宇，形成今日大漢溪河畔的新莊廟街。位於新莊國小旁的地藏庵（大眾廟），源於祭祀因開墾、械鬥死亡的無主孤魂，而後逐漸興盛擴張，成為新莊最具代表的廟宇，保存官將首和新莊大拜拜之傳統習俗。',
        '農曆五月一日舉行之新莊大拜拜，由官將首護送大眾老爺繞境新莊，沿途發送蓋有官印的咸光餅予居民，為驅邪除煞的平安象徵。',
        '如果你聽過新莊大拜拜，但不知道其中有意思的習俗特色，<br/>如果你看過官將首，但不知道如何從臉譜分辨不同角色，<br/>如果你是從來沒參加過遶境的新莊人，想先聽別人經驗一探究竟，<br/>歡迎進入官將首的Gather Town 世界！我們一起說大拜拜故事，動手做官將首紙戲偶。',
        '@✦✦體驗內容✦✦',
        '① 新莊官將首、五一大拜拜由來及特色介紹<br/>② 官將首紙戲偶DIY：剪裁、上色及拼裝<br/>③ 聊聊那些令人心跳加速的宮廟文化',
        '@✦✦體驗材料包✦✦',
        '戲偶成品約18-25公分<br/>① 八開紙戲偶學習單 1份<br/>② 雙腳釘 4支',
        '（參加者需事先準備喜愛的彩繪工具，建議使用6色以上彩色筆）'
      ],
      notice: [
        '活動開始前，請閱讀主辦單位提供的Gather Town 操作說明書；進入房間後若有任何操作上的疑問，請使用【舉手】或【聊天室】功能提出，工作人員將協助您解決問題。',
        '活動當天請準時上線，逾時不開放進場，亦不退費。（提前5分鐘開放入場）',
        '為確保您的觀賞品質，請在網路穩定的環境與我們連線，並確保連線裝置的耳機及麥克風可正常操作。（若因參加者個人網路問題，恕無法退費）',
        '本活動材料包限寄送台灣本島，離島及其他地區恕無法配送，若有其他需求或問題，請洽本網站活動客服。',
        '本次付費體驗活動以人數計算，並非以觀賞螢幕數量計算，亦不接受臨時報名。',
        '為避免觸犯著作權法，請勿錄製活動內容再運用。未經允許，亦請勿螢幕擷取或翻拍其他參加者的照片。',
        '退費說明：考量行政成本與系統手續費，在報名截止前取消將退回50%體驗費用；於報名截止後或材料包出貨後取消，將無法退還體驗費用。體驗費用將統一於11月底所有體驗結束後進行退還。若有臨時無法出席之情形，建議可自行將票券轉讓給親友，再將新的參加者資訊(姓名、email、手機)告知客服即可。其他取消或轉讓相關問題請洽活動網站客服。',
        '主辦單位保有調整、修改活動之權利。 '
      ]
    },
    communityIntro: {
      teams: ['遊境感知所']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15289?locale=zh-TW',
    status: EventStatus.Apply
  },
  {
    home: {
      image: 'xinzhuang_cover.jpg',
      theme: ['新莊廟街', '地藏庵', '中港大排'],
      time: null
    },
    meta: {
      path: '/offline/xinzhuang',
      title: '夜幕降臨，新莊時間靜止：散步清朝河港、夜訪地藏庵、深入都會叢林的人與水岸',
      description:
        '熙來攘往的車與人，下班後依舊湍急，林立的工商特區，副都心的新大廈一棟一棟蓋往天際——這是新莊的日常樣貌，人口數直逼新北第一大區板橋，新莊正蓬勃地發展未來。但，今晚好像有點不一樣，從傍晚開始，空氣中瀰漫著神秘氣息。巷子的人影閃過：「你聽說了嗎？只有今晚，午夜之前，時間會暫停流動，我們可以自由在不同時間移動！」噓，這是個機密。既然你聽到了，要一起加入嗎 ',
      image: 'xinzhuang_fb.jpg',
      keywords: '探訪老街，畫臉譜DIY，水文導覽，水邊Talk'
    },
    category: {
      value: EventCategoryValue.Offline,
      text: '在地體驗'
    },
    banners: [
      'xinzhuang_01.jpg',
      'xinzhuang_02.jpg',
      'xinzhuang_03.jpg',
      'xinzhuang_04.jpg',
      'xinzhuang_05.jpg',
      'xinzhuang_06.jpg',
      'xinzhuang_07.jpg',
      'xinzhuang_08.jpg',
      'xinzhuang_09.jpg',
      'xinzhuang_10.jpg',
      'xinzhuang_11.jpg',
      'xinzhuang_12.jpg',
      'xinzhuang_13.jpg',
      'xinzhuang_14.jpg'
    ],
    district: {
      name: '新莊',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    title: '夜幕降臨，新莊時間靜止：散步清朝河港、夜訪地藏庵、深入都會叢林的人與水岸',
    tags: ['探訪老街', '畫臉譜DIY', '水文導覽', '水邊Talk'],
    type: '實體活動',
    price: '體驗價 每人 $ 500 元（適用信用卡五倍券）',
    peopleLimit: '20',
    ageLimit: '16歲以上',
    date: '2021/10/30',
    day: '六',
    time: '16:30~21:00',
    endDate: '10/26 12:00',
    timeType: EventTimeType.Moon,
    timeZone: 'GMT+8',
    during: '4.5小時',
    location: '新莊廟街、地藏庵、中港大排',
    guide: [
      {
        avatar: 'xinzhuang01_guide.jpg',
        title: 'Fish俞君｜新莊最愛逛博物館的人',
        intro: '2014年移居新莊，就讀於輔大博館所，研究領域為博物館的社區參與；目前擔任遊境感知所的企畫統籌。'
      },
      {
        avatar: 'xinzhuang02_guide.jpg',
        title: '梁勝欽(梁子)｜從科普策展人到地方誌主編的奇幻之旅',
        intro: '希望運用10年以上的品牌行銷經驗，創辦地方刊物，串聯在地藝文，提升年輕世代對於家鄉的認同感！'
      },
      {
        avatar: 'xinzhuang03_guide.jpg',
        title: '旭輝｜中港大排走99遍',
        intro: '住中港大排旁20幾年，長期於中港大排進行導覽，介紹新莊豐富的文史、中港大排的故事，分享給民眾。'
      }
    ],
    eventIntro: {
      paragraphs: [
        '熙來攘往的車與人，下班後依舊湍急，林立的工商特區，副都心的新大廈一棟一棟蓋往天際——這是新莊的日常樣貌，人口數直逼新北第一大區板橋，新莊正蓬勃地發展未來。',
        '但，今晚好像有點不一樣，<br/>從傍晚開始，空氣中瀰漫著神秘氣息。',
        '巷子的人影閃過：「你聽說了嗎？只有今晚，午夜之前，時間會暫停流動，我們可以自由在不同時間移動！」',
        '噓，這是個機密。既然你聽到了，要一起加入嗎？',
        '@✦✦時間旅行機密行程✦✦',
        '切記：請不要告訴你以外的其他人！',
        '黃昏時分：300年前的新莊河港散步，《新莊騷》創辦人梁子導覽<br/>入夜時分：夜訪地藏庵，《遊境感知所》導覽及官將首面具DIY活動<br/>夜晚時分：沿著水走向未來，旭輝大哥帶領中港大排水文導覽，回到國中時光測石蕊試紙夜深時分：跟嚮導們一起在水邊跟大家Chill Talk',
        '@✦✦可能會有天上掉下來的補給品✦✦',
        '① 一些流傳百年的糧食<br/>② 當代最流行款之包袱＋新莊寶典<br/>③ 喝了會感覺在幸福路上的飲品',
        '@✦✦恐遇時間亂流，請評估防禦能力✦✦',
        '① 本行程雖然偶有坐著休息，但大部分為徒步內容，請評估腳力狀況<br/>② 建議穿著好走、輕便的服裝，不要帶過重的包袱<br/>③ 本行程有宮廟導覽內容，如有信仰疑慮，請評估是否適合',
        '<br/>【關於體驗價】<br/>為推廣民眾走進社區，參與社區體驗，本行程由文化局部分補助，社區團隊自辦體驗之售價以各社區平台為準，鼓勵民眾一起多多支持各社區體驗！'
      ],
      notice: [
        '活動當天請提前10-15分鐘於集合地點報到。 ',
        '本活動會參訪多間廟宇，若有信仰等疑慮，請評估後報名。',
        '本活動有許多步行路程，請評估自身體力狀況。',
        '本活動不含晚餐，請自行準備餐點或用餐後參加。',
        '本活動集合與結束地點不同(集合點：新莊站2號出口/結束點：中港大排昌中橋下)，請先評估後續交通。',
        '本活動過程中，會有活動影像紀錄，僅作為本活動宣傳及相關使用。',
        '本活動蒐集個資，僅作為保險、活動行程安排用；保險內容為：旅遊平安險：每一個人體傷或死亡：200萬元。每一事故之自負額上限：2,500元。',
        '本活動將依政府防疫規範進行滾動式調整，若您於14日內曾至新冠肺炎疫區接觸疑似或確診個案，體溫超過37℃、有乾咳、疲勞等症狀，請避免參加活動！另活動過程中敬請全程配戴口罩。',
        '本活動停辦標準：疫情達三級警戒時停辦、降雨量達豪雨等級停辦，活動延期，將另行通知。',
        '本活動退費機制：活動日前11~13日辦理退款，須扣除定價30%為手續費。活動日前3~10日辦理退款，須扣除定價50%為手續費。活動日前2日至活動當日，不予退款。退款相關事宜請聯繫活動客服。',
        '主辦單位保有調整、修改活動之權利。'
      ]
    },
    communityIntro: {
      teams: ['遊境感知所', '劉旭輝', '好滙造事工作室']
    },
    applyUrl: 'https://meet-newwwwtaipei.backme.tw/checkout/1977/15349?locale=zh-TW',
    status: EventStatus.Apply
  }
];

export const onlineEvents = events
  .filter((event) => event.category.value === EventCategoryValue.Online)
  .sort((eventA, eventB) => {
    if (eventA.status === eventB.status) return eventA.date + eventA.time > eventB.date + eventB.time ? 1 : -1;
    return eventA.status === EventStatus.Finished ? 1 : -1;
  });

export const offlineEvents = events
  .filter((event) => event.category.value === EventCategoryValue.Offline)
  .sort((eventA, eventB) => {
    if (eventA.status === eventB.status) return eventA.date + eventA.time > eventB.date + eventB.time ? 1 : -1;
    return eventA.status === EventStatus.Finished ? 1 : -1;
  });

export default events;
