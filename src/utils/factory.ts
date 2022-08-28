import { SystemStyleObject } from '@tuteria/chakra-ui-system';
import { styled } from './native';
import * as reactNative from 'react-native';
import {
  As,
  ChakraComponent,
} from '@tuteria/chakra-ui-system/dist/src/system.types';

interface JSXNativeElements {
  ActivityIndicator: any;
  Button: any;
  DatePickerIOS: any;
  DrawerLayoutAndroid: any;
  FlatList: any;
  Image: any;
  ImageBackground: any;
  KeyboardAvoidingView: any;
  ListView: any;
  Modal: any;
  NavigatorIOS: any;
  Pressable: any;
  ProgressBarAndroid: any;
  ProgressViewIOS: any;
  RecyclerViewBackedScrollView: any;
  RefreshControl: any;
  SafeAreaView: any;
  ScrollView: any;
  SectionList: any;
  SegmentedControlIOS: any;
  Slider: any;
  SnapshotViewIOS: any;
  StatusBar: any;
  SwipeableListView: any;
  Switch: any;
  SwitchIOS: any;
  TabBarIOS: any;
  Text: any;
  TextInput: any;
  // ToolbarAndroid: any;
  TouchableHighlight: any;
  TouchableNativeFeedback: any;
  TouchableOpacity: any;
  TouchableWithoutFeedback: any;
  View: any;
  ViewPagerAndroid: any;
}
type NativeElements = keyof JSXNativeElements;

export type NativeChakraComponents = {
  [Tag in NativeElements]: ChakraComponent<Tag | any, {}>;
};

type StyleResolverProps = SystemStyleObject & {
  __css?: SystemStyleObject;
  sx?: SystemStyleObject;
  theme: any;
  css?: any;
  // css?: CSSObject;
};
export interface ChakraStyledOptions {
  shouldForwardProp?(prop: string): boolean;
  label?: string;
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject);
}

type ChakraFactory = {
  <T extends As, P = {}>(
    component: T,
    options?: ChakraStyledOptions
  ): ChakraComponent<T, P>;
};

function factory() {
  const cache = new Map<
    NativeElements,
    ChakraComponent<NativeElements | any>
  >();

  return new Proxy(styled, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(
      _target,
      _thisArg,
      argArray: [NativeElements | any, ChakraStyledOptions]
    ) {
      return styled(...argArray);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(_, element: NativeElements) {
      if (!cache.has(element)) {
        const node = reactNative[element];
        cache.set(element, styled(node as any));
      }
      return cache.get(element);
    },
  }) as ChakraFactory & NativeChakraComponents;
}

export const nChakra = factory();
