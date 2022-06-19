import React from "react";
import {SelectOptions} from "../SelectOptions/SelectOptions";
import {Map} from "../Map/Map"

export const MapMain = () =>{

    return(
        <>
            <div className="map-main">
                <Map/>
                <SelectOptions/>
            </div>
        </>
    )

}
