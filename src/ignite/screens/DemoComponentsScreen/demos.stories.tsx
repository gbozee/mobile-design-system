import React from 'react';
import {
  DemoAutoImage,
  DemoButton,
  DemoCard,
  DemoHeader,
  DemoIcon,
  DemoListItem,
  DemoText,
  DemoTextField,
  DemoToggle,
} from './demos';
export default {
  title: 'Ignite/Components',
};

export const AutoImage = () => {
  return (
    <>
      {DemoAutoImage.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const Button = () => {
  return (
    <>
      {DemoButton.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const Card = () => {
  return (
    <>
      {DemoCard.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const Header = () => {
  return (
    <>
      {DemoHeader.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const Icon = () => {
  return (
    <>
      {DemoIcon.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const ListItem = () => {
  return (
    <>
      {DemoListItem.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const Text = () => {
  return (
    <>
      {DemoText.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const TextField = () => {
  return (
    <>
      {DemoTextField.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};

export const Toggle = () => {
  return (
    <>
      {DemoToggle.data.map((C, i) => {
        return <>{C}</>;
      })}
    </>
  );
};
