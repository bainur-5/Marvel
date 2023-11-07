import { useState } from 'react'
import Character from '../../component/ui/card/Character'
import Search from '../../component/ui/search/Search'
import cls from './Characters.module.scss'
import { useGetComicsAllQuery } from '../../Services/comicsServices'
const Comics = () => {
    const offset = 0
    const [search, setSearch] = useState('')
    const queryParameters = {
        offset: offset
    }
    if (search !== '') {
        queryParameters.search = search;
    }
    const { data, } = useGetComicsAllQuery(queryParameters)
    const onSearch = (e) => {
        const value = e.target.value;
        if (value !== '') {
            setSearch(value);
        } else {
            setSearch(''); // Очистить поиск, если поле пустое
        }
    };
    return (
        <div className={cls.root}>
            <div className={cls.search}>
                <Search onChange={(e) => onSearch(e)} />
            </div>
            <div className={cls.contCards}>
                {data ?
                    data.map(item => Character({
                        id: item.id,
                        img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        name: item.name || item.title || item.firstName,
                        nameClass: 'comics_card'
                    }))
                    : ''
                }
            </div>
        </div>
    )
}
export default Comics