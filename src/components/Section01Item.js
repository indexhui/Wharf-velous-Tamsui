import { useState, useEffect } from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import useSpace from '../hooks/useSpace.js';
import CardActivity from './CardActivity';
import Filter from './Filter';
// import A1 from './section1Content/A1';
import {
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
  A20,
  A21,
  A22,
  A23,
  A24,
  A25,
  A26,
  A27,
  A28,
  A29,
  A30,
} from './section1Content';

import a1 from '../assets/images/A1.jpeg';
import a2 from '../assets/images/A2.jpg';
import a3 from '../assets/images/A-3.png';
import a4 from '../assets/images/A-4.png';
import a5 from '../assets/images/A-5.png';
import a6 from '../assets/images/A-6.png';
import a7 from '../assets/images/A-7.jpg';
//0321新增加
import a8 from '../assets/images/A8.png';
import a9 from '../assets/images/A9.jpg';
import a10 from '../assets/images/A10.jpg';
import a11 from '../assets/images/A11.jpg';
import a12 from '../assets/images/A12.jpeg';
import a13 from '../assets/images/A13.jpg';
import a14 from '../assets/images/A14.jpg';
import a15 from '../assets/images/A15.jpg';
import a16 from '../assets/images/A16.jpg';
import a17 from '../assets/images/A17.jpg';
import a18 from '../assets/images/A18.jpg';
import a19 from '../assets/images/A19.jpg';
import a20 from '../assets/images/A20.jpg';
import a21 from '../assets/images/A21.jpg';
import a22 from '../assets/images/A22.jpg';
import a23 from '../assets/images/A23.jpg';
import a24 from '../assets/images/A24.jpg';
import a25 from '../assets/images/A25.jpg';
import a26 from '../assets/images/A26.jpg';
import a27 from '../assets/images/A27.jpg';
import a28 from '../assets/images/A28.jpg';

