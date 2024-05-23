import styles from './Banner.module.css'

export default function Banner({ProfileImg}){
    return(
        <section className={styles.Banner}>
            <img src={ProfileImg} alt=''>
            </img>
        </section>
    )
}