import styles from './Header.module.css'

function Header() {
    return(
        <div id={styles['header']}>
            <h1 id={styles['headerText']}>Haus Rosenbühl</h1>
        </div>
    )
}

export default Header;