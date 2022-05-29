import { Text, Link } from '@chakra-ui/react';

export const A23 = () => {
  return (
    <>
      <Text>
        今年是馬偕博士淡水上岸的150週年紀念，經由閲讀活動的傳遞，展示各種多元不同思維的觀點，讓民眾更了解這位影響台灣的重要人物。
      </Text>
      <Text>
        淡水分館於館內佈置「閱讀馬偕」書展，雲端說故事由《淡水河邊的神奇馬偕》一書作者粘忘凡（蕃薯姐姐）結合繪本故事講述馬偕博士初到台灣時學習台語的故事與留下的足跡及對台灣的影響和貢獻，從不同的角度認識馬偕博士，大人、小孩一起在家開開心心聽故事，還可以輕輕鬆鬆學台語喔！
      </Text>
      <Text>
        雲端創藝由「星奇兒創意協會」陳穎君老師分享線上馬偕月星宇展~談大腦理論結合藝術創作！以淡水深度旅遊體驗談人文故事對藝術創作的重要性，也讓大家對身心障礙朋友的藝術啟發加法教育有所了解。
      </Text>
      <Text>
        戶外走讀由旅學堂吳峻毅老師與淡水女路第一屆女性導覽員陳怡瑾共同帶路，搭配真人行動劇，引導聽眾瞭解文化的多元學習「尊重」他人與自己的不同，隨馬偕與聰明發現更多淡水的故事，勇敢、堅定、具韌性的見面會。
      </Text>
      <Text>活動詳細資訊請洽</Text>

      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.library.ntpc.gov.tw/"
      >
        新北市立圖書館官網
      </Link>
      <br />
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.facebook.com/NTCL.251"
      >
        新北市立圖書館淡水分館臉書專頁
      </Link>
      <br />
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.facebook.com/tamsuitraveler2019"
      >
        旅學堂臉書專頁
      </Link>
    </>
  );
};
