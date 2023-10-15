import cls from './card.module.scss'
const Character = () => {

    return (
        <div className={cls.root}>
            <div className={cls.character_card}>
                <div className={cls.character_img}>
                </div>
                <p className={cls.character_title}>
                    Iron Man
                </p>
            </div>
            <div className={cls.character_card}>
                <div className={cls.character_img}>
                </div>
                <p className={cls.character_title}>
                    Iron Man
                </p>
            </div>
        </div>

    )
}
export default Character