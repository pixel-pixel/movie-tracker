import { Serial, SerialFilter } from "../common/intarfaces";

export const serialNameFilter = (name: string): SerialFilter => 
(serial) => {
  const serialNormalName = serial.name.toLowerCase()
  const normalName = name.toLowerCase()

  return serialNormalName.startsWith(normalName) || serialNormalName.includes(normalName)
}