const activities = [
  {
    month: 3,
    time: '3月12日 15:00',
    name: '時光的邀請—歡響滬尾港快閃活動',
    organizer: '新北市立淡水古蹟博物館',
    location: '淡水限定快閃',
    introduction:
      '160年前淡水成為國際港岸，許多人隨著商船來到淡水，他們將在三月的某一個瞬間快閃到淡水街頭，帶來160年前的生活故事！（照片攝影：陳若軒）',
    modal: <A1 />,
    image: a1,
  },
  {
    month: [3, 4, 5, 6, 7, 8, 9, 10],
    time: '3月至10月',
    name: '港動淡水文化行旅',
    organizer: '新北市立淡水古蹟博物館',
    location: '淡水地區',
    image: a2,
    modal: <A2 />,
  },
  {
    month: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    name: '馬偕上陸淡水150週年故事牆',
    time: '即日起至112年1月',
    organizer: '台灣基督長老教會淡水教會',
    // location: '',
    image: a3,
    modal: <A3 />,
  },
  {
    month: 3,
    name: '「淡水開港160年特展」開幕式暨音樂會',
    time: '3月7日辦理',
    organizer: '淡江大學資訊與圖書館學系、淡水維基館',
    location: '淡江大學文錙音樂廳',
    image: a7,
    modal: <A7 />,
  },
  {
    month: 3,
    name: '馬偕上陸150週年活動暨感恩禮拜',
    time: '3月9日辦理',
    organizer: '台灣基督長老教會淡水教會',
    location: '淡水地區',
    image: a4,
    modal: <A4 />,
  },
  {
    month: 3,
    name: '馬偕來臺暨臺灣基督長老教會淡水教會150週年紀念郵摺發行',
    time: '3月9日發行',
    organizer: '台灣基督長老教會淡水教會、中華郵政股份有限公司',
    location: '淡水地區',
    image: a5,
    modal: <A5 />,
  },
  {
    month: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    name: '港動淡水－LINE原創貼圖',
    organizer: '新北市立淡水古蹟博物館',
    time: '3月起',
    location: '線上活動',
    image: a8,
    modal: <A10 />,
  },

  {
    month: 3,
    name: '淡水開港好禮戳戳樂',
    organizer: '新北市立淡水古蹟博物館',
    time: '3月12日至3月31日',
    location: '淡水海關碼頭、得忌利士洋行、淡水紅毛城、小白宮',
    image: a9,
    modal: <A11 />,
  },
  {
    month: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    name: '《淡古大對決》、《淡水開港一百六十年》影片播映',
    organizer: '新北市立淡水古蹟博物館',
    time: '每日開館時間輪播放映',
    location: '得忌利士洋行三角屋',
    image: a10,
    modal: <A12 />,
  },

  {
    month: 4,
    organizer: '新北市立淡水古蹟博物館',
    name: '海賊家族─淡水開港鐳戰賽',
    time: '4月4日 9:00、11:00',
    location: '淡水海關碼頭',
    image: a11,
    modal: <A13 />,
  },
  {
    month: 4,
    organizer: '新北市立淡水古蹟博物館',
    name: '淡水開港設關故事派對─歡迎光臨1862',
    time: '4月2日、4月9日、4月23日、4月30日 16:30',
    location: '淡水海關碼頭',
    image: a12,
    modal: <A14 />,
  },
  // {
  //   month: 4,
  //   time: '',
  //   name: '四月活動預告',
  //   organizer: '港動淡水劇場演出、港動文化行旅等精彩活動。',
  //   location: '',
  //   image: a6,
  //   modal: <A6 />,
  //   isNotice: true,
  // },
  // {
  //   month: 5,
  //   time: '',
  //   name: '五月活動預告',
  //   organizer: '關關PASS！淡水開港設關160周年特展開展。',
  //   location: '',
  //   image: a6,
  //   isNotice: true,
  // },
  {
    month: [4, 5, 6],
    name: '新北市111年度港動淡水-國際小學堂競賽',
    organizer: '新北市政府教育局',
    time: '邀您一起國際遊學，認識淡水歷史古蹟。',
    location: '競賽地點：線上競賽',
    modal: <A15 />,
    image: a13,
  },
  {
    month: 5,
    name: '淡水區國中小美術班古蹟之美寫生比賽及聯展',
    organizer:
      '新北市立淡水古蹟博物館、新北市立淡水國民中學、新北市淡水區淡水國民小學',
    time: '5月5日-5月24日 每日開館時間',
    location: '淡水海關碼頭B棟倉庫',
    modal: <A16 />,
    image: a14,
  },
  {
    month: [5, 6, 7, 8, 9, 10],
    name: '「臺灣女婿馬偕斜槓家族」特展',
    organizer: '新北市立淡水古蹟博物館',
    time: '5月7日-12月15日 每日開館時間',
    location: '淡水海關碼頭A棟洋樓',
    modal: <A20 />,
    image: a20,
  },
  {
    month: [5, 6, 7, 8, 9, 10],
    name: '關關PASS！─淡水開港設關160周年特展',
    organizer: '新北市立淡水古蹟博物館',
    time: '5月7日起 每日開館時間',
    location: '淡水海關碼頭C棟倉庫',
    modal: <A17 />,
    image: a15,
  },
  {
    month: [5, 6, 7, 8, 9, 10],
    name: '滬尾講堂',
    organizer: '新北市立淡水古蹟博物館',
    time: '9月17日、10月15日,1400-16:00',
    location: '淡水海關碼頭、淡水木下靜涯舊居',
    modal: <A18 />,
    image: a16,
  },
  {
    month: 5,
    name: '「淡水茶金之秘」茶文化體驗講座',
    organizer: '新北市淡水休閒農業協會',
    time: '5月22日 14:00、5月28日 14:00',
    location: '公司田溪程氏古厝',
    modal: <A19 />,
    image: a17,
  },
  {
    month: 6,
    time: '6月16日、6月17日',
    name: '第一屆古蹟文化國際論壇',
    organizer: '新北市立淡水古蹟博物館',
    location: '淡江大學有蓮國際會議廳',
    image: a18,
    modal: <A21 />,
    // isNotice: true,
  },
  {
    month: 5,
    time: '5月9日-5月29日 開館時間 \n5月21日、5月22日 14:00-16:00',
    name: '2022 異人茶金 淡水茶旅學',
    organizer: '新北市立圖書館淡水分館',
    location: '新北市立圖書館淡水分館',
    image: a19,
    modal: <A22 />,
    // isNotice: true,
  },
  {
    month: 6,
    time: '6/1-6/29 開館時間 \n6/12、6/18、6/25 10:00-12:00 \n6/17 19:00-21:00',
    name: '閱讀馬偕',
    organizer: '新北市立圖書館淡水分館',
    location: '新北市立圖書館淡水分館、淡水地區、google meet',
    image: a21,
    modal: <A23 />,
    // isNotice: true,
  },
  {
    name: '馬偕150航向福爾摩沙─淡水',
    month: [7, 8, 9, 10, 11, 12],
    time: '7月17日-12月4日 每日開館時間',
    organizer: '新北市立淡水古蹟博物館',
    location: '得忌利士洋行前棟',
    image: a23,
    modal: <A25 />,
  },
  {
    name: '2022 異人茶金 淡水茶旅學',
    month: 7,
    time: '7月9日、7月16日 14:00-16:00',
    organizer: '新北市立圖書館淡水分館',
    location: '新北市立圖書館淡水分館',
    image: a24,
    modal: <A26 />,
  },
  //保留光音為首項目
  {
    month: 7,
    time: '音樂演出：7月9日 14:00-20:00 \n系列活動：7月2日至7月31日',
    name: '「光音淡水」系列活動',
    organizer: '新北市立淡水古蹟博物館',
    location: '淡水海關碼頭、淡水地區',
    image: a22,
    modal: <A24 />,
  },
  {
    month: 8,
    name: '2022  NTPC Appreciation Tour',
    time: '8月19日',
    organizer: '新北市政府秘書處',
    location: '淡水地區',
    image: a25,
    modal: <A27 />,
  },
  {
    month: [8, 9, 10],
    name: '「淡水開港後唯一勝事：海上只剩下船」特展',
    time: '8月上旬-10月30日 每日開館時間',
    organizer: '新北市立淡水古蹟博物館',
    location: '滬水一方藝文空間5F',
    image: a26,
    modal: <A28 />,
  },
  {
    month: [7, 8, 9, 10, 11, 12],
    name: '馬偕故事藝廊',
    location: '淡水馬偕街',
    time: '公共空間',
    organizer: '淡水區公所',
    image: a27,
    modal: <A29 />,
  },
  {
    month: [7, 8, 9, 10, 11, 12],
    name: '「噶瑪蘭的牧者—馬偕牧師傳教在宜蘭」特展',
    location: '滬尾偕醫館',
    time: '9月17日起至112年12月31日\n滬尾偕醫館開放時間',
    organizer: '台灣基督長老教會淡水教會、宜蘭縣史館',
    image: a28,
    modal: <A30 />,
  },
  // {
  //   month: 6,
  //   time: '',
  //   name: '六月活動預告',
  //   organizer: '古蹟文化國際論壇、基督長老教會淡水教會馬偕日相關活動。',
  //   location: '',
  //   image: a6,
  //   modal: <A8 />,
  //   isNotice: true,
  // },
  // {
  //   month: 7,
  //   time: '',
  //   name: '七月活動預告',
  //   organizer: '下半年(至12月)將會有更多開港設關暨馬偕來臺精彩活動，敬請期待！',
  //   location: '',
  //   image: a6,
  //   modal: <A9 />,
  //   isNotice: true,
  // },
];

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

const Section01Item = () => {
  const { space } = useSpace();
  const [filtered, setFiltered] = useState([]);
  const [activeMonth, setActiveMonth] = useState(0);

  useEffect(() => {
    setFiltered(activities);
  }, []);

  return (
    <Flex direction="column" w="100%" align="center">
      <Filter
        activities={activities}
        setFiltered={setFiltered}
        activeMonth={activeMonth}
        setActiveMonth={setActiveMonth}
      />
      <MotionGrid
        layout
        w={space}
        pt="30px"
        pb="60px"
        px={{ base: '20px', md: '30px' }}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={6}
      >
        <AnimatePresence>
          {filtered
            .slice(0)
            .reverse()
            .map(activity => (
              <MotionGridItem
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                key={activity.name}
              >
                <CardActivity colSpan={1} {...activity} />
              </MotionGridItem>
            ))}
        </AnimatePresence>
      </MotionGrid>
    </Flex>
  );
};

export default Section01Item;
