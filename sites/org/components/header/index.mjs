// Hooks
import { useContext } from 'react'
import { useTranslation } from 'next-i18next'
// Context
import { ModalContext } from 'shared/context/modal-context.mjs'
// Components
import {
  DesignIcon,
  DocsIcon,
  MenuIcon,
  SearchIcon,
  ShowcaseIcon,
  UserIcon,
  ThemeIcon,
  I18nIcon,
  MeasieIcon,
  PageIcon,
  RssIcon,
} from 'shared/components/icons.mjs'
import { HeaderWrapper } from 'shared/components/wrappers/header.mjs'
import { ModalThemePicker, ns as themeNs } from 'shared/components/modal/theme-picker.mjs'
import { ModalLocalePicker, ns as localeNs } from 'shared/components/modal/locale-picker.mjs'
import { ModalMenu } from 'site/components/navigation/modal-menu.mjs'

import { NavButton, NavSpacer, colors } from 'shared/components/header.mjs'

export const ns = ['header', 'sections', ...themeNs, ...localeNs]

const NavIcons = ({ setModal, setSearch }) => {
  const { t } = useTranslation(['header'])
  const iconSize = 'h-6 w-6 lg:h-12 lg:w-12'

  return (
    <>
      <NavButton onClick={() => setModal(<ModalMenu />)} label={t('header:menu')} color={colors[0]}>
        <MenuIcon className={iconSize} />
      </NavButton>
      <NavSpacer />
      <NavButton href="/designs" label={t('header:designs')} color={colors[1]}>
        <DesignIcon className={iconSize} />
      </NavButton>
      <NavButton
        href="/docs"
        label={t('header:docs')}
        color={colors[2]}
        extraClasses="hidden lg:flex"
      >
        <DocsIcon className={iconSize} />
      </NavButton>
      <NavButton
        href="/blog"
        label={t('header:blog')}
        color={colors[3]}
        extraClasses="hidden lg:flex"
      >
        <RssIcon className={iconSize} />
      </NavButton>
      <NavButton
        href="/showcase"
        label={t('header:showcase')}
        color={colors[4]}
        extraClasses="hidden lg:flex"
      >
        <ShowcaseIcon className={iconSize} />
      </NavButton>
      <NavSpacer />
      <NavButton
        href="/patterns"
        label={t('header:patterns')}
        color={colors[5]}
        extraClasses="hidden lg:flex"
      >
        <PageIcon className={iconSize} />
      </NavButton>
      <NavButton
        href="/sets"
        label={t('header:sets')}
        color={colors[6]}
        extraClasses="hidden lg:flex"
      >
        <MeasieIcon className={iconSize} />
      </NavButton>
      <NavButton href="/account" label={t('header:account')} color={colors[7]}>
        <UserIcon className={iconSize} />
      </NavButton>
      <NavSpacer />
      <NavButton
        onClick={() => setModal(<ModalThemePicker />)}
        label={t('header:theme')}
        color={colors[8]}
      >
        <ThemeIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setModal(<ModalLocalePicker />)}
        label={t('header:language')}
        color={colors[9]}
      >
        <I18nIcon className={iconSize} />
      </NavButton>
      <NavButton onClick={() => setSearch(true)} label={t('header:search')} color={colors[10]}>
        <SearchIcon className={iconSize} />
      </NavButton>
    </>
  )
}

export const Header = ({ setSearch, show }) => {
  const { setModal } = useContext(ModalContext)
  return (
    <HeaderWrapper setSearch={setSearch} show={show}>
      <div className="m-auto md:px-8">
        <div className="p-0 flex flex-row gap-2 justify-between text-neutral-content items-center">
          {/* Non-mobile content */}
          <div className="hidden lg:flex lg:flex-row lg:justify-between items-center xl:justify-center w-full">
            <NavIcons setModal={setModal} setSearch={setSearch} />
          </div>

          {/* Mobile content */}
          <div className="flex lg:hidden flex-row items-center justify-between w-full">
            <NavIcons setModal={setModal} setSearch={setSearch} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}
