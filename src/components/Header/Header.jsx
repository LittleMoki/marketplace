import styles from './Header.module.css'
import Container from '../Container/Container.jsx'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoginIcon from '@mui/icons-material/Login'
import LanguageIcon from '@mui/icons-material/Language'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import tripLogo1 from '../../assets/tripLogo1.svg'
import tripLogo2 from '../../assets/tripLogo2.svg'
import Menu from '../../UI/Menu/Menu.jsx'
import { useStoreMenu } from '../../store/store.js'
import { useTranslation } from 'react-i18next'

function Header() {
	const { menu } = useStoreMenu()
	const { i18n } = useTranslation()
	const changeLanguage = language => {
		i18n.changeLanguage(language)
	}
	console.log(i18n)
	// console.log(document.body.style.overflow = 'hidden')
	menu
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'auto')
	return (
		<header className={styles.header}>
			<div className={styles.header__top}>
				<Container>
					<div className={styles.header__top_inner}>
						<div className={styles.header__top__inner_menu}>
							<div className={styles.header__top__inner_menu__wrapper}>
								<Menu />
								<div className={styles.header__top__inner_menu__wrapper_img}>
									<img
										className={
											styles.header__top__inner_menu__wrapper_img__item
										}
										src={tripLogo2}
										alt='logo'
									/>
								</div>
							</div>
							<div
								className={`${styles.header__top__inner_menu__list} ${
									menu && styles.active
								}`}
							>
								<div className={styles.header__top__inner_menu__list_item}>
									Trips
								</div>
								<div className={styles.header__top__inner_menu__list_item}>
									Tour organizers
								</div>
								<div className={styles.header__top__inner_menu__list_item}>
									Help
								</div>
								<div className={styles.header__top__inner_menu__list_item}>
									<LoginIcon />
									<LanguageIcon />
									<AttachMoneyIcon />
								</div>
							</div>
						</div>
						<div className={styles.header__top__item}>
							<FavoriteBorderIcon />
							Wishlist
						</div>
						<div className={styles.header__top__item}>
							<LoginIcon />
							<p>Log In</p>
							<p>Sign up</p>
						</div>
						<div className={styles.header__top__item}>
							<LanguageIcon />
							<select
								className={styles.header__top__item_select}
								onClick={e => changeLanguage(e.target.value)}
							>
								<option value='en'>en</option>
								<option value='ru'>ru</option>
							</select>
						</div>
						<div className={styles.header__top__item}>
							<AttachMoneyIcon />
							USD
							<KeyboardArrowDownIcon />
						</div>
					</div>
				</Container>
			</div>
			<div className={styles.header__bottom}>
				<Container>
					<div className={styles.header__bottom_inner}>
						<div className={styles.header__bottom_inner__logo}>
							<img
								src={tripLogo1}
								alt='logo'
								className={styles.header__bottom_inner__logo_item}
							/>
						</div>
						<ul className={styles.header__bottom_inner__list}>
							<li className={styles.header__bottom_inner__list_item}>
								<a
									href=''
									className={styles.header__bottom_inner__list_item__link}
								>
									Destinations
								</a>
							</li>
							<li className={styles.header__bottom_inner__list_item}>
								<a
									href=''
									className={styles.header__bottom_inner__list_item__link}
								>
									Tours
								</a>
							</li>
							<li className={styles.header__bottom_inner__list_item}>
								<a
									href=''
									className={styles.header__bottom_inner__list_item__link}
								>
									About us
								</a>
							</li>
						</ul>
						<div className={styles.header__bottom_inner__button}>
							<button className={styles.header__bottom_inner__button_item}>
								Contact us
							</button>
						</div>
					</div>
				</Container>
			</div>
		</header>
	)
}

export default Header
