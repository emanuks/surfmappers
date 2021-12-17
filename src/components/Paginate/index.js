import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { PaginateContainer } from "./styles";

export default function Paginate({ currentPage = 0 }) {
    const array = [0,1,2,3,4];

    return(
        <PaginateContainer>
            {array.map(elem => {
                if (elem === currentPage) {
                    return <Ionicons key={elem} name="ellipse" size={10} color="#5f5f5f" />
                } else {
                    return <Ionicons key={elem} name="ellipse" size={10} color="#AFAFAF" />
                }
            })
        }
        </PaginateContainer>
    );
}