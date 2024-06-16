import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <div className={styles.search}>
            <input type="search" placeholder='Busque na sua região' className={styles.search_bar} />
            <button className={styles.btn}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default SearchBar;