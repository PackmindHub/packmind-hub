import './categories.style.css';

interface CategoriesProps {
    categories: string[];
}

export const Categories = ({categories}: CategoriesProps) => {
    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <span className={'pm-category'} key={index + category}>{category}</span>
                )
            })}
        </div>
    );
}
