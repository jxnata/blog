import { connect, styled } from "frontity";
import Link from "./link";
import Navigation from "./navigation/navigation";
import SearchButton from "./search/search-button";
import SearchModal from "./search/search-modal";
import MobileSearchButton from "./mobile/search-button";
import MobileMenuButton from "./mobile/menu-button";
import MobileMenuModal from "./mobile/menu-modal";
import { LogoIcon } from "./icons";

const Header = ({ state }) => {
  const { title, description } = state.frontity;
  const { headerBg } = state.theme.colors[state.theme.mode];
  const colors = state.theme.colors[state.theme.mode];

  return (
    <PageHeader bg={headerBg} id="site-header">
      <HeaderInner>
        <TitleWrapper>
          {/* Search button on mobile */}
          {state.theme.showSearchInHeader && <MobileSearchButton />}

          {/* Heading and Description of the site */}
          <StyledLink link="/">
            {/* <SiteLogo src={Logo} alt="jxnata.dev" /> */}
            <SiteLogo colors={colors}>
              <LogoIcon />
            </SiteLogo>
          </StyledLink>
          <TitleGroup>
            <StyledLink link="/">
              <SiteTitle>{title}</SiteTitle>
              <SiteDescription>{description}</SiteDescription>
            </StyledLink>
          </TitleGroup>

          {/* Mobile menu button and modal */}
          <MobileMenuButton />
          <MobileMenuModal />
        </TitleWrapper>

        <HeaderNavigationWrapper>
          {/* Desktop navigation links */}
          <Navigation />
          {/* Desktop search button */}
          {state.theme.showSearchInHeader && <SearchButton />}
        </HeaderNavigationWrapper>
      </HeaderInner>
      {/* Global search modal */}
      <SearchModal />
    </PageHeader>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const TitleGroup = styled.div`
  @media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: -1rem 0 0 -2.4rem;
  }
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  text-align: center;
  width: 100%;

  @media (min-width: 1000px) {
    width: auto;
    margin-right: 4rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
  }
`;

const PageHeader = styled.header`
  z-index: 1;
  background: ${(props) => props.bg};
  position: relative;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 0;
  max-width: 168rem;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

const SiteTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const SiteLogo = styled.span`
  svg {
    margin-right: 10px;
    fill: ${(props) => props.colors.accent};
  }
  svg:hover {
    fill: ${(props) => props.colors.primary};
  }
`;

const SiteDescription = styled.div`
  margin: 0;
  margin-top: 1rem;
  color: #6d6d6d;
  font-size: 1.4rem;
  font-weight: 500;
  display: none;
  letter-spacing: -0.0311em;
  transition: all 0.15s linear;

  @media (min-width: 1000px) {
    margin: 0.5rem 0 0 2.4rem;
  }

  @media (min-width: 700px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderNavigationWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
`;
