import services from "./services";
import {useEffect, useState} from "react";
import HeaderItems from "../../components/header-items";

function Items () {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        services.all()
            .then((items) => {
                console.log(items.data.items.data)
            })
    }, [])
    
    return (
        <div>
            <HeaderItems />
        </div>
    )
}

export default Items;
