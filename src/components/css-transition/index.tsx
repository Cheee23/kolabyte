import React, {useEffect, useState} from "react";
import withDefaults from "@utils/with-defaults";

interface Props {
  visible?: boolean;
  enterTime?: number;
  leaveTime?: number;
  clearTime?: number;
  className?: string;
  name?: string;
  children?: React.ReactNode;
}

const defaultProps = {
  visible: false,
  enterTime: 60,
  leaveTime: 60,
  clearTime: 60,
  className: "",
  name: "transition",
};

export type CSSTransitionProps = Props & typeof defaultProps;

const CSSTransition: React.FC<CSSTransitionProps> = ({
  children,
  className,
  visible,
  enterTime,
  leaveTime,
  clearTime,
  name,
  ...props
}) => {
  const [renderable, setRenderable] = useState<boolean>(visible);

  useEffect(() => {
    const time = visible ? enterTime : leaveTime;

    if (visible && !renderable) {
      setRenderable(true);
    }


    // set class to active
    const timer = setTimeout(() => {
      clearTimeout(timer);
    }, time);

    // remove classess when animation over
    const clearClassesTimer = setTimeout(() => {
      if (!visible) {
        setRenderable(false);
      }
      clearTimeout(clearClassesTimer);
    }, time + clearTime);

    return () => {
      clearTimeout(timer);
      clearTimeout(clearClassesTimer);
    };
  }, [visible, renderable]);
  if (!React.isValidElement(children) || !renderable) return null;

  return React.cloneElement(children, {
    ...props,
  });
};

export default withDefaults(CSSTransition, defaultProps);
