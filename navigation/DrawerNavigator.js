import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../screens';
import { ArticlesScreen } from '../screens/ArticlesScreen';
import { PersonScreen } from '../screens/PersonScreen';
import { PlaceScreen } from '../screens/PlaceScreen';
import { AssignmentScreen } from '../screens/AssignmentScreen';
import { InventoryScreen } from '../screens/InventoryScreen';
import { ScanScreen } from '../screens/ScanScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="dashbord"
          component={ Dashboard }
          options={{ title: 'Menú principal' }}
        />
        <Drawer.Screen
          name="items"
          component={ ArticlesScreen }
          options={{ title: 'Artículos' }}
        />
        <Drawer.Screen
          name="persons"
          component={ PersonScreen }
          options={{ title: 'Personas' }}
        />
        <Drawer.Screen
          name="places"
          component={ PlaceScreen }
          options={{ title: 'Ubicaciones' }}
        />
        <Drawer.Screen
          name="assigments"
          component={ AssignmentScreen }
          options={{ title: 'Asignaciones' }}
        />
        <Drawer.Screen
          name="inventary"
          component={ InventoryScreen }
          options={{ title: 'Inventarios' }}
        />
        <Drawer.Screen
          name="scan"
          component={ ScanScreen }
          options={{ title: 'Escanear' }}
        />
      </Drawer.Navigator>
  );
};
