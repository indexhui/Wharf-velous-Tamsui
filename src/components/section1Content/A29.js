import { Text, Link } from '@chakra-ui/react';

export const A29 = () => {
  return (
    <>
      <Text>
        淡水區公所於「馬偕街」打造「馬偕故事藝廊」，特別採用陳澄波先生、淡水長老教會呂玉林長老及多位淡水知名畫家作品，呈現出宣教士馬偕來臺「宣教」、「醫療」、「教育」、「性別平權」、為協助農業引進九種蔬果等貢獻。12幅作品各有一個QR
        Code，只要用手機掃描，就可以欣賞相關影音故事。
      </Text>

      <Text>相關詳情請洽</Text>

      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.tamsui.ntpc.gov.tw/home.jsp?id=2b519b334822681d&act=be4f48068b2b0031&dataserno=0595567f95d1666a149cbeffd5d62727&mserno=682f2fe2ab86c886ee9bfeba67a73fe4"
      >
        辦理單位官方網頁
      </Link>
    </>
  );
};
