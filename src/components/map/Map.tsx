import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { LatLngExpression } from 'leaflet';
import { offices } from '@taftaf/data';
import { VStack, Text } from '@chakra-ui/layout';

type MapProps = {
    center: number[];
};

const Map = ({ center }: MapProps): JSX.Element => {
    return (
        <MapContainer
            center={center as LatLngExpression}
            zoom={8}
            scrollWheelZoom={true}
            dragging={true}
            bounceAtZoomLimits={true}
            style={{ height: 400, width: '100%', zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {offices.locations.map(({ name, address, coordinates, phoneNumber }, index) => (
                <Marker position={coordinates as LatLngExpression} key={index}>
                    <Popup>
                        <VStack align="start">
                            <Text>{name}</Text>
                            <Text>{address}</Text>
                            <Text>{phoneNumber}</Text>
                        </VStack>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
