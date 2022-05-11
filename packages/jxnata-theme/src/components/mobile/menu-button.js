import { connect } from "frontity";
import { ToggleIcon } from "../icons";
import {
  LabeledIcon,
  NavToggle,
  ToggleWrapper,
} from "../navigation/nav-toggle";

const MobileMenuButton = ({ state, actions }) => {
  // Get the menu state and action
  const { isMobileMenuOpen } = state.theme;
  const { openMobileMenu } = actions.theme;

  const colors = state.theme.colors[state.theme.mode];

  return (
    <ToggleWrapper>
      <NavToggle
        isMobile
        aria-expanded={isMobileMenuOpen}
        onClick={openMobileMenu}
        aria-label="Click to open search bar..."
      >
        <LabeledIcon icon={ToggleIcon} label="Menu" color={colors.gray.base} />
      </NavToggle>
    </ToggleWrapper>
  );
};

export default connect(MobileMenuButton);
