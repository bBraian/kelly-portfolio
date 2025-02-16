import styled from "styled-components";
import * as Switch from "@radix-ui/react-switch";
import * as Select from "@radix-ui/react-select";

export const HeaderContainer = styled.header`
  @media (max-width: 1024px) {
    height: 3.5rem;
    border-bottom: 1px solid ${(props) => props.theme["project-bg"]};
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  width: 100%;
  position: fixed;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0, 0.5);
  z-index: 9;
`;

export const HeaderDesktop = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  width: 100%;
  position: fixed;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0, 0.5);
`;

export const Links = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  button {
    text-decoration: none;
    color: ${(props) => props.theme["contents"]};
    font-family: "DM Sans", sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    box-shadow: none;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
  }

  button:hover {
    color: ${(props) => props.theme["header-hover"]};
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

/** MOBILE */

export const HeaderMobile = styled.div`
  @media (max-width: 1024px) {
    display: flex;
  }
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.6rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  align-items: center;
`;

export const HeaderName = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme["titles"]};
`;

export const BackgroundGradient = styled.div`
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(231, 15, 170, 1) 0%,
    rgba(0, 192, 253, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
`;

export const ButtonOpenNav = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfigBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const SwitchRoot = styled(Switch.Root)`
  cursor: pointer;
  width: 42px;
  height: 25px;
  border-radius: 9999px;
  position: relative;
  border: 1px solid ${(props) => props.theme["border-switch"]};
  background-color: ${(props) => props.theme["background-switch"]};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  border: 0;
  background-color: ${(props) => props.theme["icon-switch"]};
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  color: ${(props) => props.theme["color-icon-switch"]};

  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;

export const SelectTrigger = styled(Select.Trigger)`
  cursor: pointer;
  height: 1.6rem;
  padding: 0 0.4rem 0 0.6rem;
  display: flex;
  gap: 9px;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme["border-switch"]};
  background-color: ${(props) => props.theme["background-switch"]};
  border-radius: 1rem;
  -webkit-appearance: none;
  font-size: 0.85rem;
  font-weight: 400;
  color: ${(props) => props.theme["color-icon-switch"]};

  &::-ms-expand {
    display: none;
  }
`;

export const LangSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const SelectIcon = styled(Select.Icon)`
  color: ${(props) => props.theme["color-icon-switch"]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectValue = styled(Select.Value)`
  color: ${(props) => props.theme["color-icon-switch"]};
`;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  z-index: 999999;
  background-color: ${(props) => props.theme["background-switch"]};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const SelectScrollButton = styled(Select.SelectScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: ${(props) => props.theme["background-switch"]};
  color: ${(props) => props.theme["color-icon-switch"]};
  cursor: default;
`;

export const SelectItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: ${(props) => props.theme["color-icon-switch"]};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 30px 0 20px;
  position: relative;
  user-select: none;
  opacity: 0.6;

  &[data-disabled] {
    opacity: 0.3;
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    opacity: 1;
  }
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const LangImg = styled.img`
  height: 1rem;
  width: 1.6rem;
  margin: 6px;
  object-fit: cover;
  object-position: left;
`;
