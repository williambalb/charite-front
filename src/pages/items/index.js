import services from "./services";
import {useEffect, useState} from "react";
import HeaderItems from "../../components/header-items";
import Item from "../../components/item";

function Items () {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        services.all()
            .then((items) => {
                console.log(items.data.items.data);
                setItems(items.data.items.data);
            })
    }, [])
    
    return (
        <div>
            <HeaderItems />
            <div style={{top: "90px", position: "absolute", display: "flex", flexDirection: 'row', gap: "15px"}}>
                {items.map((item, key) => {
                    return (
                        <Item
                            key={key}
                            name={item.name}
                            userName={item.user_name}
                            description={item.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Items;
