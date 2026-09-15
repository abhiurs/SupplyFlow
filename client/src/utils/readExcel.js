import * as XLSX from "xlsx";

export const readExcelFile = async (
  filePath,
  sheetName
) => {

  const response = await fetch(filePath);

  const arrayBuffer =
    await response.arrayBuffer();

  const workbook = XLSX.read(
    arrayBuffer,
    {
      type: "array",
    }
  );

  const worksheet =
    workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(
    worksheet
  );

  return data;

};