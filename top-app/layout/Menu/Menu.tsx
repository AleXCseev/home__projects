import { useContext } from "react"
import { AppContext } from "../../context/app.context"
import { FirstLevelMenuItem } from "../../interfaces/menu.inteface"
import CoursesIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/products.svg"
import styles from "./Menu.module.css"
import { TopLevelCategory } from "../../interfaces/toppage.interface"
import cn from "classnames"

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: "courses", name: "Курсы", icon: <CoursesIcon></CoursesIcon>, id: TopLevelCategory.Courses },
    { route: "services", name: "Сервисы", icon: <ServicesIcon></ServicesIcon>, id: TopLevelCategory.Services },
    { route: "books", name: "Книги", icon: <BooksIcon></BooksIcon>, id: TopLevelCategory.Books },
    { route: "products", name: "Продукты", icon: <ProductsIcon></ProductsIcon>, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {

    const { menu, setMenu, firstCategory } = useContext(AppContext)

    const buildFirstLevel = () => {
        return (
            <>
                { firstLevelMenu.map( menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(
                                styles.firstLevel, {
                                    [styles.firstLevelActive]: menu.id == firstCategory
                                }
                            )}>
                                { menu.icon }
                                <span>{ menu.name }</span>
                            </div>
                        </a>
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = () => {
        
    }

    const buildThirdLevel = () => {
        
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
        
    )
}