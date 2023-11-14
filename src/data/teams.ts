import { DistrictColor, DistrictType } from './types';

export type TeamInEvent = {
  slideImage: string;
  avatar: string;
  name: string;
  tags: string[];
  facebook: string | null;
  website: string | null;
  sdgs: string[];
  area: {
    map: string;
    description: string;
  };
  plan: {
    title: string;
    images: string[];
    intro: string;
    description: string[];
  };
  fqa: Fqa[];
  nearbyCommunity: NearbyCommunity[];
};

type Fqa = {
  q: string;
  a: string;
};

type NearbyCommunity = {
  avatar: string;
  title: string;
  description: string;
  link: string | null;
};

// 這邊的team 主要會顯示在event頁面中，不過也部分可能會顯示在district modal裡面
export const teamsInEvent: TeamInEvent[] = [
  {
    slideImage: 'sanzhi_slides.jpg',
    avatar: 'sanzhi_team.jpg',
    name: '解析度設計有限公司',
    tags: ['基礎型'],
    facebook: 'https://www.facebook.com/Sanchih.corner',
    website: null,
    sdgs: ['04', '11'],
    area: {
      map: 'sanzhi.jpg',
      description:
        '「很多地方都在做社區營造，而我們把它想著如何做得有趣很重要！」我們擅長結合不同領域的元素去呈現出能夠滿足特定或多方面需求的設計，串聯社造活動，擾動並整合兒童、青年、老農、藝文、環境等地方人事物發展在地自給自足機制，最終目的想成為在地社會企業，打造三芝幸福社區的功能與內涵。'
    },
    plan: {
      title: '街角巷弄-旋轉故里計畫',
      images: ['sanzhi_plan01.jpg', 'sanzhi_plan02.jpg'],
      intro:
        '本團隊以服務在地生活及其建構地方認同價值為目標，將人群和地方的資源連結在一起，此次計畫設計三個行動方案——「在地行動家、街角小教室、生活博物圈」，滿足人群和地方不同的需求，完善地方文化發展機制，形成在地主動保護網絡，找回人和地方相互的關係。',
      description: [
        '本團隊以服務在地生活及其建構地方認同價值為目標，將人群和地方的資源連結在一起，此次計畫設計三個行動方案——「在地行動家、街角小教室、生活博物圈」，滿足人群和地方不同的需求，完善地方文化發展機制，形成在地主動保護網絡，找回人和地方相互的關係。',
        '期待透過這些方案，不只是孩子能夠學到看見三芝價值的能力，喜愛自己的故鄉，建立在長大之後也想繼續生活的地方；青年除了實踐還有機會擔任連結內外的角色，並創造能夠在地生活陪伴的機制，建立平台讓長輩能夠將生命經驗分享給孩童、傳承在地經驗與技藝。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '首推三芝警察局對面的白斬雞！有鹽水跟煙燻兩種口味，在地人的好味道，在初一十五拜拜的大日子，不預定都吃不到ＸＤ'
      },
      {
        q: '關於三芝的小秘密？',
        a: '茭白筍又叫美人腿是從三芝開始的！！！不是南投埔里！！！'
      },
      {
        q: '三芝是不是在淡水線上？',
        a: '三芝是在北海岸，要從淡水坐公車再過去，沒有捷運站啦，有捷運站那個叫做芝山！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'sanzhi_near01.jpg',
        title: '新北市三芝區樂天社區發展協會',
        description: '社造計畫｜樂天社區資源盤點-杜聰明故居文化體驗',
        link: 'https://www.facebook.com/%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%89%E8%8A%9D%E5%8D%80%E6%A8%82%E5%A4%A9%E7%A4%BE%E5%8D%80%E7%99%BC%E5%B1%95%E5%8D%94%E6%9C%83-859063121096210/'
      },
      {
        avatar: 'sanzhi_near02.jpg',
        title: '蔡文培',
        description: '社造計畫｜北海創生共同空間地方設計計畫',
        link: 'https://www.facebook.com/NS.Placemaking/'
      }
    ]
  },
  {
    slideImage: 'taishan_slides.jpg',
    avatar: 'taishan_team.jpg',
    name: '蔡黃阿員',
    tags: ['基礎型'],
    facebook: null,
    website: null,
    sdgs: ['01', '02', '04'],
    area: {
      map: 'taishan.jpg',
      description:
        '大科竹編的農俗文化，已沒落多時，為了讓農俗文化技藝傳承，能夠風華再現，努力地重拾早期居民的生活點滴，讓後代子孫能夠了解先人的辛苦成果與代價。透過在社區推廣竹編技藝，以培育竹藝種子教師為目標，走入竹林從認識竹材開始，砍竹、鉅竹、洗竹，透過實作過程帶領社區長者和居民認識竹編，並期待將這樣的傳統技藝持續的向外推廣。'
    },
    plan: {
      title: '圓夢藝程',
      images: ['taishan_plan01.jpg', 'taishan_plan02.jpg'],
      intro:
        '透過土生土長的阿員姊導覽解說，介紹大科里的地理環境及燈籠的故鄉，延續農俗文化，再由最基礎的砍竹、洗竹、剝竹、編織早期的扇子，並依照現代潮流做變化，不僅要認識泰山區大科村的風俗文化、竹藝傳承的過往歷，更要透過手作吸引對竹藝手座有興趣的學員。',
      description: [
        '透過土生土長的阿員姊導覽解說，介紹大科里的地理環境及燈籠的故鄉，延續農俗文化，再由最基礎的砍竹、洗竹、剝竹、編織早期的扇子，並依照現代潮流做變化，不僅要認識泰山區大科村的風俗文化、竹藝傳承的過往歷，更要透過手作吸引對竹藝手座有興趣的學員，竹扇的製作只是一個起頭，更期待取得竹藝編織的技巧後，能夠製作自己喜愛的作品，讓你有復古的感覺又跟上新的潮流。',
        '此次參與的學員，大都是剛退休人士，他們是看到大科社區作品的呈現，很有意願學習，可是要當種子講師學一技之長可沒那麼容易期許此次成立社團協會，讓學員對竹子有所概念，了解竹編的深奧及意涵才有耐心及用心的去體會編織竹編的用意及所編織竹藝作品的運用。',
        '竹子的知識要建構起知識系統，過去也有做過紀錄，這次和圖書館合作，圖書館就能以在地知識記憶的角度進入。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '我會親自做草仔粿或芋粿巧及肉粽來接待，這是社區有名的米食，也是我的專長'
      },
      {
        q: '社區中的秘密景點！',
        a: '柯厝坑內的小道旁，油桐花開季節時，全是白色一片美麗的花海，太美了'
      },
      {
        q: '你都怎麼介紹你住哪裡？',
        a: '我家住大科里，哈哈就是大箍（tuā-khoo）里，跟身材一樣的大箍。'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'taishan_near01.jpg',
        title: '社團法人新北市愛鄉協會',
        description: '社造計畫｜祭。藝。紅土地：林口在地祭典文化傳承體驗計畫',
        link: 'https://www.facebook.com/thnra.org/'
      },
      {
        avatar: 'taishan_near02.jpg',
        title: '林家德',
        description: '社造計畫｜ MICRO GREEN',
        link: 'https://www.facebook.com/CoLab2020/'
      },
      {
        avatar: 'taishan_near03.jpg',
        title: '紀妤臻',
        description: '社造計畫｜看不見的泰山・看得見的生活',
        link: 'https://www.facebook.com/taishan.daily'
      },
      {
        avatar: 'taishan_near04.jpg',
        title: '新北市全民終身教育發展協會',
        description: '社造計畫｜留影-塭仔圳公民紀錄片行動',
        link: 'http://encounter.org.tw/'
      }
    ]
  },
  {
    slideImage: 'xinzhuang03_slides.jpg',
    avatar: 'xinzhuang03_team.jpg',
    name: '劉旭輝',
    tags: ['基礎型'],
    facebook: null,
    website:
      'https://sites.google.com/view/bright5/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/110%E8%9B%BB%E8%AE%8A-%E5%85%B1%E6%A6%AE-%E4%B8%AD%E6%B8%AF%E5%A4%A7%E6%8E%922-3',
    sdgs: ['06', '07', '15'],
    area: {
      map: 'xinzhuang.jpg',
      description:
        '新莊副都心都更後，人口結構成跳躍式增長，生活機能圈已慢慢建立。中港大排自100年啟用至今已1餘年，以中原路為界線，北邊為新莊副都心區，新莊副都心區地景不斷的翻轉，南邊為舊社區，舊城區人口已負成長，造成人口差異變化。中原路切開了新舊社區的分野，中港大排聯繫了新舊社區的情感。舊社區住民，大部分都是居住10年以上，見證並承襲著新莊、中港大排的歷史、文化；副都心社區的住民大部分都是外地遷移的住民，對於這塊土地的文化、歷史是陌生的。'
    },
    plan: {
      title: '蛻變.共融中港大排2.3',
      images: ['xinzhuang03_plan01.jpg', 'xinzhuang03_plan02.jpg'],
      intro:
        '舉辦中港大排願景工作坊，經由探訪後資訊，討論中港大排對社區生活的影響、課題、願景並整理與彙整相關文資，將整理後的中港大排小故事融入未來導覽中，讓導覽活動更活潑更在地化，也能讓參訪的民眾更了解這塊土地因中港大排新、舊文化都能共融著。',
      description: [
        '第一階段將著重於採訪居住在中港大排周遭超過10年以上的住民，試圖由訪問過程中了解中港大排整治前與整治後對居民的影響、課題、願景的探訪，並收集在地居民與中港大排發生的故事，編輯成為日後導覽的素材，為近代中港大排的文化留下紀錄。',
        '第二階段整理在地居民近期在中港大排的小故事，並試圖挖掘在地居民目前對於中港大排的缺失，對居民的影響、課題、願景的探訪並引動議提-尋回中港大排的生命力-生態。',
        '第三階段新增一場中港大排願景工作坊，經由探訪後資訊，討論中港大排對社區生活的影響、課題、願景並整理與彙整相關文資，將整理後的中港大排小故事融入未來導覽中，讓導覽活動更活潑更在地化，也能讓參訪的民眾更了解這塊土地因中港大排新、舊文化都能共融著。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '徐家滷味！味道香！'
      },
      {
        q: '社區中的秘密景點！',
        a: '塭仔底溼地公園！生態豐富的都市公園'
      },
      {
        q: '中港大排又稱台版清溪川？',
        a: '比韓國清溪川還美啦！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'xinzhuang03_near01.jpg',
        title: '王繼新 ',
        description: '社造計畫｜憶往昔話如今-空軍三重一村家戶記憶徵集計劃',
        link: 'https://www.culture.ntpc.gov.tw/military_village'
      },
      {
        avatar: 'xinzhuang03_near02.jpg',
        title: '陶卉 ',
        description: '社造計畫｜時空~藝術~文化',
        link: 'https://www.facebook.com/%E9%9B%B2%E6%B0%B4%E6%88%B2%E5%8A%87%E5%B7%A5%E4%BD%9C%E5%9D%8A-177851416150589'
      },
      {
        avatar: 'xinzhuang03_near03.jpg',
        title: '藝起來串臉社會企業 ',
        description: '社造計畫｜社區探索~停·看·聽',
        link: 'https://www.facebook.com/NF0517family/'
      }
    ]
  },
  {
    slideImage: 'pinglin_slides.jpg',
    avatar: 'pinglin_team.jpg',
    name: '坪林故事採集',
    tags: ['青年社造'],
    facebook: 'https://www.facebook.com/pinglinstory',
    website: null,
    sdgs: ['04', '11', '17'],
    area: {
      map: 'pinglin.jpg',
      description:
        '紮根在坪林，長遠目標透過共同採集，串聯社區中不同的時空世代、重組地方力量，藉此凝聚地方認同。並透過保存故事並將之活化創新利用，以地方的永續發展為任務，共同想像坪林未來的冀望。今年，我們帶上坪林的故事出發，著重將學習的產出回饋社區造成影響，擴大連結周遭的地方團體及教學組織，以協助坪林國中轉型實驗學校，設計以地方學、環境教育為重的跨域課程，打破生活與學習場域的界線，建立社區與校園共榮發展的永續循環。'
    },
    plan: {
      title: '坪林尋怪地圖+染一抹茶山',
      images: ['pinglin_plan01.jpg', 'pinglin_plan02.jpg'],
      intro:
        '「坪林尋怪」計畫經由學生發想、票選，並實地走踏兩條尋怪路線後開始進行妖怪故事創作，在課程當中完成從妖怪生態圖繪製、故事撰寫、面具製作到結合表演藝術課程的肢體聲音展現與動態拍攝，最終完整呈現精彩的「坪林尋怪地圖」',
      description: [
        '「染一抹茶山」計畫當中，坪林實中學生在參觀坪林茶業博物館的「茶山學」展覽後，從資料收集進入藍曬技法學習與零件製作，由在地議題衍伸創作出六大主題地方故事布簾，包含呈現專業製茶流程的「一杯好茶的幸福」、帶大家看見豐沛在地生態資源的「生活在坪林的鳥兒」及「幸福的穿山甲」、探討宗教興衰的「消失的傳說—坪林天主教」、解密人文歷史之路「逐漸轉化的淡蘭古道」，以及介紹坪林傳奇助產士蔡巧的「掌握坪林生命的阿嬤」。',
        '「坪林尋怪」計畫經由學生發想、票選，並實地走踏兩條尋怪路線後開始進行妖怪故事創作，在課程當中完成從妖怪生態圖繪製、故事撰寫、面具製作到結合表演藝術課程的肢體聲音展現與動態拍攝，最終完整呈現精彩的「坪林尋怪地圖」，例如：讓坪林成為雨不停濕滑山城的「愛哭鬼」、在雪隧和北宜公路催眠汽車駕駛的「山隧妖」等，妖怪創作讓在地議題得以以新姿為人所見。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '好吃的就在我家，坪林人才不會出去吃！'
      },
      {
        q: '坪林的秘密景點？',
        a: '「坪林尋怪地圖」上的有色點點，神秘色彩的地方！'
      },
      {
        q: '一句話惹怒嚮導？',
        a: '不要再叫我返鄉青年！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'pinglin_near02.jpg',
        title: '張筱翎(採集人共作室) ',
        description: '社造計畫｜坪林尋怪地圖－地方故事活化',
        link: 'https://www.facebook.com/collectingbeings/'
      },
      {
        avatar: 'pinglin_near03.jpg',
        title: '坪林區婦女合唱團 ',
        description: '社造計畫 | 坪林區婦女混聲合唱推廣',
        link: null
      },
      {
        avatar: 'pinglin_near04.jpg',
        title: '新北市坪林區商圈發展協會 ',
        description: '社造計畫 | 茶鄉共學好〝 神〞 氣',
        link: null
      },
      {
        avatar: 'pinglin_near01.jpg',
        title: '崇光女中文教基金會 ',
        description: '社造計畫｜新店溪畔-茶蕨坪林文化共生',
        link: 'https://web.ckgsh.ntpc.edu.tw/nss/p/fri04'
      }
    ]
  },
  {
    slideImage: 'pingxi_slides.jpg',
    avatar: 'pingxi_team.jpg',
    name: '新北市平溪區菁桐社區發展協會',
    tags: ['成長型'],
    facebook:
      'https://www.facebook.com/%E8%8F%81%E6%A1%90%E7%A4%BE%E5%8D%80%E7%99%BC%E5%B1%95%E5%8D%94%E6%9C%83-257126564873496/?ref=pages_you_manage',
    website: null,
    sdgs: ['04', '11', '17'],
    area: {
      map: 'pingxi.jpg',
      description:
        '菁桐阿嬤時光礦道計畫團隊是由菁桐社區發展協會幹事林瑋揚與四位來至不同產業與學校的社會青年林詩涵、詹琇宇、江清楓、吳郁瑩所組成。希望青年思維得以注入菁桐社區，共同拾起當年礦坑生活下的偉大女性，整理地方產業演進與線下世代創新結合，打造「新菁桐坑銀座」。'
    },
    plan: {
      title: '菁桐阿嬤的時光礦道',
      images: ['pingxi_plan01.jpg', 'pingxi_plan02.jpg'],
      intro:
        '今年以本會去年提案《編織菁桐的時代記憶》為基礎，與菁桐坑文化觀光發展協會、新北市平溪導覽協會合作，將當時向出身礦工家庭的女性長輩所採集來的生命故事，結合既有的社區小旅行行程，改編為「菁桐阿嬤的時光礦道」實境解謎遊戲。',
      description: [
        '今年以本會去年提案《編織菁桐的時代記憶》為基礎，與菁桐坑文化觀光發展協會、新北市平溪導覽協會合作，將當時向出身礦工家庭的女性長輩所採集來的生命故事，結合既有的社區小旅行行程，改編為「菁桐阿嬤的時光礦道」實境解謎遊戲。',
        '因應疫情，改採一對一口訪或電訪，採集故事並且集思廣益，討論設計出解謎路線及體驗關卡活動，讓遊客一邊玩解謎遊戲，一邊進行小旅行的行程，同時身歷其境去體會礦村阿嬤當年的心路歷程。',
        '最後，社區實境遊戲體驗課程，請故事裡的阿嬤當起解說員，帶領學生體驗實境解謎遊戲，並分享生命故事，分享他們在當時面對了哪些生活上的困境，又是如何應對的。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '社區自製沒有雞的雞捲、養生藥草便當'
      },
      {
        q: '雞捲怎麼沒有雞？',
        a: '在過去的年代沒有冰箱，食物不易保存。賢慧媽媽就會將多餘的食物用豆皮捲起來下去油炸，就變成閩南話說的「加減捲」，也就是所謂的「雞捲」。'
      },
      {
        q: '菁桐的特產？',
        a: '我們有會開山貓的阿嬤！過去在礦坑，男性都在坑內做辛苦的挖煤作業，女性則包辦所有坑外的工作，所以阿嬤會開山貓（推土機）也是很合理的！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'pingxi_near01.jpg',
        title: '黃仁興',
        description: '社造計畫｜礦業聞畫景觀',
        link: 'https://www.facebook.com/%E7%A4%A6%E6%A5%AD%E8%81%9E%E7%95%AB%E6%99%AF%E8%A7%80-102145515510950/'
      },
      {
        avatar: 'pingxi_near02.jpg',
        title: '新北市猴硐礦工文史協會',
        description: '社造計畫｜礦工術語詮釋影像紀錄',
        link: 'https://www.facebook.com/%E7%8C%B4%E7%A1%90%E7%A4%A6%E5%B7%A5%E6%96%87%E5%8F%B2%E9%A4%A8-104409537762032/'
      },
      {
        avatar: 'pingxi_near03.jpg',
        title: '吳明賢 ',
        description: '社造計畫｜「令人嚮往的生活樣子」-東北角「青年生活支持系統暨公共事務參與社群」',
        link: 'https://www.facebook.com/%E5%98%BB%E5%93%88%E5%B9%B3%E6%BA%AA-2208189652830718/'
      }
    ]
  },
  {
    slideImage: 'xizhi_slides.jpg',
    avatar: 'xizhi_team.jpg',
    name: '田間文創工作室',
    tags: ['基礎型'],
    facebook: 'https://www.facebook.com/pages/category/Art/%E7%94%B0%E9%96%93%E6%96%87%E5%89%B5-101391201599355/',
    website: null,
    sdgs: ['04', '11'],
    area: {
      map: 'xizhi.jpg',
      description:
        '團隊計畫主持人居住在地20年，先前工作接觸文創創作及參與地方文化推廣工作，我們關注『文化深耕、在地認同、人才培力』三大面向加上先前參與過青年返鄉計畫，發現在地社區文化特色除了歷史外，社區居民共同參與更熱絡參與關注地方文化涵意。反觀社后金龍湖周遭交通上距離大台北地區南港、內湖非常近在地理位置上算是汐止門面，但很可惜地方美學及文化保存缺乏及重視，社區有很多傳統產業目前面臨高齡化。'
    },
    plan: {
      title: '『創』享 - 社后『心』桃花源',
      images: ['xizhi_plan01.jpg', 'xizhi_plan02.jpg'],
      intro:
        '今年主要以百年北峰溪聚落與社區連結，找回社后重要的關鍵人與文化，推動了三場走讀工作坊，透過生態及文化講師帶大家瞭解在地早期產業與現代文化生活關聯性，讓社區居民可以對外交流，從在地學更認識屬於居住社后文化。',
      description: [
        '汐止主要是以『水』共生的城市，日治時期汐止碼頭是與大台北經商往來的必經之地；其中社后地區更是以『金龍湖』出名，現今已成為近大台北生活圈登山客主要朝聖地，『金龍湖』更是當年來此拓墾的農民所開鑿的水利工程之一。',
        '現今地方上仍保有日治時期到光復初期地方產業煤礦遺址『北港二坑』及礦工信仰土地廟、北峰寺。光復初期因產業結構改變，加上 80 年代地貌改變，颱風洪水造成人口外移，有10年多汐止在地關係人口及文化產生斷層等因素而沒落。',
        '今年計畫主要以百年北峰溪聚落與社區連結，找回社后重要的關鍵人與文化，推動了三場走讀工作坊，透過生態及文化講師帶大家瞭解在地早期產業與現代文化生活關聯性，讓社區居民可以對外交流，從在地學更認識屬於居住社后文化。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '金龍市場裡面30年的米粉湯，還可以順便聽老闆說說菜市場文化故事'
      },
      {
        q: '金龍湖是真的有金龍嗎？！',
        a: '其實是因為有金龍鱸鰻出沒，因腹部金黃色有如金龍再現，才將湖取名為「金龍湖」喔。'
      },
      {
        q: '汐止的冬天是不是車子會長草發霉啊？',
        a: '欸！汐止冬天迎風面所以多雨，但不代表我們這裡是灰色的喔！這段時間反而可以讓農作物有更多水份，因此汐止沙的筍跟茶比其他城市更好吃喔！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'xizhi_near01.jpg',
        title: '曾美珍',
        description: '社造計畫｜ 結好緣～在保長坑溪遇見好厝邊',
        link: 'https://www.facebook.com/baochangclab'
      },
      {
        avatar: 'xizhi_near04.jpg',
        title: '新北市台灣藝術創生文化基金會 ',
        description: '社造計畫｜「水返腳」地方誌文化認識計畫',
        link: 'https://www.facebook.com/%E5%8F%B0%E7%81%A3%E8%97%9D%E8%A1%93%E5%89%B5%E7%94%9F%E6%96%87%E5%8C%96%E5%9F%BA%E9%87%91%E6%9C%83-632290890727079/'
      },
      {
        avatar: 'xizhi_near02.jpg',
        title: '廖珮璇 ',
        description: '社造計畫｜水返腳街道博物館共學計畫',
        link: 'https://www.facebook.com/rexizhi/'
      },
      {
        avatar: 'xizhi_near03.jpg',
        title: '苗秧拾穗-歌仔戲',
        description: '社造計畫｜臺北傳統戲劇團 ',
        link: 'https://www.facebook.com/groups/156141141255024/'
      }
    ]
  },
  {
    slideImage: 'tamsui_slides.jpg',
    avatar: 'tamsui_team.jpg',
    name: '滬青行動',
    tags: ['青年社造'],
    facebook: 'https://www.facebook.com/TKUplayDesignThinking',
    website: null,
    sdgs: ['04', '17'],
    area: {
      map: 'tamsui.jpg',
      description:
        '滬青行動是由滬尾1位緣鄉青年劉宇萱與2位原鄉青年童皖祥、陳澤維所組成，期望以青世代視角盤點地方職人，爬梳在地文化脈絡，打造淡水地方平台！'
    },
    plan: {
      title: '滬青行動',
      images: ['tamsui_plan01.jpg', 'tamsui_plan02.jpg'],
      intro:
        '串聯八位職人辦理體驗活動，整理成八份活動紀錄和模組化的遊程設計，並於後續視狀況與地方職人進行專訪，藉由次級資料、田野調查、活動與專訪紀錄方式，交織成一則則暖心故事，逐步打磨積累淡水地方職人資料庫。',
      description: [
        '淡水離臺北並不遠，就在捷運紅線淡水線的終點站，由於交通便捷成為許多臺北人假日走走的首選，但多數旅人選擇沿著河岸走到底折返，完成一趟淡水小旅行，觀察到這現象的我們好奇「淡水是否有可能提供一個24小時隨約隨走的服務？」，因此我們透過設計思考挖掘地方痛點，協助地方職人以服務設計方式重新打造體驗旅程，逐步建構淡水隨興走走平台—Casual Tamsui。',
        '第一階段串聯八位職人辦理體驗活動，包含人氣冰店朝日夫婦、老屋再生地方職人九哥、地方攝影師程許忠、攀樹教練蕭妘羽、獨立書店無論如河、咖啡職人王紹文、街頭藝人莎莎、繪本作家倖子以及漁二代陳國忠，從各自的專長出發和民眾來場深度談話。',
        '接著集結參加者的體驗心得，團隊整理成八份活動紀錄和模組化的遊程設計，並於後續視狀況與地方職人進行專訪，藉由次級資料、田野調查、活動與專訪紀錄方式，交織成一則則暖心故事，逐步打磨積累淡水地方職人資料庫。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '之間茶食器！因為他們是透過食物設計融入在地食材與歷史，超強的食物設計，好看好聽又好吃！'
      },
      {
        q: '淡水不為人知的秘境',
        a: '淡水河中央。'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'tamsui_near01.jpg',
        title: '新北市淡水區休閒農業協會',
        description: '社造計畫 | 旅讀公司田溪.藝起創作100天',
        link: null
      },
      {
        avatar: 'tamsui_near02.jpg',
        title: '台灣基督長老教會淡水教會 ',
        description: '社造計畫 | 認識你真好',
        link: null
      }
    ]
  },
  {
    slideImage: 'zhonghe_slides.jpg',
    avatar: 'zhonghe_team.jpg',
    name: '台灣新住民家庭成長學會',
    tags: ['基礎型'],
    facebook: 'https://www.facebook.com/viettaipeople/',
    website: null,
    sdgs: ['03'],
    area: {
      map: 'zhonghe.jpg',
      description:
        '成立社團法人台灣東協新住民家庭成長學會，選擇坐落於新住民人口眾多的新北中和區，與新住民姊妹們一同學習成長、透過母國特色美食讓台灣人更加認識越南。從越南姊妹的小巢出發，透過有意義的課程設計途徑，提供姊妹們終身學習的機會，打造姊妹們在台灣的第二個家，進而逐步結合成為東南亞新住民的大巢(家)。 主要方法則是藉由有實力的姊妹們擔任師資，一起帶動還未具能力的姊妹們融入學習，透過課程活動學習，建立母國美食創新生命的產業。'
    },
    plan: {
      title: '小巢的天空–會館我們的家',
      images: ['zhonghe_plan01.jpg', 'zhonghe_plan02.jpg'],
      intro:
        '透過異國國民美食及家常醬菜的製作與推廣分享，使社區居民與新住民共學共樂、輕鬆的拉近彼此的距離，大家在充分交流之餘，勢必增加地方創生的可能性、發展性，讓台灣這個多元的小小地球村，從小的社區開始發展，實踐社造計畫中更多的創生場域出現。',
      description: [
        '發想設計具有東南亞特色的美食烹飪教學分享，讓社區認識不同國家的飲食生活習慣，品嚐到沒有經過台灣口味化、最道地的異國美食，也更進一步瞭解一個國家結合婚喪喜慶文化等必會特別準備的在地特色料理。',
        '今年選定越南四個不同醬菜製作課程，依不同節氣時令選擇食材實作DIY體驗，藉由整體活動發揚新住民廚藝，讓彼此未來在創生創業上增加選擇性，培育自我價值。',
        '透過異國國民美食及家常醬菜的製作與推廣分享，使社區居民與新住民共學共樂、輕鬆的拉近彼此的距離，大家在充分交流之餘，勢必增加地方創生的可能性、發展性，讓台灣這個多元的小小地球村，從小的社區開始發展，實踐社造計畫中更多的創生場域出現。'
      ]
    },
    fqa: [
      {
        q: '最懷念的家鄉美食？',
        a: '越式酸辣魚湯、越式椰汁滷肉，餐桌必備家常菜，家家戶戶孩子們口中的媽媽味'
      },
      {
        q: '中和區裡面，越南姊妹最喜歡去的地方？',
        a: '南勢角夜市、烘爐地參拜'
      },
      {
        q: '大家常常對越南來的朋友有什麼樣的誤會？',
        a: '越南非母系社會唷！越南男人懶散、不認真工作的印象，更是天大的誤會！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'zhonghe_near01.jpg',
        title: '香巴拉劇坊',
        description: '社造計畫｜板橋一家之戲劇巡演計畫<另一個我自己>',
        link: 'https://www.facebook.com/shambalatheater/'
      },
      {
        avatar: 'zhonghe_near02.jpg',
        title: '中和區碧湖社區發展協會',
        description: '社造計畫｜碧湖社區故事採集戲劇工作坊',
        link: 'https://www.facebook.com/%E4%B8%AD%E5%92%8C%E5%8D%80%E7%A2%A7%E6%B9%96%E7%A4%BE%E5%8D%80%E7%99%BC%E5%B1%95%E5%8D%94%E6%9C%83-1281507531883006/'
      },
      {
        avatar: 'zhonghe_near03.jpg',
        title: '中華民國在地數位發展協會 ',
        description: '社造計畫｜我的三重食代-60年代辦桌菜譜典藏.創新',
        link: 'https://www.twldda.org/'
      },
      {
        avatar: 'zhonghe_near04.jpg',
        title: '杜季勳 ',
        description: '社造計畫｜你很特別-每個孩子都是獨一無二的禮物 繪本戲劇工作坊',
        link: 'https://www.facebook.com/%E4%BD%A0%E5%BE%88%E7%89%B9%E5%88%A5%E6%AF%8F%E5%80%8B%E5%AD%A9%E5%AD%90%E9%83%BD%E6%98%AF%E7%8D%A8%E4%B8%80%E7%84%A1%E4%BA%8C%E7%9A%84%E7%A6%AE%E7%89%A9-162863902539036/'
      }
    ]
  },
  {
    slideImage: 'xindian_slides.jpg',
    avatar: 'xindian_team.jpg',
    name: '暗坑文化工作室',
    tags: ['基礎型'],
    facebook: 'https://m.facebook.com/AmKhenn/',
    website: null,
    sdgs: ['04', '08', '11'],
    area: {
      map: 'xindian.jpg',
      description:
        '暗坑文化工作室，成立於2020年，是創辦人吳柏瑋在地方沉潛5年後，希望能夠為家鄉保留文化與傳承、振興而建立的在地文化品牌。團隊成員中包含地方工作者、文史研究者、信仰研究者及廟方的董監事會參與，合作對象包含太平里、頂城里及下城里里長，藉由培力地方居民成為廟宇導覽志工的方式，使得地方居民能夠再信仰祭祀需求外，廟方產生藝術、文化及認同上的互動，促使里民與地方大廟黏著度提高。'
    },
    plan: {
      title: '暗坑文化復興計畫-護佑萬世·「太平」開箱',
      images: ['xindian_plan01.jpg', 'xindian_plan02.jpg'],
      intro:
        '今年計畫為太平宮的文化層面進行「開箱」，透過培力工作坊的方式讓廟的空間場域與培力者產生更進一步的互動關係，讓培力者成為太平宮的關係人口，也使外五庄地區重新成為有互動關係的區域，而不是單純的祭祀圈。',
      description: [
        '暗坑文化工作室，成立於2020年，是創辦人吳柏瑋在地方沉潛5年後，希望能夠為家鄉保留文化與傳承、振興而建立的在地文化品牌。',
        '今年計畫為太平宮的文化層面進行「開箱」，透過培力工作坊的方式讓廟的空間場域與培力者產生更進一步的互動關係，讓培力者成為太平宮的關係人口，也使外五庄地區重新成為有互動關係的區域，而不是單純的祭祀圈。',
        '一、建立太平宮與地方居民於生活、文化及藝術上更深度且密切的關係，使居民「重新成為」廟的關係人口。<br/>二、經由社群經營及展覽、導覽促使地方青年投入傳承地方文化。<br/>三、集結青年族群於在地產生具有地方文化意識的創新團隊，產出暗坑文創商品或相關創新推廣行動。<br/>四、使得太平宮找回過往的公共性場域精神，使得居民能夠更容易走進廟宇，並且取得除信仰外之其餘附加價值與目的。<br/>五、使得地方長者能夠於熟悉的場域進行導覽，構成能夠進行「傳承文化」與為創造「青銀共生」願景的地方群體。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '安民街無招牌油飯。小時候爸爸都會帶我去吃。'
      },
      {
        q: '暗坑有沒有不為人知的秘密？',
        a: '暗坑其實有產石油。'
      },
      {
        q: '一句話惹暗坑人！',
        a: '暗坑（安坑）沒有臭豆腐！！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'xindian_near01.jpg',
        title: '深坑簪纓合唱團 ',
        description: '計畫內容｜大家來唱合唱',
        link: 'https://www.facebook.com/TaipeiZhanyingChineseOrchestra/'
      },
      {
        avatar: 'xindian_near02.jpg',
        title: '曹莘宜(SuperMom超人媽媽) ',
        description: '計畫內容｜我們的院子-新店博愛街',
        link: 'https://www.facebook.com/OurBoAiBackYard'
      },
      {
        avatar: 'xindian_near03.jpg',
        title: '胡璉故居紀念館暨研究中心 ',
        description: '計畫內容｜重返榮耀將軍巷',
        link: 'https://www.facebook.com/hulien1907/'
      },
      {
        avatar: 'xindian_near04.jpg',
        title: '新北市原住民族產業技能發展協進會 ',
        description: '計畫內容｜原民防疫~生命、生態、生活',
        link: 'https://www.facebook.com/%E6%96%B0%E5%8C%97%E5%B8%82%E5%8E%9F%E4%BD%8F%E6%B0%91%E6%97%8F%E7%94%A2%E6%A5%AD%E6%8A%80%E8%83%BD%E7%99%BC%E5%B1%95%E5%8D%94%E9%80%B2%E6%9C%83-2064946346957468/'
      },
      {
        avatar: 'xindian_near05.jpg',
        title: '歆和合唱團 ',
        description: '計畫內容 | 乘著歌聲的翅膀自由飛翔',
        link: 'https://www.facebook.com/%E4%BD%A0%E5%BE%88%E7%89%B9%E5%88%A5%E6%AF%8F%E5%80%8B%E5%AD%A9%E5%AD%90%E9%83%BD%E6%98%AF%E7%8D%A8%E4%B8%80%E7%84%A1%E4%BA%8C%E7%9A%84%E7%A6%AE%E7%89%A9-162863902539036/'
      }
    ]
  },
  {
    slideImage: 'xinzhuang02_slides.jpg',
    avatar: 'xinzhuang02_team.jpg',
    name: '好滙造事工作室',
    tags: ['基礎型'],
    facebook: 'https://www.facebook.com/XinzhuangSao',
    website: null,
    sdgs: ['04', '11'],
    area: {
      map: 'xinzhuang.jpg',
      description:
        '好滙造事工作室，滙聚你我身邊的好事！希望以紙本刊物為媒介，探索在地文化的人事物，呈現獨具風格的地方知識平台！'
    },
    plan: {
      title: '《新莊騷》地方誌串聯共好行動',
      images: ['xinzhuang02_plan01.jpg', 'xinzhuang02_plan02.jpg'],
      intro:
        '我們運用「地方誌」的新穎定位，期許將「教科書」變成「故事書」，以「轉譯者」的角度梳理，用「單元式」的企劃呈現。每期設定不同的主題探索，進行特輯企劃、文史訪查、人物訪談等，再以撰文、攝影、插畫等風格編排呈現，將艱澀內容轉化成簡易好讀的版面，無論大人小孩都能輕鬆閱讀！',
      description: [
        '新莊，是大台北盆地最早開發的地方，也曾是淡水港的內港，其河港歷史比艋舺、大稻埕都還要早；而現在居住在新莊的人們似乎只把新莊當成一座放大版的宿舍：只在這裡吃飯睡覺和通勤。甚至外來人口與年輕一代都對在地文史不太了解，總覺得新莊是文化沙漠，而逐漸失去了在地認同感，也失去了交流傳承的機會…',
        '我們運用「地方誌」的新穎定位，期許將「教科書」變成「故事書」，以「轉譯者」的角度梳理，用「單元式」的企劃呈現。每期設定不同的主題探索，進行特輯企劃、文史訪查、人物訪談等，再以撰文、攝影、插畫等風格編排呈現，將艱澀內容轉化成簡易好讀的版面，無論大人小孩都能輕鬆閱讀！'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '新莊老街的阿瑞官粿店、捷運幸福站旁福壽街美食'
      },
      {
        q: '社區中的秘密景點！',
        a: '中港大排。比韓國首爾清溪川更美的城市水廊'
      },
      {
        q: '新莊神秘的都市傳說？',
        a: '從幸福路的92號，再走個5公尺，會變成522號！消失的400號都市傳說！'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'xinzhuang02_near01.jpg',
        title: '楫文社 ',
        description: '社造計畫｜搭築文學的磚瓦-永和藝文社造計畫',
        link: 'https://www.facebook.com/boatingbook'
      },
      {
        avatar: 'xinzhuang02_near02.jpg',
        title: '新北市枋橋文化協會 ',
        description: '社造計畫｜枋橋城就是我的故事館',
        link: 'https://www.facebook.com/%E6%9E%8B%E6%A9%8B%E6%96%87%E5%8C%96%E5%8D%94%E6%9C%83-200479789978964/'
      },
      {
        avatar: 'xinzhuang02_near03.jpg',
        title: '新北市蘆洲區長安社區發展協會 ',
        description: '社造計畫｜在地文藝復興-蘆洲文化歷史風情',
        link: 'https://www.luzhou.ntpc.gov.tw/home.jsp?id=b2ff21fbcb234003'
      }
    ]
  },
  {
    slideImage: 'xinzhuang01_slides.jpg',
    avatar: 'xinzhuang01_team.jpg',
    name: '遊境感知所',
    tags: ['一般性'],
    facebook: 'https://www.facebook.com/yu.jing.studio/',
    website: null,
    sdgs: ['11', '17'],
    area: {
      map: 'xinzhuang.jpg',
      description:
        '遊境感知所成員背景橫跨文化策展和社區營造雙重領域，以社區策展持續挖掘台灣文化的內涵，感知融合當代與傳統的美學。民國110年10月前將完成【教育部青年發展署—青年社區參與行動Changemaker計畫 : 〈新莊官將不素顏〉】以及【新北市文化局一般性社造補助：〈畫說五一：新莊居民大拜拜之文化記憶採集與轉譯〉】，執行成果包含發布開放博物館線上展和刊物、舉辦新莊官將首文化論壇以及快閃展。'
    },
    plan: {
      title: '畫說五一:新莊居民大拜拜之文化記憶採集與轉譯',
      images: ['xinzhuang01_plan01.jpg', 'xinzhuang01_plan02.jpg'],
      intro:
        '和紀錄新莊大拜拜的攝影師、官將首團合作進行歷史記憶採集，蒐集整理參與五一大拜拜的故事，撰寫新莊居民的故事文案，與插畫師合作以圖文誌呈現居民與大拜拜信仰緊密連結的生活記憶。',
      description: [
        '和紀錄新莊大拜拜的攝影師、官將首團合作進行歷史記憶採集，蒐集整理參與五一大拜拜的故事，撰寫新莊居民的故事文案，與插畫師合作以圖文誌呈現居民與大拜拜信仰緊密連結的生活記憶。',
        '文史研究成果將轉譯為線上展覽，發布於中央研究院的開放博物館平台，並規劃文史論壇講座，引動更多人關注新莊的傳統習俗，期待藉由採集居民文化記憶，以插畫手法進行圖像轉譯，讓消逝多年的大拜拜辦桌等傳統習俗，再次被新一代年輕人認識。'
      ]
    },
    fqa: [
      {
        q: '朋友造訪社區時，你一定會帶去吃的好料是？',
        a: '新莊老街的鹹光餅 - 最能代表新莊的點心'
      },
      {
        q: '社區中的秘密景點！',
        a: '新莊IKEA！其實是玩躲貓貓的好地方 '
      },
      {
        q: '新莊的秘境小店？',
        a: '豐年街附近的小巷店家 : 小森咖啡和阿茶芋園，位於老街外圍區域，環境清幽僻靜，遠離市中心塵囂適合散步。'
      }
    ],
    nearbyCommunity: [
      {
        avatar: 'xinzhuang01_near01.jpg',
        title: '熊瀛松 ',
        description: '社造計畫 | 蟲蟲創造愛心與友善社區環境',
        link: null
      },
      {
        avatar: 'xinzhuang01_near03.jpg',
        title: '日勝幸福站A3區管理委員會 ',
        description: '社造計畫 | 聽阿嬤的故事、唱阿嬤的歌-日勝幸福站 A3社區兒童合唱團',
        link: null
      },
      {
        avatar: 'xinzhuang01_near02.jpg',
        title: '游郁心(YC藝術共創實驗室)',
        description: '社造計畫 | 永昌耆「畫，(話)我記憶中的技藝」',
        link: null
      }
    ]
  }
];

