import { Text, Link } from '@chakra-ui/react';

export const A33 = () => {
  return (
    <>
      <Text>
        2022年適逢淡水開港設關160周年，本展覽由新北市國際藝術村的八組駐村藝術家聯合展出，以藝術家的視野詮釋重新「淡水」，並奠基於淡水開港設關及馬偕來臺等歷史背景，進一步發展個人創作。
        作品型態橫跨刺繡、繪畫、攝影、採集、雕塑、皮革、裝置藝術、新媒體及複合媒材等眾多領域。
      </Text>
      <Link
        fontWeight="600"
        color="umi"
        href="https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0G245656224351531469&sid=0M325521528254580513"
        isExternal
      >
        <Text>詳細資訊請參考活動網頁。</Text>
      </Link>
    </>
  );
};
