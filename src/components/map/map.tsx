import React, { } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Point
} from "react-simple-maps";
// import chroma from 'chroma-js';
// import { geoPath } from "d3-geo";
// import ReactTooltip from "react-tooltip";
// import { geoTimes } from "d3-geo-projection";
// import mapData1 from './world-10m';
import mapData2 from './world';
// import mapData3 from './ch';

// const mapData1 = require('./world-10m.json');
// const mapData2 = require('./world.json');
// const mapData3 = require('./ch.json');

// const geoPaths = [mapData1, mapData2, mapData3];

// const getRandomInt = (min: number, max: number) =>
//     Math.floor(Math.random() * (max - min + 1) + min);

// const colorScale = chroma.brewer.Oranges.slice(1);

// const colors: Array<any> = [];
// for (let i = 0; i < 180; i++) {
//     let aa = colorScale[getRandomInt(0, colorScale.length - 1)];
//     colors.push(aa);
// };


interface MapProps {
    onCountryClick: Function,
    setContent: Function,
    countries: any[],
    selectedCountries: any[],
    paths: {}
}

const Map: React.FC<MapProps> = ({ onCountryClick, setContent, countries, selectedCountries, paths }) => {

    const state = {
        detail: false,
        paths: mapData2,
        center: [10, 45] as Point,
        zoom: 1,
    }

    const switchPaths = (country: any) => {
        // const path = geoPath().projection(projection())
        // const centroid = projection().invert(path.centroid(geography))
        // const { detail } = state;
        // setState({
        //     ...state,
        //     countrySelected: geography.properties.ISO_A2
        // });

        if (onCountryClick && country) {
            onCountryClick(country)
        }
    };

    // const getCountryStyles = (geo: any, i: number) => {
    //     const { NAME, ISO_A2 } = geo.properties;
    //     let effectiveCountry = false;
    //     if (countries.find(c => c === ISO_A2))
    //         effectiveCountry = true;

    //     let fillColor = effectiveCountry ? colors[i] : 'grey';

    //     return {
    //         default: {
    //             fill: state.countrySelected === NAME ? 'green' : fillColor,
    //             outline: "none"
    //         },
    //         hover: {
    //             fill: 'green',
    //             outline: "none"
    //         },
    //         pressed: {
    //             outline: "none"
    //         }
    //     }
    // }

    return (
        <ComposableMap projection="geoMercator">
            <ZoomableGroup center={state.center} zoom={0.8} >
                <Geographies geography={paths} >
                    {({ geographies }: any) =>
                        geographies.map((geo: any, i: any) => {
                            const { ISO_A2 } = geo.properties;
                            let fillColor = '#ece8e8';
                            // let statusColors = ['#99bbff', '#6666ff', '#0000cc']
                            const countrySelected = selectedCountries.find(c => c.ISO_A2 === ISO_A2)
                            const country = countries.find(c => c.ISO_A2 === ISO_A2)
                            if (country) {
                                fillColor = countrySelected ? '#0000cc' : '#99bbff';
                            }
                            const contryStyle = {
                                default: {
                                    fill: fillColor,
                                    outline: "none"
                                },
                                hover: {
                                    fill: countrySelected ? '#0000cc' : '#6666ff',
                                    outline: 'black'
                                },
                                pressed: {
                                    fill: '#0000cc',
                                    outline: "none"
                                }
                            }
                            return (
                                <Geography
                                    key={
                                        (geo.properties.ISO_A3 || geo.properties.GID_1) + i
                                    }
                                    geography={geo}
                                    onMouseUp={() => switchPaths(country)}
                                    onMouseEnter={() => {
                                        // const { NAME, POP_EST } = geo.properties;
                                        setContent(geo.properties);
                                    }}
                                    onMouseLeave={() => {
                                        setContent({ NAME: '' });
                                    }}
                                    style={contryStyle}
                                />
                            )
                        })
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
}

export default React.memo(Map);
