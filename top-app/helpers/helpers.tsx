import CoursesIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/products.svg"
import { TopLevelCategory } from "../interfaces/toppage.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.inteface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: "courses", name: "Курсы", icon: <CoursesIcon></CoursesIcon>, id: TopLevelCategory.Courses },
    { route: "services", name: "Сервисы", icon: <ServicesIcon></ServicesIcon>, id: TopLevelCategory.Services },
    { route: "books", name: "Книги", icon: <BooksIcon></BooksIcon>, id: TopLevelCategory.Books },
    { route: "products", name: "Продукты", icon: <ProductsIcon></ProductsIcon>, id: TopLevelCategory.Products }
];