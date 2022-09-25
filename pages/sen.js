import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Sen.module.css'//各自のcssに切り替え
import Timeline from '../sen_compornets/sen.timeline'
import Titem from '../sen_compornets/sen.timeline.item.js'

export default function Home() {
  return (
    <>
      <Head>
      <title>Portfolio-Sen</title>
      </Head>
      <div className={styles2.space_position}></div>

      <div className={styles2.img_position}>

        <Image src='/sen_icon.jpg'//各自のアイコン画像
          width={250}
          height={250}
          className={styles.image_circle}
        />
        <br></br>
        <br></br>
        Member
        <h1>Sen</h1>
        {/*
          <div className={styles2.icon_position}>
            
            <a charset="UTF-8" href="https://github.com/ss-informatics95">
              <Image src='/github.png'//各自のアイコン画像
              width={35}
              height={35}
              className={styles2.image_circle_github} />
            </a>
            &nbsp;
            
            <a charset="UTF-8" href="https://zenn.dev/informatics95">
              <Image src='/zenn.png'//各自のアイコン画像
              width={35}
              height={35}
              className={styles2.image_circle_qiita} />
            </a>
            &nbsp;

            <a href="mailto:ss.informatics95&#64;gmail.com">
              <Image src='/mail.png'//各自のアイコン画像
              width={35}
              height={35}
              className={styles2.image_circle_qiita} />
            </a>

          </div>
        */}
      </div>

      <div className={styles2.about_area}>
        <br></br>
        <h1>自己紹介</h1>
        IoTを研究テーマにしてる大学生。ハッカソンは駆け出したばかり。できる範囲で頑張っていきます。<br></br>
        触っている言語：Python, C, 時々Java
        <br></br>
        <br></br>
      </div>

      <div>
        <br></br>
        <h1 className={styles2.activity_area}>Activity</h1>
        <Timeline>
          <Titem date='2019年 4月'>
            東京電機大学理工学部情報システムデザイン学系 入学
          </Titem>

          <Titem date='2021年 9月'>
            IoE/M2Mソリューション研究室 配属
          </Titem>

          <Titem date='2022年 9月'>
            DOWNHILL 加入
          </Titem>

          <Titem date='2022年 秋'>
            ハッカソン参加予定
          </Titem>
        </Timeline>
      </div>
    </>
  )
}
