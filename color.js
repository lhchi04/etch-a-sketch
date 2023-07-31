Coloris({
  theme: 'pill',
  themeMode: 'dark', // light, dark, auto
});

Coloris({
  swatches: [
    '#264653',
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#e76f51',
    '#d62828',
    '#023e8a',
    '#0077b6',
    '#0096c7',
    '#00b4d8',
    '#48cae4',
  ]
});

Coloris({
  // parent container
  parent: null,
  // The bound input fields are wrapped in a div that adds a thumbnail showing the current color
  // and a button to open the color picker (for accessibility only).
  wrap: true,
  // enable format toggle button
  formatToggle: true,
  // Margin in px
  margin: 1,
  // Show only the color swatches in the picker dialog
  swatchesOnly: false,
  // disable alpha
  alpha: true,
  // not focus the color value input
  focusInput: false,
  // select the color value input when the picker opens
  selectInput: true,
  // auto close
  autoClose: false,
  // set to true to use the color picker as an inline widget
  inline: false,
  // default colorin inline mode
  defaultColor: '#ffffff',
  // config the clear button
  clearButton: {
    show: false,
    label: 'Clear' 
  },
  // close button
  closeButton: false,
  closeLabel: 'Close',
  // a11y
  a11y: {
    open: 'Open color picker',
    close: 'Close color picker',
    clear: 'Clear the selected color',
    marker: 'Saturation: {s}. Brightness: {v}.',
    hueSlider: 'Hue slider',
    alphaSlider: 'Opacity slider',
    input: 'Color value field',
    format: 'Color format',
    swatch: 'Color swatch',
    instruction: 'Saturation and brightness selector. Use up, down, left and right arrow keys to select.'
  }
  
});