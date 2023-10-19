import { useEffect } from 'react'
import cls from './Main.module.scss'
import { useGetCharacterAllQuery } from '../../Services/characterServices';
import Character from '../../component/ui/card/Character';
import CharacterBanner from '../../component/ui/banner/CharactersBanner';
import ComicsBanner from '../../component/ui/banner/ComicsBanner';

const Main = () => {
    const { data, error, isLoading } = useGetCharacterAllQuery({ offset: '0', searchString: '' });

    return (
        <div className={cls.root}>
            <CharacterBanner/>
            <ComicsBanner/>
            <div className={cls.characters_cont}>
                {data ?
                    data.map(item => Character({ id: item.id, img: `${item.thumbnail.path}.${item.thumbnail.extension}`, name: item.name }))
                    : ''
                }
            </div>
        </div>
    )
}
export default Main