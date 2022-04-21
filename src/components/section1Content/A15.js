import { Text, Link } from '@chakra-ui/react';

export const A15 = () => {
  return (
    <>
      <Text>您知道淡水開港的典故嗎？</Text>
      <Text>您瞭解馬偕博士來臺的淵源嗎？</Text>
      <Text>
        競賽報名期間：4/15(五)-5/13(五)，別錯過國際小學堂，趕快組隊報名參加。
      </Text>
      <Text>詳細資訊請洽</Text>

      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.international-education.ntpc.edu.tw/ischool/publish_page/373/"
      >
        新北市國際教育資訊網
      </Link>
    </>
  );
};
