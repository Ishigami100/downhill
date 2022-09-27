import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Menber1.module.css"; //各自のcssに切り替え

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio-betio</title>
      </Head>
      <div className={styles2.space_position}></div>
      <div className={styles2.img_position}>
        <Image
          src="/betio.jpeg" //各自のアイコン画像
          width={250}
          height={250}
          className={styles.image_circle}
        />
        <br></br>
        <br></br>
        student,engineer
        <h2>Betio</h2>
        <div className={styles2.icon_position}>
          {
            //This is github icon.You put github's link.
          }
          <a charset="UTF-8" href="https://github.com/kamlab-betio/">
            <Image
              src="/github.png" //各自のアイコン画像
              width={35}
              height={35}
              className={styles2.image_circle_github}
            />
          </a>
          &nbsp;
          {
            //This is twitter icon.You put twitter's link.
          }
          <a charset="UTF-8" href="https://www.△△△.jp/">
            <Image
              src="/twitter.png" //各自のアイコン画像
              width={35}
              height={35}
              className={styles2.image_circle_twitter}
            />
          </a>
          &nbsp;
          {
            //This is note icon.You put note's link.
          }
          <a charset="UTF-8" href="https://note.com/betio/">
            <Image
              src="/note.png" //各自のアイコン画像
              width={35}
              height={35}
              className={styles2.image_circle_qiita}
            />
          </a>
          &nbsp;
          {
            //This is qiita icon.You put qiita's link.
          }
          <a charset="UTF-8" href="https://qiita.com/betio">
            <Image
              src="/qiita.png" //各自のアイコン画像
              width={35}
              height={35}
              className={styles2.image_circle_qiita}
            />
          </a>
        </div>
      </div>
      <div className={styles2.about_area}>
        <br></br>
        <br></br>
        <div className={styles2.activity_area}>
          <h1>About me</h1>
          所属：東京電機大学 理工学部 情報システムデザイン学系
          IoE/M2Mソリューション研究室
          <br></br>
          研究：UAVと衛星画像を用いた災害対策車による災害把握システムの構築
          <br></br>
          <br></br>
          情報学を専攻しながら、オナーズプログラム(宇宙工学)に参加しています。
          <br></br>
          <br></br>
          よく使う言語は Python
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <div>
        <br></br>
        <h1 className={styles2.activity_area}>Activity</h1>
        <ul className={styles2.timeline}>
          <li>
            <div className={styles2.content_li}>
              <div className={styles2.date_small}>2019年4月</div>
              <h2 className={styles2.text_rule}>
                東京電機大学 理工学部 情報システムデザイン学系 入学
              </h2>
            </div>
          </li>

          <li>
            <div className={styles2.content_li_2}>
              <div className={styles2.date_small}>2021年4月</div>
              <h2 className={styles2.text_rule}>
                オナーズプログラム(宇宙工学) 参加
              </h2>
            </div>
          </li>

          <li>
            <div className={styles2.content_li_3}>
              <div className={styles2.date_small}>2022年4月</div>
              <h2 className={styles2.text_rule}>
                IoE/M2Mソリューション研究室 所属
              </h2>
            </div>
          </li>

          <li>
            <div className={styles2.content_li_4}>
              <div className={styles2.date_small}>2022年8月</div>
              <h2 className={styles2.text_rule}>
                PLATEAU Hack Challenge 2022 in ヒーローズ・リーグ（東京）参加
              </h2>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
