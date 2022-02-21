import { Text, Link } from '@chakra-ui/react';

export const A3 = () => {
  return (
    <>
      <Text>
        故事牆描繪從「馬偕上陸到淡水」一直至「馬偕日」的在地故事，歡迎搭乘捷運來到淡水，欣賞馬偕在淡水的遺留下的點滴足跡。
      </Text>
      <Link href="https://www.youtube.com/watch?v=oo_cltIiZO8" isExternal>
        故事牆介紹影片
      </Link>
      <Link href="hhttps://www.mackay.org.tw/ch/">
        相關詳情請洽辦理單位官方網頁
      </Link>
      <Text>或</Text>
      <Link href="https://www.facebook.com/mackaychurchevents1/)">書專頁</Link>
    </>
  );
};
