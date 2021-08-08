import React, { useReducer } from "react";
import { Advantages, Htag, P, Product, Sort, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from "./TopPageComponent.module.css"
import { HhData } from "../../components/HhData/HhData";
import { TopLevelCategory } from "../../interfaces/toppage.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps ): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Raiting });
    
    const setSort = (sort: SortEnum) => {
        dispathSort({ type: sort });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}></Sort>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p}></Product>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}></HhData>}
            {page.advantages && page.advantages.length > 1 && <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages}></Advantages>
                </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText }}></div>}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
        </div>
    );
}