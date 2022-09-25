import style from '../styles/Sen.Timeline.module.css'

export default function Timeline({children}){
    return (
        <>  
            <div className={style.sideline}>
                <ul>
                    {children}
                </ul>
            </div>
        </>
    )
}