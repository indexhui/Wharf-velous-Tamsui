import { Text, Link } from '@chakra-ui/react';

export const A12 = () => {
  return (
    <>
      <Text>
        《淡水開港一百六十年》及《淡古大對決》二支影片即日起於得忌利士洋行三角屋公開播映，歡迎休息參觀！
      </Text>

      <Text>
        《淡水開港一百六十年》特展影片(約9分39秒)，由淡江大學林信成教授製作授權，講述1862年淡水因天津條約而開港通商的歷史脈絡。
      </Text>
      <Link
        fontWeight="600"
        color="umi"
        href="https://www.youtube.com/watch?v=IUplG2afrRw"
        isExternal
      >
        影片連結
      </Link>
      <Text>
        《淡古大對決》(約30秒)串聯本館各古蹟景點，帶領大家輕鬆走訪淡水古蹟。
      </Text>
      <Link
        fontWeight="600"
        color="umi"
        href="https://www.youtube.com/watch?v=XYLw1NGzgwE"
        isExternal
      >
        影片連結
      </Link>
    </>
  );
};
