import { Text, Link } from '@chakra-ui/react';

export const A20 = () => {
  return (
    <>
      <Text>
        展覽以「渡海來台」─講述馬偕博士在台奉獻之舉，呈現他奔赴各地為民眾診療、宣教的事蹟，及留下的珍貴文字與影像紀錄，保存臺灣當時的地理與人文風貌。
      </Text>

      <Text>
        「興學啟蒙」述說馬偕與其家族後代在淡水辦學的故事，淡水女學堂與淡江中學的設置，開啟了臺灣女子受教育與培育淡水在地人才的佳話。
      </Text>
      <Text>
        「關懷鄉土」展示馬偕與家族成員的照片、繪畫與文學，傳達馬偕家族對臺灣的愛。
      </Text>
      <Text>
        透過三大主題引領民眾深入淺出地瞭解150年來馬偕的精神如何影響臺灣與淡水。
      </Text>
      <Text>詳細資訊請洽</Text>

      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0G245656224351531469&sid=0M117456501318020779"
      >
        活動網頁
      </Link>
    </>
  );
};
