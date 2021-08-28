import React, { useCallback, useMemo, useState } from 'react';

interface IProps {
  dataList: any[];
  updateDataList: (newDataList: any[]) => void;
  children: React.ReactNode;
}

function WrapperExperience({ children, dataList, updateDataList }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);
  // const onChangeCurrentItem = useCallback((newValue = {}), [currentItem]);

  // const newChildren = useMemo(() => {
  //   return React.Children.map(children, (child) => {
  //     if (React.isValidElement(child)) {
  //       return React.cloneElement(child, {
  //         currentItem,
  //         onChangeCurrentItem,
  //       });
  //     }
  //     return child;
  //   });
  // }, [children, dataList]);

  return <div styleName="wrapper" />;
}

export default WrapperExperience;
