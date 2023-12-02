import services from "./services";
import {useEffect, useState} from "react";
import HeaderItems from "../../components/header-items";
import Item from "../../components/item";
import {CategoriesContainer, Container, ItemsContainer} from "./styles";

function Items () {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        services.all()
            .then((items) => {
                setItems(items.data.items.data);
            })
    }, [])
    
    return (
        <div>
            <HeaderItems />
            <Container>
                <CategoriesContainer>

                </CategoriesContainer>
                <ItemsContainer>
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
                </ItemsContainer>
            </Container>
        </div>
    )
}

export default Items;
