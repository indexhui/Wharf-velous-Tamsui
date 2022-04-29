import { Text, Link } from '@chakra-ui/react';

export const A15 = () => {
  return (
    <>
      <Text>您知道淡水開港的典故嗎？</Text>
      <Text>您瞭解馬偕博士來臺的淵源嗎？</Text>
      <Text>
        競賽報名期間：即日起~5/13(五)，別錯過國際小學堂，趕快組隊報名參加。
      </Text>
      <Text>更詳盡的資訊，請洽新北市國際教育資訊網！</Text>

      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.international-education.ntpc.edu.tw/ischool/publish_page/373/"
      >
        活動網頁
      </Link>
    </>
  );
};
