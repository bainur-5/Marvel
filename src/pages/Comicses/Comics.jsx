import { useState } from 'react'
import Character from '../../component/ui/card/Character'
import Search from '../../component/ui/search/Search'
import cls from './Characters.module.scss'
import { useGetComicsAllQuery } from '../../Services/comicsServices'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { comicsID } from '../../Redux/idSlice/idSlice'
const Comics = () => {
    const navigate = useNavigate()
    const disptach = useDispatch()
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
            setSearch
            (''); // Очистить поиск, если поле пустое
        }
    };
    
    const click = (id) =>{
        disptach(comicsID(id))
        navigate('/onComics')
    }
    return (
        <div className={cls.root}>
            <div className={cls.search}>
                <Search onChange={(e) => onSearch(e)} />
            </div>
            <div className={cls.contCards}>
                {data ?
                    data.map(item => (
                        <Character
                            id={item.id}
                            img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            name={item.name || item.title || item.firstName}
                            nameClass='comics_card'
                            onClick={() => click(item.id)}
                        />
                    ))
                    : ''
                }
            </div>
        </div>
    )
}
export default Comics