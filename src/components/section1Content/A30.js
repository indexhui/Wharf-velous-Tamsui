import { Text, Link } from '@chakra-ui/react';

export const A30 = () => {
  return (
    <>
      <Text>
        2022年為馬偕來臺宣教150周年，台灣基督長老教會淡水教會與宜蘭縣史館合作，舉辦「噶瑪蘭的牧者—馬偕牧師傳教在宜蘭」特展。展覽源自於2020年宜蘭縣史館接洽台灣基督長老教會淡水教會，承教會慷慨同意借出「宣教洗禮簿」攜回宜蘭進行數位化之研究展示。
      </Text>

      <Text>開幕式：9月17日（六）15：00 於淡水禮拜堂辦理。</Text>

      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.mackay.org.tw/ch/aboutnews/%E6%B7%A1%E6%B0%B4%E9%95%B7%E8%80%81%E6%95%99%E6%9C%83/1796-%E3%80%90%E6%95%99%E6%9C%83%E6%B6%88%E6%81%AF%E3%80%91%E5%99%B6%E7%91%AA%E8%98%AD%E7%9A%84%E7%89%A7%E8%80%85%E2%80%94%E9%A6%AC%E5%81%95%E7%89%A7%E5%B8%AB%E5%82%B3%E6%95%99%E5%9C%A8%E5%AE%9C%E8%98%AD.html"
      >
        相關詳情請洽辦理單位官方網頁
      </Link>
    </>
  );
};
