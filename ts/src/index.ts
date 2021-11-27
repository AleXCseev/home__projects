import { Company } from "./Company";
import { User } from "./Users";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

map.addMarker(user);
map.addMarker(company);
