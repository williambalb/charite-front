import services from "./services";
import {useEffect, useState} from "react";

function Items () {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        services.all()
            .then((items) => {
                console.log(items)
            })
    }, [])
    
    return (
        <div>
            ITEMS
        </div>
    )
}

export default Items;
