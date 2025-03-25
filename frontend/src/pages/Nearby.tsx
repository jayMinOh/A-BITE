import React, { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Circle,
    useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/styles/nearby.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import {useLoading} from "../hooks/useLoading";

const DefaultIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMarker = () => {
    const [position, setPosition] = useState<L.LatLng | null>(null);
    const [accuracy, setAccuracy] = useState<number | null>(null);

    const { setIsLoading } = useLoading();

    const map = useMapEvents({
        locationfound: (e: L.LocationEvent) => {
            setPosition(e.latlng);
            setAccuracy(e.accuracy / 2);
            map.setView(e.latlng, 16);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        },
        locationerror: (e: L.ErrorEvent) => {
            alert("위치를 찾을 수 없습니다: " + e.message);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        },
    });

    useEffect(() => {
        map.locate({ setView: true, maxZoom: 16 });
    }, [map]);

    return position === null || accuracy === null ? null : (
        <>
            <Marker position={position}>
                <Popup>여기에서 {accuracy}m 이내에 있습니다.</Popup>
            </Marker>
            <Circle center={position} radius={accuracy} />
        </>
    );
};

interface Dish {
    id: number;
    lat: number;
    lng: number;
    name: string;
    img: string;
}

const Nearby = () => {
    const [dishes, setDishes] = useState<Dish[]>([{
        id: 1,
        lat: 37.5665,
        lng: 126.9780,
        name: "김치찌개",
        img: "/favicon-96x96.png",
    }, {
        id: 2,
        lat: 37.5700,
        lng: 126.9820,
        name: "불고기",
        img: "/bulgogi.jpg",
    }]);

    const AddMarkerOnClick = () => {
        useMapEvents({
            click(e: L.LeafletMouseEvent) {
                const newMarker: Dish = {
                    id: dishes.length + 1,
                    lat: e.latlng.lat,
                    lng: e.latlng.lng,
                    name: `새 요리 ${dishes.length + 1}`,
                    img: "/favicon-96x96.png",
                };
                setDishes((prev) => [...prev, newMarker]);
            },
        });
        return null;
    };

    return (
        <main className="body-container">
            <div className="nearby-content">
                <MapContainer
                    center={[37.5665, 126.978]}
                    zoom={13}
                    style={{ height: "100vh", width: "100vw" }}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
                    />
                    <LocationMarker />
                    <AddMarkerOnClick />

                    {dishes.map((dish) => (
                        <Marker key={dish.id} position={[dish.lat, dish.lng]}>
                            <Popup>
                                <b>{dish.name}</b>
                                <br />
                                <img src={dish.img} alt={dish.name} width="100" />
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
                {/* 생략된 사이드 패널 */}
            </div>
        </main>
    );
};

export default Nearby;