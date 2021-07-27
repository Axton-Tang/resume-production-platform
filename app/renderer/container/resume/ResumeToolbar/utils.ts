// 增加工具条
export const onAddToolbar = (
  preToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  const addKeys = preToolbarList.map((s: TSResume.SliderItem) => s.key);
  let nextToolbarList = [...Array.from(preToolbarList)];
  if (!addKeys.includes(currentToolbar.key)) {
    nextToolbarList.push(currentToolbar);
  }
  return nextToolbarList;
};

// 删除工具条
export const onDeleteToolbar = (
  preToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  let nextToolbarList = [...Array.from(preToolbarList)];
  let findIndex = preToolbarList.findIndex((s: TSResume.SliderItem) => s.key === currentToolbar.key);
  if (findIndex > -1) {
    nextToolbarList.splice(findIndex, 1);
  }
  return nextToolbarList;
};
