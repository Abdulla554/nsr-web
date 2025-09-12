import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// إصلاح مشكلة الأيقونة
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapSection = () => {
  return (
    <div className="w-full md:max-w-[1360px] mx-auto my-20 h-[500px] rounded-2xl overflow-hidden shadow-xl relative">
      <MapContainer
        center={[36.206293, 44.008869]} // إحداثيات 120m Road, Erbil
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.206293, 44.008869]}>
          <Popup>
            <a
              href="https://maps.app.goo.gl/JancgRb9w7pPZ5PM8?g_st=it"
              target="_blank"
              rel="noopener noreferrer"
            >
              عرض الموقع في Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>

      {/* زر خارجي لفتح الموقع على خرائط Google */}
      <a
        href="https://maps.app.goo.gl/JancgRb9w7pPZ5PM8?g_st=it"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 left-5 bg-red-dark hover:bg-red-medium hover:text-white text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300"
      >
        فتح في Google Maps
      </a>
    </div>
  );
};

export default MapSection;
