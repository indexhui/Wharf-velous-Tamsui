import { Text, Link } from '@chakra-ui/react';

export const A25 = () => {
  return (
    <>
      <Text>
        150年前，1872年3月9日下午3點左右，英國得忌利士洋行客輪海龍號駛進淡水港，載來一位年輕乘客，他是加拿大長老教會宣教士馬偕(Rev.George
        Leslie Mackay)
      </Text>
      <Text>
        馬偕一落腳，便在他鍾愛的美麗河港待了三十年，三十年間，他以淡水作為宣教、醫療和教育的基地，造福無數臺灣人，最後他也埋骨在此化為臺灣的泥土，為淡水留下流傳150年的傳奇故事。
      </Text>

      <Text>詳細資訊請洽</Text>

      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0G245656224351531469&sid=0M199393671107774930"
      >
        活動網頁
      </Link>
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://youtu.be/Ehmmv9z21CM"
      >
        介紹影片
      </Link>
    </>
  );
};
