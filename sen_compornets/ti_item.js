import styles2 from '../styles/Menber1.module.css'

export default function ti_item({days, children}){
    return (
        <>
            <li className={styles2.content_li}>
                <div>
                    <div className={styles2.date_small}>
                        {days}
                    </div>
                    <h2>
                        {children}
                    </h2>
                </div>
            </li>
        </>
    )
}