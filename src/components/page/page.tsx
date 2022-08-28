// import React, { ReactNode } from "react";
// import { Platform, StatusBarStyle } from "react-native";
// import FocusAwareStatusBar from "./statusbar";


// import styled from "@emotion/native";
// import { LinearGradient } from "expo-linear-gradient";
// import { heightPixel, widthPixel } from "../../utility/pxToDpConvert";

// export const ViewContainer = styled.View({
//   paddingHorizontal: widthPixel(20),
// });

// export const ActionSheetViewContainer = styled.View({
//   paddingHorizontal: widthPixel(20),
//   paddingTop: heightPixel(25),
//   paddingBottom: heightPixel(50),
// });

// export const BaseViewContainer = styled.KeyboardAvoidingView<{
//   backgroundColor?: string;
// }>(({ backgroundColor }) => ({
//   backgroundColor,
//   flex: 1,
// }));

// export const CenterViewContainer = styled.KeyboardAvoidingView<{
//   backgroundColor?: string;
// }>(({ backgroundColor }) => ({
//   backgroundColor,
//   flex: 1,
//   alignItems: "center",
//   justifyContent: "center"
// }));

// export const BaseLGView = styled(LinearGradient)({
//   flex: 1,
// });

// export const RoundedActionSheet = {
//   borderTopLeftRadius: widthPixel(30),
//   borderTopRightRadius: widthPixel(30),
// };

// export const Divider = styled.View<{ size?: number }>(({ size = 7 }) => ({
//   height: size,
//   backgroundColor: "rgba(218, 218, 218, 0.3)",
// }));

// export const Spacer = styled.View<{ height?: number }>(({ height }) => ({
//   height: heightPixel(height ?? 20),
// }));

// export const HSpacer = styled.View<{ width?: number }>(({ width }) => ({
//   width: widthPixel(width ?? 20),
// }));

// export const BottomContainer = styled(ViewContainer)({
//   width: "100%",
//   bottom: Platform.OS === "android" ? 40 : 35,
//   position: 'absolute'
// });



// export type BaseViewProps = {
//   children?: ReactNode;
//   focusBarStyle?: StatusBarStyle,
//   backgroundColor?: string
// }

// export const BaseView: React.FC<BaseViewProps> = ({
//   focusBarStyle,
//   backgroundColor,
//   children
// }) => {
//   // const height = useHeaderHeight();

//   return (
//     <BaseViewContainer
//       contentContainerStyle={{ flex: 1 }}
//       behavior={Platform.select({ ios: 'height', android: undefined })}
//       keyboardVerticalOffset={Platform.select({
//         ios: 0,
//         // android: height + heightPixel(100)
//       })}
//       enabled={true}
//       backgroundColor={backgroundColor}
//     >
//       <FocusAwareStatusBar
//         backgroundColor={'transparent'}
//         translucent={true}
//         barStyle={focusBarStyle ?? 'dark-content'}
//       />

//       {children}
//     </BaseViewContainer>
//   )
// }
