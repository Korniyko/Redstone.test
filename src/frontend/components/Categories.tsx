import React, { useEffect } from "react";
import './Categories.scss'

type CategoriesProps = {
    categories: any[],
    getCategories: () => void

}

const Categories = ({ categories, getCategories }: CategoriesProps) => {


    useEffect(() => {
        getCategories()


    }, [])






    return (
        <section className="categoriesSection container">
            <div className="categoriesTitleContainer">
                <h1>Ефектні та ефективні веб і мобайл рішення із зануренням у ваш бізнес</h1>

                <p>Ми знаємо болі у Вашій ніші! У нашому арсеналі є всі інструменти для їх вирішення: аналіз,
                    брендинг, розробка сайту, створення app і технічна підтримка.
                </p>
            </div>
            <div className="categoriesContainer">

                {categories.map(item => (
                    <div className="categoruItem" key={item.id} >

                        <div className="categoryBackground" style={{ "--color-code": item.backgroundColor }}></div>
                        <div className="categoryTitle">{item.title}</div>
                        <div className="categoryImgContainer">
                            <img className="categoryImg" src={item.img} alt={item.title} />
                        </div>
                    </div>
                ))
                }
            </div>
        </section>

    )
}
export default Categories;



