import { useState, useEffect } from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import CardActivity from './CardActivity';
import Filter from './Filter';
// import A1 from './section1Content/A1';
import { A1, A2, A3, A4, A5, A6, A7, A8, A9 } from './section1Content';

import a1 from '../assets/images/a-1.jpg';
import a2 from '../assets/images/A-2.png';
import a3 from '../assets/images/A-3.png';
import a4 from '../assets/images/A-4.png';
import a5 from '../assets/images/A-5.png';
import a6 from '../assets/images/A-6.png';

const activities = [
  {
    month: 3,
    time: '3月12日 15:00',
    name: '歡迎光臨1862淡水快閃',
    organizer: '新北市立淡水古蹟博物館',
    location: '淡水限定快閃',
    introduction:
      '160年前淡水成為國際港岸，許多人隨著商船來到淡水，他們將在三月的某一個瞬間快閃到淡水街頭，帶來160年前的生活故事！（照片攝影：陳若軒）',
    modal: <A1 />,
    image: a1,
  },
  {
    month: 3,
    time: '3月至7月',
    name: '港動文化行旅',
    organizer: '新北市立淡水古蹟博物館',
    location: '淡水地區',
    image: a2,
    modal: <A2 />,
  },
  {
    month: 3,
    name: '馬偕上陸淡水150週年故事牆',
    time: '即日起至112年1月',
    organizer: '台灣基督長老教會淡水教會',
    location: '',
    image: a3,
    modal: <A3 />,
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
    month: 4,
    time: '',
    name: '四月活動預告',
    organizer: '港動淡水劇場演出、港動文化行旅等精彩活動。',
    location: '',
    image: a6,
    modal: <A6 />,
  },
  {
    month: 5,
    time: '五月',
    name: '關關PASS！淡水開港設關160周年特展開展。',
    organizer: '',
    location: '',
    image: a6,
    modal: <A7 />,
  },
  {
    month: 6,
    time: '六月',
    name: '古蹟文化國際論壇、基督長老教會淡水教會馬偕日相關活動。',
    organizer: '',
    location: '',
    image: a6,
    modal: <A8 />,
  },
  {
    month: 7,
    time: '七月',
    name: '下半年(至12月)將會有更多開港設關暨馬偕來臺精彩活動，敬請期待！',
    organizer: '',
    location: '',
    image: a6,
    modal: <A9 />,
  },
];

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

const Section01Item = () => {
  const [filtered, setFiltered] = useState([]);
  const [activeMonth, setActiveMonth] = useState(0);

  useEffect(() => {
    setFiltered(activities);
  }, []);

  return (
    <Flex direction="column" w="100%" px="16px" align="center">
      <Filter
        activities={activities}
        setFiltered={setFiltered}
        activeMonth={activeMonth}
        setActiveMonth={setActiveMonth}
      />
      <MotionGrid
        layout
        w="100%"
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
          {filtered.map(activity => (
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
