import style from '../styles/Sen.Timeline.module.css'

export default function sen_timeline_item({date, children}){
    return (
        <>
            <li className={style.content}>
                <div className={style.date_area}>
                    {date}
                </div>
                <h2>
                    {children}
                </h2>
            </li>
        </>
    )
}