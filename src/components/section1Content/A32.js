import { Text, Link } from '@chakra-ui/react';

export const A32 = () => {
  return (
    <>
      <Text>
        坐落在大漢溪旁的新北市美術館於今年策劃「新北市美術館移地行動」，並與淡水古蹟博物館及板橋435
        藝文特區串連合作，共同推出「xoxo
        我們與自然的距離」展覽，探尋位於流域旁的淡水、板橋、坪林等地，用藝術回溯河流和城市相伴的歷史。
      </Text>
      <Link
        fontWeight="600"
        color="umi"
        href="https://www.tshs.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G252620780150430418&bdate=2022-10-18&disp=2&sid=0M284634632283063557"
        isExternal
      >
        <Text>展覽介紹</Text>
      </Link>
    </>
  );
};
