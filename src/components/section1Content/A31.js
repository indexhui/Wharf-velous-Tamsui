import { Text, Link } from '@chakra-ui/react';

export const A31 = () => {
  return (
    <>
      <Text>
        紀念馬偕來台150週年，感恩馬偕博士對台灣在宗教、醫學、教育等貢獻，台灣星奇兒創藝協會的慢飛天使們在陳穎君老師的帶領下，循著馬偕博士開創女學堂的故事，從新北市淡水出發，沿著烏來到宜蘭的傳教路線，在旅遊中體驗環境，發展具體學習與社區互動的藝術創作與文創設計成果展。
      </Text>

      <Text>詳細資訊請洽</Text>

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
    </>
  );
};
