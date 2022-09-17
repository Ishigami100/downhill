import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Menber1.module.css'//各自のcssに切り替え
import Timeline_Item from '../sen_compornets/ti_item.js'

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
        {
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
        }
      </div>

      <div className={styles2.about_area}>
        <br></br>
        <div class="normal">
        <h1>自己紹介</h1>
        ハッカソン駆け出したばかりの大学生。できる範囲で頑張っていきます。
        </div>
        <h2>触っている言語</h2>
        Python C C++ 時々Java
        <br></br>
        <br></br>
      </div>

      <div>
        <br></br>
        <h1 className={styles2.activity_area}>Activity</h1>
        <ul className={styles2.timeline}>
          <li className={styles2.content_li}>
            <div>
              <div className={styles2.date_small}>2019年4月</div>
              <h2 className={styles2.text_rule}>東京電機大学理工学部情報システムデザイン学系 入学</h2>
            </div>
          </li>

          <Timeline_Item days='2022年 4月'>
            IoR/M2Mソリューション研究室 配属
          </Timeline_Item>

          <li className={styles2.content_li}>
            <div>
              <div className={styles2.date_small}>2022年9月</div>
              <h2>DOWNHILL 加入</h2>
            </div>
          </li>
          
          <li className={styles2.content_li}>
            <div className={styles2.date_small}>2022年秋</div>
            <h2>ハッカソン参加予定</h2>
          </li>
        </ul>
      </div>
    </>
  )
}
