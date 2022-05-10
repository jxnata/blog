import { connect } from "frontity";
import { SearchIcon } from "../icons";
import {
  LabeledIcon,
  SearchToggle,
  ToggleWrapper,
} from "../navigation/nav-toggle";

const MobileSearchButton = ({ state, actions }) => {
  // Get the state of the search modal
  const { isSearchModalOpen } = state.theme;
  const { openSearchModal } = actions.theme;

  const colors = state.theme.colors[state.theme.mode];

  return (
    <ToggleWrapper>
      <SearchToggle
        isMobile
        aria-expanded={isSearchModalOpen}
        onClick={openSearchModal}
        aria-label="Click to open search bar..."
      >
        <LabeledIcon
          color={colors.gray.base}
          icon={SearchIcon}
          label="Search"
        />
      </SearchToggle>
    </ToggleWrapper>
  );
};

export default connect(MobileSearchButton);