export type TeamInDistrictSlide = {
  district: {
    name: string;
    type: DistrictType;
    color: DistrictColor;
  };
  slideImage: string;
  name: string;
  facebook: string;
  plan: {
    title: string;
    intro: string;
  };
};

// 這邊的team 只會顯示在district modal裡面，不會顯示在event頁面中
export const teamsInDistrictSlide: TeamInDistrictSlide[] = [
  {
    district: {
      name: '瑞芳',
      type: DistrictType.Mountain,
      color: DistrictColor.Green
    },
    slideImage: 'other01_slides.jpg',
    name: '新北市猴硐礦工文史協會',
    facebook: 'https://reurl.cc/yZp9bM',
    plan: {
      title: '礦工術語詮釋影像紀錄',
      intro:
        '1、完成礦工術語詮釋，使結果落實在理解、解釋、應用上。2、以動態影像紀錄礦工作業語詞詮釋，保留礦業通俗文化。3、      由礦工們以自身經驗解說完成三十筆礦工術語詮釋。4、以影像記錄詮釋過程與結果。5、詮釋後可使口語化術語名詞的解釋與讀音有一致性。'
    }
  },
  {
    district: {
      name: '淡水',
      type: DistrictType.Ocean,
      color: DistrictColor.Blue
    },
    slideImage: 'other02_slides.jpg',
    name: '新北市淡水休閒農業協會',
    facebook: 'https://www.facebook.com/danhai.river.life/',
    plan: {
      title: '旅讀公司田溪．藝起創作100天',
      intro:
        '淡水的公司田溪由大屯山系發源流向沙崙河口與海洋匯集，蜿蜒河道流過淡海新市鎮公寓大廈，像是守護居住土地的懷抱。四百年前荷蘭人重建紅毛城也記錄到當時這條溪水灌溉了良田，哺養淡水子民。如今我們以這條流域的旅行走向山林/河谷/海洋，與大家一起走讀紀錄和討論藝術創作，讓生活變得澄澈！'
    }
  },
  {
    district: {
      name: '蘆洲',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    slideImage: 'other03_slides.jpg',
    name: '藝起來串臉社會企業',
    facebook: 'https://www.facebook.com/NF0517family',
    plan: {
      title: '社區探索~停˙看˙聽',
      intro:
        '透過多感官的體驗，停下腳步觀察社區中美好靜下心來，認識自己，傾聽自己的聲音，透過分享打開心的世界。由<神經纖維瘤友>講師佩蘭，帶領民眾透過「愛叨家己:停、看、聽」的體驗活動，探索社區的美好、學習愛自己，透過繪畫，自由創作，做自己的主人。心輔犬:經過專業教練訓練的浪浪，成為心靈輔犬，經由觸摸、餵食與心輔犬的互動，能舒壓與放鬆身心喔!'
    }
  },
  {
    district: {
      name: '新店',
      type: DistrictType.Mountain,
      color: DistrictColor.Green
    },
    slideImage: 'other04_slides.jpg',
    name: 'SuperMom超人媽媽',
    facebook: 'https://www.facebook.com/OurBoAiBackYard',
    plan: {
      title: '我們的院子－新店博愛街',
      intro:
        '這是都市裡難得的綠地，有珍貴的獨特性，卻也是社會住宅預定地，利用閒置空間打造地景設施，引發居民駐足互動交流與自主的環境關懷。再藉由文化藝術的五感體驗與具創造性的活動，讓我們一同和孩子共創多元遊戲的都市後院。也希望在如此不斷滾動之下，能讓綠地需求被看見，進而改變它成為高樓之命運。'
    }
  },
  {
    district: {
      name: '泰山',
      type: DistrictType.Mountain,
      color: DistrictColor.Green
    },
    slideImage: 'other05_slides.jpg',
    name: '紀妤臻',
    facebook: 'https://www.facebook.com/taishan.daily',
    plan: {
      title: '看不見的泰山・看得見的生活',
      intro:
        '泰山就像一座看不見的城市，大家提起泰山、似乎想不出有什麼鮮明的特色，因此，我們想透過訪談，了解泰山居民們的生活經驗。我們聆聽的每一種聲音，都代表著不同的面貌。我們認為住在泰山的每一個人，其實都是泰山的一種生活樣貌，藉由本活動蒐集一張張居民們的面孔，試圖描繪出屬於泰山的輪廓。'
    }
  },
  {
    district: {
      name: '林口',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    slideImage: 'other06_slides.jpg',
    name: 'CO.LAB共作實驗室',
    facebook: 'https://www.facebook.com/CoLab2020/',
    plan: {
      title: 'microgreen',
      intro:
        'MICRO GREEN 運作的 環保減廢 是由「簡單行為」出發，從「小地方」開始，進行「由（家庭）內延伸至（社區）外」的改變，期待透過「遊戲」趣味及「藝術」創作二者的結合，引領社區伙伴能夠協同共作，進而創造出「綠」與「美」的新生活。'
    }
  },
  {
    district: {
      name: '永和',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    slideImage: 'other07_slides.jpg',
    name: '楫文社',
    facebook: 'https://www.facebook.com/boatingbook',
    plan: {
      title: '搭築文學的磚瓦－－永和藝文青年社造計畫',
      intro:
        '本企計畫由位於新北市永和區的獨立書店「楫文社」青年經營團隊發起，探訪永和在地文史，並以「文學寫作」為計劃主軸，串起地方參與。'
    }
  },
  {
    district: {
      name: '板橋',
      type: DistrictType.City,
      color: DistrictColor.Red
    },
    slideImage: 'other08_slides.jpg',
    name: '枋橋文化協會',
    facebook: 'https://www.facebook.com/groups/funciao',
    plan: {
      title: '枋橋城就是我的故事館',
      intro:
        '人要強韌，要扎根在生長的土地上。板橋都會區人口數高達56萬，但多數人不知道板橋原本有座枋橋城，它的建造歷史甚至比台北城還早，是台北地區第一座城堡，但板橋人對過去的歷史發展疏離，甚至可能很了解台北城卻不了解自己的社區。板橋也是個外來人口大於本地人口的都市，也因如此人與土地疏離，對生活環境、過去的歷史越來越生疏，因為不了解就無法對這塊土地產生情感。枋橋文化協會長年倡議，期待板橋有一座專屬故事館，能夠讓在地人更容易了解板橋的歷史脈絡，但是成立博物館或地方文史舘所需的資源龐大，因此我們設計一種民眾參與式的資料累積平台，讓實際的生活空間成為在地民眾的博物館。'
    }
  }
];
