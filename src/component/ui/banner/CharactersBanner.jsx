import cls from './banner.module.scss'
const CharacterBanner = () => {
    return (
        <>
            <div className={cls.character_cont}>
                <div className={cls.character_card}></div>
                <div className={cls.character_card}></div>
                <div className={cls.character_card}></div>
                <div className={cls.character_card}></div>
                <div className={cls.character_card}></div>
                <div class={cls.curved_box}>
                    <div class={cls.content}>
                    </div>
                </div>

            </div>
        </>
    )
}
export default CharacterBanner