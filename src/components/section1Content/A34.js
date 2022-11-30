import { Text, Link } from '@chakra-ui/react';

export const A34 = () => {
  return (
    <>
      <Text>
        適逢虎年尾聲，12月「光映淡水」系列活動以「貓」為主題，在淡水海關碼頭推出貓咪拍照裝置、更打造聖誕貓咪光影廊道，歡迎喜愛貓咪的民眾前來打卡朝聖。
        還有周末主題市集、躲貓貓闖關遊戲、學校聯合耶誕音樂會、親子派對及遊輪煙火Cat
        Party等精彩活動等著您！
      </Text>
      <Link
        fontWeight="600"
        color="umi"
        href="https://www.tshs.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G252620780150430418&bdate=2022-11-25&disp=2&sid=0M320562146869873056"
        isExternal
      >
        <Text>各系列活動詳細資訊請參考活動網頁。</Text>
      </Link>
    </>
  );
};
