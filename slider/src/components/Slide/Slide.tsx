
import styles from "./slide.module.css";

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

export const Slide: React.FC<SlideProps> = ({children, ...props}) => {
    return (
        <div className={ styles.slide } {...props}>
            {children}
        </div>
    )
}