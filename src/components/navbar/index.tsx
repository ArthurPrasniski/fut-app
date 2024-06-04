import { ButtonContainer, NavbarContainer } from "./styles"
import { HomeIcon, CalendarPlus, CalendarDaysIcon } from 'lucide-react-native';

interface NavbarProps {
  navigation: any;
  currentScreen: string;
}

export const Navbar = ({ navigation, currentScreen }: NavbarProps) => {
  const icons = [
    {
      name: 'home',
      icon: HomeIcon,
      screen: 'home'
    },
    {
      name: 'calendar-plus',
      icon: CalendarPlus,
      screen: 'NewGame'
    },
    {
      name: 'calendar-days',
      icon: CalendarDaysIcon,
      screen: 'OldGames'
    }
  ]

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen)
  }

  return (
    <NavbarContainer>
      {icons.map((icon, index) => {
        const Icon = icon.icon
        const isSelected = icon.screen === currentScreen
        return (
          <ButtonContainer key={index} isSelected={isSelected} onPress={() => navigateToScreen(icon.screen)}>
            <Icon size={24} color={isSelected ? "#fff" : "#000"} />
          </ButtonContainer>
        )
      })}
    </NavbarContainer>
  )
}