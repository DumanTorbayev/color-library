export interface ColorItemsMethods {
  onBlur: (id: string, name: string) => void;
  onRemoveColor: (id: string) => void;
  onColorPicker: ({ show, id }: { show: boolean; id: string }) => void;
  colorPicker: { show: boolean; id: string };
  onSelectColor: (id: string, hexCode: string) => void;
}
