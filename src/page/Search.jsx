import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";

function Search() {
    const [searchParams] = useSearchParams();
    const param = searchParams.get('animal');
    const reg = getRegExp(param);

    const filterdData = data.filter(el => el.name.match(reg));

    return (
        <ul>
            {filterdData.map(el => (
                <li key={el.id}>
                    <Link to={`/detail/${el.id}`}>
                        <img src={el.img} />
                        <div>{el.name}</div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Search;