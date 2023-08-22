export default function getNumberColumns(n) {
  let gridColumns = '';
    for (let i = 0; i < n; i++) {
    gridColumns += "1fr ";
  }
  return gridColumns;
}
